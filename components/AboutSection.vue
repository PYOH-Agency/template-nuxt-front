<template>
  <section class="bg-gray-50 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Contenu textuel -->
        <div class="space-y-6">
          <h2 class="text-4xl font-bold text-gray-900">Qui suis-je ?</h2>
          
          <div class="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Je suis entré dans le monde de la thérapie en 2015 après avoir suivi des formations en psychologie. 
              C'est au cours des dernières années que ma posture de thérapeute a pris une autre dimension grâce à ma formation.
            </p>
            
            <p>
              La philosophie de cette approche a éveillé en moi l'importance de la relation avec autrui, 
              la relation avec soi-même et la relation avec le monde qui nous entoure.
            </p>
          </div>
          
          <!-- Formations -->
          <div class="space-y-3">
            <h3 class="text-xl font-semibold text-gray-900">Mes Formations</h3>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-center">
                <AppIcon name="check" size="sm" color="success" class="mr-3" />
                2015 : Vision intégrale et intégrative de la santé
              </li>
              <li class="flex items-center">
                <AppIcon name="check" size="sm" color="success" class="mr-3" />
                2018 : Psychogénéalogie
              </li>
              <li class="flex items-center">
                <AppIcon name="check" size="sm" color="success" class="mr-3" />
                2019 : Thérapie Narrative
              </li>
              <li class="flex items-center">
                <AppIcon name="check" size="sm" color="success" class="mr-3" />
                2020 : Thérapie du Lien et des Mondes Relationnels
              </li>
              <li class="flex items-center">
                <AppIcon name="check" size="sm" color="success" class="mr-3" />
                Depuis 2021 : Ateliers de perfectionnement
              </li>
            </ul>
          </div>
          
          <!-- Bouton d'action -->
          <div class="pt-4">
            <AppButton 
              variant="outline" 
              size="lg"
              @click="openBooking"
            >
              Prendre rendez-vous
            </AppButton>
          </div>
        </div>
        
        <!-- Image de profil -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative">
            <div class="w-96 h-96 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 p-2 shadow-2xl">
              <div class="w-full h-full rounded-xl bg-gray-200 flex items-center justify-center">
                <span class="text-gray-500 text-lg">Photo de M. Bugeon</span>
              </div>
            </div>
            
            <!-- Badge d'expérience -->
            <div class="absolute -top-4 -right-4 bg-white text-blue-700 px-4 py-2 rounded-full shadow-lg">
              <span class="font-semibold">+9 ans d'expérience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const openBooking = () => {
  window.open('https://cal.com/paul-bugeon-el1oht', '_blank')
}
</script>
