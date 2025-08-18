<template>
  <section id="testimonials" class="py-24 bg-gradient-to-br from-white to-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- En-tête de section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
          ⭐ 4.9/5 - 95% de satisfaction
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Ils m'ont fait confiance</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez les témoignages de mes patients qui ont retrouvé leur équilibre et leur bien-être.
        </p>
      </div>
      
      <!-- Grille des témoignages -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
        >
          <div class="text-center">
            <!-- Note en étoiles -->
            <div class="flex justify-center mb-6">
              <div class="flex space-x-1">
                <AppIcon 
                  v-for="i in 5" 
                  :key="i"
                  name="star" 
                  size="sm" 
                  color="warning" 
                  class="fill-current"
                />
              </div>
            </div>
            
            <!-- Témoignage -->
            <blockquote class="text-gray-700 mb-8 italic text-lg leading-relaxed">
              "{{ testimonial.quote }}"
            </blockquote>
            
            <!-- Auteur -->
            <div class="flex items-center justify-center">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                {{ testimonial.initials }}
              </div>
              <div class="text-left">
                <div class="font-semibold text-gray-900 text-lg">{{ testimonial.name }}</div>
                <div class="text-sm text-blue-600 font-medium">{{ testimonial.title }}</div>
                <div class="text-xs text-gray-500">{{ testimonial.duration }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA pour plus de témoignages -->
      <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Vous aussi, partagez votre expérience</h3>
          <p class="text-gray-600 mb-6">Votre témoignage peut aider d'autres personnes à faire le premier pas.</p>
          <AppButton 
            variant="outline" 
            size="lg"
            @click="openBooking"
            class="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Prendre RDV et témoigner
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: "Je me sens écoutée, considérée, le tout avec bienveillance. Philippe est plus qu'investi et saura s'adapter à votre rythme. Je ne peux que faire des éloges à son égard.",
    name: "Marine",
    title: "Écoute & bienveillance",
    initials: "M",
    duration: "6 séances"
  },
  {
    quote: "Je viens d'achever une thérapie de six séances. Je dois dire que les progrès réalisés me permettent d'aborder les interactions sociales et la vie plus sereinement.",
    name: "Romain",
    title: "Sérénité retrouvée",
    initials: "R",
    duration: "6 séances"
  },
  {
    quote: "Sa capacité à écouter attentivement, sans jugement, m'a permis d'exprimer librement mes inquiétudes et mes aspirations. Ma collaboration avec Philippe a été inestimable.",
    name: "Natalia",
    title: "Ecoute, bienveillance & libération",
    initials: "N",
    duration: "8 séances"
  }
]
</script>
