import { getDashboard } from '@/app/_data/get-dashboard';
import { auth } from '@clerk/nextjs/server';
import { isMatch } from 'date-fns';
import { redirect } from 'next/navigation';
import ExpensesPerCategory from './_components/expenses-per-category';
import LastTransactions from './_components/last-transactions';
import MonthSelect from './_components/month-select';
import SummaryCards from './_components/summary-cards';
import TransactionsPieChart from './_components/transactions-pie-chart';

interface HomeProps {
  searchParams: { month: string };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect('/login');
  }

  const monthIsValid = !month || !isMatch(month, 'MM');
  if (monthIsValid) {
    redirect('?month=01');
  }

  const dashboard = await getDashboard(month);
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <MonthSelect />
      </div>
      <div className="grid grid-cols-[2fr,1fr] gap-10">
        <div className="flex flex-col gap-6">
          <SummaryCards month={month} {...dashboard} />
          <div className="grid grid-cols-3 grid-rows-1 gap-6">
            <TransactionsPieChart {...dashboard} />
            <ExpensesPerCategory
              expensesPerCategory={dashboard.totalExpensePerCategory}
            />
          </div>
        </div>
        <LastTransactions lastTransactions={dashboard.lastTransactions} />
      </div>
    </div>
  );
};

export default Home;
