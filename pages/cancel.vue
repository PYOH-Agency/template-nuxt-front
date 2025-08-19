<template>
  <div class="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
    <div class="max-w-2xl mx-auto text-center px-6">
      <!-- Icône d'annulation -->
      <div class="w-24 h-24 bg-red-500 mx-auto mb-8 flex items-center justify-center">
        <span class="text-white text-4xl font-bold">✕</span>
      </div>
      
      <!-- Message d'annulation -->
      <h1 class="text-4xl font-bold text-gray-900 mb-6">
        Paiement annulé
      </h1>
      
      <p class="text-xl text-gray-600 mb-8">
        Votre paiement a été annulé. Votre rendez-vous Cal.com reste valide, mais vous devrez procéder au paiement pour le confirmer.
      </p>
      
      <!-- Informations importantes -->
      <div class="bg-white p-6 mb-8 shadow-lg">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Que faire maintenant ?</h2>
        <div class="space-y-3 text-gray-600 text-left">
          <div class="flex items-start">
            <span class="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs">i</span>
            <span>Votre rendez-vous Cal.com est toujours réservé</span>
          </div>
          <div class="flex items-start">
            <span class="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs">i</span>
            <span>Vous devez compléter le paiement pour confirmer votre réservation</span>
          </div>
          <div class="flex items-start">
            <span class="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-xs">i</span>
            <span>Vous pouvez réessayer le paiement à tout moment</span>
          </div>
        </div>
      </div>
      
      <!-- Actions -->
      <div class="space-y-4">
        <button 
          @click="retryPayment"
          class="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 transition-colors duration-200"
        >
          Réessayer le paiement
        </button>
        
        <button 
          @click="goHome"
          class="w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-3 px-6 transition-colors duration-200"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Paiement annulé - Philippe Bugeon',
  meta: [
    { name: 'description', content: 'Votre paiement a été annulé' }
  ]
})

// Réessayer le paiement
const retryPayment = () => {
  // Rediriger vers la page d'accueil pour recommencer le processus
  navigateTo('/')
}

// Retour à l'accueil
const goHome = () => {
  navigateTo('/')
}
</script>
