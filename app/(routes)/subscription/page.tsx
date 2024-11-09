import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect('/login');
  }
  return (
    <div>
      <h1>Assinatura</h1>
    </div>
  );
};

export default SubscriptionPage;
