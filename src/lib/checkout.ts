import { getStripe } from './stripe';

export type ProductType = 'PDF' | 'PACK';

interface CheckoutOptions {
  name: string;
  description: string;
  amount: number;
  currency?: string;
  successUrl?: string;
  cancelUrl?: string;
}

export const redirectToCheckout = async ({ 
  name,
  description,
  amount,
  currency = 'eur',
  successUrl = `${window.location.origin}/success`,
  cancelUrl = `${window.location.origin}/cancel`
}: CheckoutOptions) => {
  try {
    // Appel à votre backend pour créer une session Checkout
    const response = await fetch('http://localhost:3001/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
        amount,
        currency,
        successUrl,
        cancelUrl,
      }),
    });

    if (!response.ok) {
      throw new Error('Erreur lors de la création de la session de paiement');
    }

    const { sessionId } = await response.json();
    
    const stripe = await getStripe();
    
    if (!stripe) {
      throw new Error('Stripe n\'a pas pu être initialisé');
    }

    // Redirection vers Stripe Checkout avec l'ID de session
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.error('Erreur lors de la redirection vers le checkout:', error);
      throw error;
    }
  } catch (err) {
    console.error('Erreur lors du processus de paiement:', err);
    throw err;
  }
};
