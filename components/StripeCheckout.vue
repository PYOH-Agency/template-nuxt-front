<template>
  <div>
    <!-- Le composant est invisible, il gère juste la logique Stripe -->
  </div>
</template>

<script setup>
import { loadStripe } from '@stripe/stripe-js'

// Configuration Stripe
const stripePublishableKey = 'pk_test_51RxWA5R9mkVccpZhhEblVAwxWBotdSunOUk1yC6I2BCUnBbOT200XhU7c0Q2nSaxKLEb6bUY5LSbe0viuCWjwYFa00A9J70qDe'

// IDs des produits Stripe
const PRODUCTS = {
  solo: 'prod_StIuf5PAhglJHa',
  group: 'prod_StIuSo3sGLl63o'
}

// Fonction pour rediriger vers le checkout Stripe
const redirectToStripeCheckout = async (productType) => {
  try {
    const stripe = await loadStripe(stripePublishableKey)
    
    if (!stripe) {
      console.error('Stripe n\'a pas pu être chargé')
      return
    }

    // Rediriger vers le checkout Stripe avec le produit sélectionné
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: PRODUCTS[productType],
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    })

    if (error) {
      console.error('Erreur lors de la redirection vers Stripe:', error)
    }
  } catch (error) {
    console.error('Erreur lors du chargement de Stripe:', error)
  }
}

// Exposer les fonctions pour les composants parents
defineExpose({
  redirectToStripeCheckout
})
</script>
