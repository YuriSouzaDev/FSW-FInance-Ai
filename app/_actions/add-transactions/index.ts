'use server';

import { db } from '@/app/_lib/prisma';
import { auth } from '@clerk/nextjs/server';
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { addTransactionSchema } from './schema';

interface addTransactionsProps {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const addTransactions = async (params: addTransactionsProps) => {
  addTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) {
    throw new Error('Unauthorized');
  }
  await db.transaction.create({ data: { ...params, userId } });
  revalidatePath('/transactions');
};
