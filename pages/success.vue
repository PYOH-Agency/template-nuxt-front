<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
    <div class="max-w-2xl mx-auto text-center px-6">
      <!-- Icône de succès -->
      <div class="w-24 h-24 bg-green-500 mx-auto mb-8 flex items-center justify-center">
        <span class="text-white text-4xl font-bold">✓</span>
      </div>
      
      <!-- Message de succès -->
      <h1 class="text-4xl font-bold text-gray-900 mb-6">
        Paiement confirmé !
      </h1>
      
      <p class="text-xl text-gray-600 mb-8">
        Votre réservation a été confirmée avec succès. Vous recevrez un email de confirmation dans les prochaines minutes.
      </p>
      
      <!-- Détails de la réservation -->
      <div class="bg-white p-6 mb-8 shadow-lg">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Détails de votre réservation</h2>
        <div class="space-y-2 text-gray-600">
          <div class="flex justify-between">
            <span>Type de thérapie :</span>
            <span class="font-medium">Thérapie individuelle</span>
          </div>
          <div class="flex justify-between">
            <span>Statut :</span>
            <span class="text-green-600 font-medium">Confirmée</span>
          </div>
        </div>
      </div>
      
      <!-- Actions -->
      <div class="space-y-4">
        <button 
          @click="goHome"
          class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 transition-colors duration-200"
        >
          Retour à l'accueil
        </button>
        
        <button 
          @click="openCal"
          class="w-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-6 transition-colors duration-200"
        >
          Voir mes rendez-vous
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Paiement confirmé - Philippe Bugeon',
  meta: [
    { name: 'description', content: 'Votre réservation a été confirmée avec succès' }
  ]
})

// Retour à l'accueil
const goHome = () => {
  navigateTo('/')
}

// Ouvrir Cal.com pour voir les rendez-vous
const openCal = () => {
  window.open('https://cal.com/paul-bugeon-el1oht', '_blank')
}
</script>
