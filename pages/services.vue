<template>
  <div>
    <!-- Section Services -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Mes Services</h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Je propose deux types d'accompagnement pour vous aider à retrouver votre équilibre et votre bien-être.
          </p>
        </div>
        
        <ServicesGrid />
        
        <!-- CTA principal -->
        <div class="text-center mt-12">
          <div class="bg-gradient-to-r from-slate-700 to-gray-700 p-8 text-white rounded-2xl">
            <h3 class="text-xl font-bold mb-3">Prêt à commencer votre thérapie ?</h3>
            <p class="text-slate-200 mb-6 max-w-lg mx-auto">
              Réservez votre séance en ligne de manière sécurisée et faites le premier pas vers votre bien-être.
            </p>
            <button 
              @click="startBookingFlow('solo')"
              class="bg-white text-slate-700 hover:bg-slate-50 text-base px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Réserver ma séance maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Utiliser le composable de réservation
const { startBookingFlow } = useBookingFlow()

// Meta tags pour le SEO
useHead({
  title: 'Services - Philippe Bugeon',
  meta: [
    {
      name: 'description',
      content: 'Découvrez nos services de thérapie individuelle et de groupe. Accompagnement personnalisé pour votre bien-être et votre épanouissement personnel.'
    }
  ]
})
</script>
