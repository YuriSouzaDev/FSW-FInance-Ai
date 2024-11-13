import AddTransactionButton from '@/app/_components/add-transaction-button';
import { Card, CardContent, CardHeader } from '@/app/_components/ui/card';
import React from 'react';

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  amount: number;
  size?: 'small' | 'large';
  userCanAddTransaction?: boolean;
}

const SummaryCard = ({
  icon,
  title,
  amount,
  size = 'small',
  userCanAddTransaction,
}: SummaryCardProps) => {
  return (
    <Card className={`${size === 'large' ? 'bg-white/5' : ''}`}>
      <CardHeader className="flex-row gap-2 items-center">
        {icon}
        <p
          className={`${
            size === 'small' ? 'text-muted-foreground' : 'text-white/70'
          }`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`${
            size === 'small' ? 'text-2xl font-bold' : 'text-4xl font-bold'
          }`}
        >
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(amount)}
        </p>
        {size === 'large' && (
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        )}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;