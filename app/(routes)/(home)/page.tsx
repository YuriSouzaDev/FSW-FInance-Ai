import { auth } from '@clerk/nextjs/server';
import { isMatch } from 'date-fns';
import { redirect } from 'next/navigation';
import MonthSelect from './_components/month-select';
import SummaryCards from './_components/summary-cards';

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
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <MonthSelect />
      </div>
      <SummaryCards month={month} />
    </div>
  );
};

export default Home;
