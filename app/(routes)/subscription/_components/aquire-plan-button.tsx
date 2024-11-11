'use client';

import { Button } from '@/app/_components/ui/button';
import { loadStripe } from '@stripe/stripe-js';
import { createStripeCheckout } from '../_actions/create-stripe-checkout';

const AquirePlanButton = () => {
  const handleAcquirePlanClick = async () => {
    const { sessionId } = await createStripeCheckout();
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error('Stripe publishable key not found');
    }
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );
    if (!stripe) {
      throw new Error('Stripe not found');
    }
    await stripe.redirectToCheckout({ sessionId });
  };
  return (
    <Button
      className="rounded-full border-primary w-full text-sm font-medium"
      onClick={handleAcquirePlanClick}
    >
      Adquirir plano
    </Button>
  );
};

export default AquirePlanButton;
