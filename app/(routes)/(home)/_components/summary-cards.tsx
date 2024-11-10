import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from 'lucide-react';
import SummaryCard from './sumary-card';

interface SummaryCardsProps {
  balance: number;
  depositsTotal: number;
  investimentsTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  balance,
  depositsTotal,
  investimentsTotal,
  expensesTotal,
}: SummaryCardsProps) => {
  return (
    <div className="space-y-6">
      {/* PRIMEIRO CARD */}
      <SummaryCard
        icon={
          <WalletIcon
            size={16}
            className="text-white p-[10px] bg-foreground/10 rounded-[8.53px] h-9 w-9"
          />
        }
        size="large"
        title="Saldo"
        amount={balance}
      />

      {/* OUTROS CARD */}
      <div className="grid grid-cols-3">
        <SummaryCard
          icon={
            <PiggyBankIcon
              size={16}
              className="text-white p-[10px] bg-white/10 rounded-[8.53px] h-9 w-9"
            />
          }
          title="Investido"
          amount={investimentsTotal}
        />
        <SummaryCard
          icon={
            <TrendingUpIcon
              size={16}
              className="text-primary p-[10px] bg-primary/10 rounded-[8.53px] h-9 w-9"
            />
          }
          title="Receita"
          amount={depositsTotal}
        />
        <SummaryCard
          icon={
            <TrendingDownIcon
              size={16}
              className="text-danger p-[10px] bg-danger/10 rounded-[8.53px] h-9 w-9"
            />
          }
          title="Despesas"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
