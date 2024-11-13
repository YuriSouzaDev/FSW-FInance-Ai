'use client';

import {
  TRANSACTION_CATEGORIES_LABELS,
  TRANSACTIONS_PAYMENT_METHODS_LABELS,
} from '@/app/_constants/transactions';
import { Transaction } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import DeteleTransactionButton from '../_components/delete-transaction-button';
import EditTransactionButton from '../_components/edit-transaction-button';
import TransactionTypeBadge from '../_components/type-badge';

export const transationsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'type',
    header: 'Tipo',
    cell: ({ row: { original: transaction } }) => {
      return <TransactionTypeBadge transaction={transaction} />;
    },
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
    cell: ({ row: { original: transaction } }) => {
      return TRANSACTION_CATEGORIES_LABELS[transaction.category];
    },
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Método de Pagamento',
    cell: ({ row: { original: transaction } }) => {
      return TRANSACTIONS_PAYMENT_METHODS_LABELS[transaction.paymentMethod];
    },
  },
  {
    accessorKey: 'date',
    header: 'Data',
    cell: ({ row: { original: transaction } }) => {
      return new Date(transaction.date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    },
  },
  {
    accessorKey: 'amount',
    header: 'Valor',
    cell: ({ row: { original: transaction } }) => {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(transaction.amount));
    },
  },
  {
    accessorKey: 'actions',
    header: '',
    cell: ({ row: { original: transaction } }) => {
      return (
        <div className="space-x-1">
          <EditTransactionButton transaction={transaction} />
          <DeteleTransactionButton transactionId={transaction.id} />
        </div>
      );
    },
  },
];
