import { Button } from '@/app/_components/ui/button';
import { CardContent, CardHeader, CardTitle } from '@/app/_components/ui/card';
import { ScrollArea } from '@/app/_components/ui/scroll-area';
import { TRANSACTION_PAYMENT_METHOD_ICONS } from '@/app/_constants/transactions';
import { formatCurrency } from '@/app/_utils/currency';
import { Transaction, TransactionType } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

interface LastTransactionsProps {
  lastTransactions: Transaction[];
}

const LastTransactions = ({ lastTransactions }: LastTransactionsProps) => {
  const getAmountColor = (transaction: Transaction) => {
    if (transaction.type === TransactionType.EXPENSE) {
      return 'text-danger';
    }
    if (transaction.type === TransactionType.DEPOSIT) {
      return 'text-primary';
    }
    return 'text-white';
  };

  const getAmountPrefix = (transaction: Transaction) => {
    if (transaction.type === TransactionType.DEPOSIT) {
      return '+';
    }
    return '-';
  };
  return (
    <ScrollArea className="rounded-md border h-full">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="font-bold">Últimas Transações</CardTitle>
        <Button variant={'outline'} className="rounded-full font-bold" asChild>
          <Link href={'/transactions'}>Ver mais</Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {lastTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex justify-between items-center"
          >
            <div className="flex gap-3">
              <div className="flex justify-center w-[40px] items-center gap-2 bg-white bg-opacity-[3%] p-[10px] rounded-lg">
                <Image
                  src={
                    TRANSACTION_PAYMENT_METHOD_ICONS[transaction.paymentMethod]
                  }
                  alt="pix"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex-col flex">
                <p className="font-bold text-white text-sm">
                  {transaction.name}
                </p>
                <span className="text-sm font-semibold text-foreground">
                  {new Date(transaction.date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>
            <p className={`${getAmountColor(transaction)} text-sm font-bold`}>
              {getAmountPrefix(transaction)}
              {formatCurrency(Number(transaction.amount))}
            </p>
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
};

export default LastTransactions;
