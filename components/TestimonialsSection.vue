<template>
  <section class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- En-tête de section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Ils m'ont fait confiance</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez les témoignages de mes patients qui ont retrouvé leur équilibre et leur bien-être.
        </p>
      </div>
      
      <!-- Grille des témoignages -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AppCard
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          variant="default"
          hover
          class="text-center"
        >
          <div class="p-6">
            <!-- Note en étoiles -->
            <div class="flex justify-center mb-4">
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
            <blockquote class="text-gray-700 mb-6 italic">
              "{{ testimonial.quote }}"
            </blockquote>
            
            <!-- Auteur -->
            <div class="flex items-center justify-center">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                {{ testimonial.initials }}
              </div>
              <div class="text-left">
                <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
                <div class="text-sm text-gray-600">{{ testimonial.title }}</div>
              </div>
            </div>
          </div>
        </AppCard>
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
    initials: "M"
  },
  {
    quote: "Je viens d'achever une thérapie de six séances. Je dois dire que les progrès réalisés me permettent d'aborder les interactions sociales et la vie plus sereinement.",
    name: "Romain",
    title: "Sérénité retrouvée",
    initials: "R"
  },
  {
    quote: "Sa capacité à écouter attentivement, sans jugement, m'a permis d'exprimer librement mes inquiétudes et mes aspirations. Ma collaboration avec Philippe a été inestimable.",
    name: "Natalia",
    title: "Ecoute, bienveillance & libération",
    initials: "N"
  }
]
</script>
