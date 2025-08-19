import { ref, readonly } from 'vue'
import { loadStripe } from '@stripe/stripe-js'

// Configuration Stripe
const stripePublishableKey = 'pk_test_51RxWA5R9mkVccpZhhEblVAwxWBotdSunOUk1yC6I2BCUnBbOT200XhU7c0Q2nSaxKLEb6bUY5LSbe0viuCWjwYFa00A9J70qDe'

// Configuration des services avec leurs liens Cal.com et produits Stripe
const SERVICES = {
  solo: {
    name: 'Thérapie Individuelle',
    calUrl: 'https://cal.com/paul-bugeon-el1oht/premiere-consultation',
    stripePriceId: 'price_1RxWIOR9mkVccpZhYVPzpoxm',
    price: '60€',
    duration: '55 min'
  },
  group: {
    name: 'Thérapie de Groupe',
    calUrl: 'https://cal.com/paul-bugeon-el1oht/suivi-de-consultation',
    stripePriceId: 'price_1RxWIoR9mkVccpZhcDTBL3tG',
    price: '45€',
    duration: '90 min'
  }
} as const

type ServiceType = keyof typeof SERVICES

interface BookingState {
  hasCalBooking: boolean
  calBookingData: any | null
  selectedService: ServiceType | null
}

export const useBookingFlow = () => {
  // État de la réservation
  const bookingState = ref<BookingState>({
    hasCalBooking: false,
    calBookingData: null,
    selectedService: null
  })

  // Étape 1 : Ouvrir Cal.com pour la prise de rendez-vous
  const openCalBooking = (serviceType: ServiceType) => {
    // Stocker le type de service sélectionné
    bookingState.value.selectedService = serviceType
    
    // Ouvrir Cal.com dans un nouvel onglet avec le bon lien
    const service = SERVICES[serviceType]
    const newWindow = window.open(service.calUrl, '_blank', 'width=800,height=600')
    
    if (newWindow) {
      // Vérifier périodiquement si la fenêtre est fermée (indication que la réservation est terminée)
      const checkWindowClosed = setInterval(() => {
        if (newWindow.closed) {
          clearInterval(checkWindowClosed)
          // La fenêtre est fermée, on peut maintenant proposer le paiement
          handleCalBookingComplete()
        }
      }, 1000)
    }
  }

  // Étape 2 : Gérer la fin de la réservation Cal.com
  const handleCalBookingComplete = () => {
    // Marquer que la réservation Cal.com est terminée
    bookingState.value.hasCalBooking = true
    
    // Afficher une notification pour demander le paiement
    const service = SERVICES[bookingState.value.selectedService || 'solo']
    if (confirm(`Votre rendez-vous pour ${service.name} a été pris ! Maintenant, veuillez procéder au paiement de ${service.price} pour confirmer votre réservation.`)) {
      // Ouvrir le checkout Stripe
      openStripeCheckout()
    }
  }

  // Étape 3 : Ouvrir le checkout Stripe via l'API route
  const openStripeCheckout = async () => {
    if (!bookingState.value.hasCalBooking) {
      alert('Veuillez d\'abord prendre votre rendez-vous via Cal.com')
      return
    }

    try {
      // Appeler l'API route pour créer la session de checkout
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceType: bookingState.value.selectedService || 'solo',
          calBookingId: `cal_${Date.now()}` // ID simulé pour l'exemple
        })
      }).then(res => res.json())

      if (response.success) {
        // Charger Stripe et rediriger vers le checkout
        const stripe = await loadStripe(stripePublishableKey)
        
        if (!stripe) {
          console.error('Stripe n\'a pas pu être chargé')
          return
        }

        const service = SERVICES[bookingState.value.selectedService || 'solo']
        const { error } = await stripe.redirectToCheckout({
          lineItems: [
            {
              price: service.stripePriceId,
              quantity: 1,
            },
          ],
          mode: 'payment',
          successUrl: `${window.location.origin}/success?therapy=${bookingState.value.selectedService}&cal=confirmed&stripe=paid`,
          cancelUrl: `${window.location.origin}/cancel?therapy=${bookingState.value.selectedService}&cal=confirmed&stripe=cancelled`,
        })

        if (error) {
          console.error('Erreur lors de la redirection vers Stripe:', error)
          alert('Erreur lors de l\'ouverture du paiement. Veuillez réessayer.')
        }
      }
    } catch (error) {
      console.error('Erreur lors de la création du checkout:', error)
      alert('Erreur lors de la création du checkout. Veuillez réessayer.')
    }
  }

  // Fonction pour ouvrir directement le flux de réservation
  const startBookingFlow = (serviceType: ServiceType) => {
    openCalBooking(serviceType)
  }

  // Fonction pour forcer l'ouverture du paiement (si l'utilisateur a déjà pris RDV)
  const forcePayment = (serviceType: ServiceType) => {
    bookingState.value.hasCalBooking = true
    bookingState.value.selectedService = serviceType
    openStripeCheckout()
  }

  // Réinitialiser l'état
  const resetBookingState = () => {
    bookingState.value = {
      hasCalBooking: false,
      calBookingData: null,
      selectedService: null
    }
  }

  return {
    bookingState: readonly(bookingState),
    startBookingFlow,
    openCalBooking,
    openStripeCheckout,
    forcePayment,
    resetBookingState,
    SERVICES
  }
}
