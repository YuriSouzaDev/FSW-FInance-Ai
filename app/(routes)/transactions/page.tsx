import AddTransactionButton from '@/app/_components/add-transaction-button';
import { DataTable } from '@/app/_components/ui/data-table';
import { db } from '@/app/_lib/prisma';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { transationsColumns } from './_columns';

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect('/login');
  }
  const transactions = await db.transaction.findMany({ where: { userId } });
  return (
    <div className="p-6 space-y-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transationsColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
