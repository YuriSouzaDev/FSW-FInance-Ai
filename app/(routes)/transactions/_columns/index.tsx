'use client';

import { Transaction } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import TransactionTypeBadge from '../_components/type-badge';

export const TRANSACTION_CATEGORIES_LABELS = {
  HOUSING: 'Moradia',
  TRANSPORTATION: 'Transporte',
  FOOD: 'Alimentação',
  ENTERTAINMENT: 'Entretramento',
  HEALTH: 'Saúde',
  UTILITY: 'Utilidade',
  SALARY: 'Salário',
  EDUCATION: 'Educação',
  OTHER: 'Outros',
};

export const TRANSACTIONS_PAYMENT_METHODS_LABELS = {
  CREDIT_CARD: 'Cartão de Crédito',
  DEBIT_CARD: 'Cartão de Débito',
  BANK_TRANSFER: 'Transferência Bancária',
  BANK_SLIP: 'Boleto',
  CASH: 'Dinheiro',
  PIX: 'Pix',
  OTHER: 'Outros',
};

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
  },
];
