'use client';

import { Badge } from '@/app/_components/ui/badge';
import { Transaction, TransactionType } from '@prisma/client';
import { ColumnDef } from '@tanstack/react-table';
import { CircleIcon } from 'lucide-react';

export const transationsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'type',
    header: 'Tipo',
    cell: ({ row: { original: transaction } }) => {
      if (transaction.type === TransactionType.DEPOSIT) {
        return (
          <Badge className="bg-muted text-primary hover:bg-muted font-bold">
            <CircleIcon className="mr-2 fill-primary" size={10} />
            Depósito
          </Badge>
        );
      }
    },
  },
  {
    accessorKey: 'category',
    header: 'Categoria',
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Método de Pagamento',
  },
  {
    accessorKey: 'date',
    header: 'Data',
  },
  {
    accessorKey: 'amount',
    header: 'Valor',
  },
  {
    accessorKey: 'actions',
    header: '',
  },
];
