import { Card, CardContent, CardHeader } from '@/app/_components/ui/card';
import { auth } from '@clerk/nextjs/server';
import { CheckIcon, XIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import AquirePlanButton from './_components/aquire-plan-button';

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect('/login');
  }
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2x font-bold">Assinatura</h1>

      <div className="flex gap-6">
        <Card className="w-[450px]">
          <CardHeader className="border-b border-solid py-10">
            <h2 className="text-2xl text-center font-semibold">Plano Básico</h2>
            <div className="flex items-center gap-3 justify-center">
              <span className="text-4xl">R$</span>
              <span className="font-semibold text-6xl">0</span>
              <span className="text-muted-foreground text-2xl">/mês</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-8 py-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckIcon className="text-primary" />
                <p>Apenas 10 transações por mês (7/10)</p>
              </div>
              <div className="flex items-center gap-3">
                <XIcon />
                <p>Relatórios de IA ilimitados</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-[450px]">
          <CardHeader className="border-b border-solid py-10">
            <h2 className="text-2xl text-center font-semibold">Plano Pro</h2>
            <div className="flex items-center gap-3 justify-center">
              <span className="text-4xl">R$</span>
              <span className="font-semibold text-6xl">19</span>
              <span className="text-muted-foreground text-2xl">/mês</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-8 py-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckIcon className="text-primary" />
                <p>Transações ilimitadas</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="text-primary" />
                <p>Relatórios de IA ilimitados</p>
              </div>
            </div>
            <AquirePlanButton />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubscriptionPage;
