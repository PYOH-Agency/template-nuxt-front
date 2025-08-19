<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <!-- Thérapie Individuelle -->
    <div class="group bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-xl border border-gray-100">
      <div class="flex items-start space-x-4">
        <!-- Icône -->
        <div class="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 flex items-center justify-center rounded-xl shadow-md flex-shrink-0">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
          </svg>
        </div>
        
        <!-- Contenu -->
        <div class="flex-1">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Thérapie Individuelle</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">
            Un accompagnement personnalisé pour les adultes, adolescents et enfants. 
            Séance d'environ 55 minutes dans un cadre bienveillant et confidentiel.
          </p>
          
          <!-- Caractéristiques -->
          <div class="space-y-2 mb-6">
            <div class="flex items-center text-sm text-gray-700">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Consultation personnalisée</span>
            </div>
            <div class="flex items-center text-sm text-gray-700">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Suivi régulier</span>
            </div>
            <div class="flex items-center text-sm text-gray-700">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Techniques adaptées</span>
            </div>
            <div class="flex items-center text-sm text-gray-700">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Cadre confidentiel</span>
            </div>
          </div>
          
          <!-- Prix et CTA -->
          <div class="flex items-center justify-between">
            <div class="text-2xl font-bold text-slate-700">60€</div>
            <button 
              @click="startBookingFlow('solo')"
              class="bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
            >
              Réserver maintenant
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Thérapie de Groupe -->
    <div class="group bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-xl border border-gray-100">
      <div class="flex items-start space-x-4">
        <!-- Icône -->
        <div class="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 flex items-center justify-center rounded-xl shadow-md flex-shrink-0">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
          </svg>
        </div>
        
        <!-- Contenu -->
        <div class="flex-1">
          <h3 class="text-xl font-bold text-gray-900 mb-2">Thérapie de Groupe</h3>
          <p class="text-gray-600 mb-4 leading-relaxed">
            Un accompagnement en groupe pour partager et progresser ensemble. 
            Séance d'environ 90 minutes dans un environnement bienveillant.
          </p>
          
          <!-- Caractéristiques -->
          <div class="space-y-2 mb-6">
            <div class="flex items-center text-sm text-gray-700">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Partage d'expériences</span>
            </div>
            <div class="flex items-center text-sm text-gray-700">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Support mutuel</span>
            </div>
            <div class="flex items-center text-sm text-gray-700">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Dynamique de groupe</span>
            </div>
            <div class="flex items-center text-sm text-gray-700">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              <span>Environnement bienveillant</span>
            </div>
          </div>
          
          <!-- Prix et CTA -->
          <div class="flex items-center justify-between">
            <div class="text-2xl font-bold text-slate-700">45€</div>
            <button 
              @click="startBookingFlow('group')"
              class="bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
            >
              Réserver maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Utiliser le composable de réservation
const { startBookingFlow } = useBookingFlow()
</script>
