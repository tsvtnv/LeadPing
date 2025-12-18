import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2023-10-16',
  typescript: true,
});

export const PLANS = [
  {
    name: 'Starter',
    slug: 'starter',
    priceId: process.env.STRIPE_PRICE_ID_STARTER,
    amount: 3000,
    currency: 'gbp',
  },
  {
    name: 'Pro',
    slug: 'pro',
    priceId: process.env.STRIPE_PRICE_ID_PRO,
    amount: 6000,
    currency: 'gbp',
  },
  {
    name: 'Scale',
    slug: 'scale',
    priceId: process.env.STRIPE_PRICE_ID_SCALE,
    amount: 10000,
    currency: 'gbp',
  },
];

export async function createCheckoutSession({
  userId,
  userEmail,
  priceId,
}: {
  userId: string;
  userEmail: string;
  priceId: string;
}) {
  // Logic to find or create customer
  // Logic to create session
  const session = await stripe.checkout.sessions.create({
    customer_email: userEmail,
    client_reference_id: userId,
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    mode: 'subscription',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/app/billing?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/app/billing?canceled=true`,
    metadata: {
      userId,
    },
  });

  return session;
}