import { Badge } from '@/app/_components/ui/badge';
import { Transaction, TransactionType } from '@prisma/client';
import { CircleIcon } from 'lucide-react';

export const TRANSACTION_TYPES_LABELS = {
  DEPOSIT: 'Depósito',
  EXPENSE: 'Despesa',
  INVESTMENT: 'Investimento',
};

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted text-primary hover:bg-muted font-bold">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        {TRANSACTION_TYPES_LABELS[transaction.type]}
      </Badge>
    );
  }

  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger/10 text-danger hover:bg-danger/10 font-bold">
        <CircleIcon className="mr-2 fill-danger" size={10} />
        {TRANSACTION_TYPES_LABELS[transaction.type]}
      </Badge>
    );
  }

  return (
    <Badge className="bg-muted text-white hover:bg-muted font-bold">
      <CircleIcon className="mr-2 fill-white" size={10} />
      {TRANSACTION_TYPES_LABELS[transaction.type]}
    </Badge>
  );
};

export default TransactionTypeBadge;
