export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { serviceType, calBookingId } = body

    // Vérifier que la réservation Cal.com existe
    if (!calBookingId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'ID de réservation Cal.com requis'
      })
    }

    // Ici vous pourriez vérifier avec l'API Cal.com que la réservation est valide
    // Pour l'instant, on simule la validation
    console.log(`Validation de la réservation Cal.com: ${calBookingId}`)

    // Créer la session de checkout Stripe
    const priceId = serviceType === 'solo' 
      ? 'price_1RxWIOR9mkVccpZhYVPzpoxm' 
      : 'price_1RxWIoR9mkVccpZhcDTBL3tG'

    const checkoutSession = {
      success: true,
      sessionId: `cs_${Date.now()}`,
      priceId,
      calBookingId
    }

    return {
      success: true,
      checkoutData: checkoutSession
    }
  } catch (error) {
    console.error('Erreur lors de la création du checkout:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de la création du checkout'
    })
  }
})
