<template>
  <section id="about" class="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Qui suis-je ?</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez mon parcours, mes formations et mon approche thérapeutique
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Contenu textuel -->
        <div class="space-y-8">
          <div class="space-y-6">
            <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              👨‍⚕️ Psychopraticien certifié depuis 2015
            </div>
            
            <div class="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Je suis entré dans le monde de la thérapie en 2015 après avoir suivi des formations en psychologie. 
                C'est au cours des dernières années que ma posture de thérapeute a pris une autre dimension grâce à ma formation.
              </p>
              
              <p>
                La philosophie de cette approche a éveillé en moi l'importance de la relation avec autrui, 
                la relation avec soi-même et la relation avec le monde qui nous entoure.
              </p>
              
              <p>
                Mon approche est centrée sur la bienveillance et l'écoute active, 
                pour vous accompagner dans votre parcours de guérison et de développement personnel.
              </p>
            </div>
          </div>
          
          <!-- Approche thérapeutique -->
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Mon Approche</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex items-center text-gray-700">
                <AppIcon name="heart" size="sm" color="primary" class="mr-3" />
                <span>Bienveillance</span>
              </div>
              <div class="flex items-center text-gray-700">
                <AppIcon name="eye" size="sm" color="primary" class="mr-3" />
                <span>Écoute active</span>
              </div>
              <div class="flex items-center text-gray-700">
                <AppIcon name="shield" size="sm" color="primary" class="mr-3" />
                <span>Confidentialité</span>
              </div>
              <div class="flex items-center text-gray-700">
                <AppIcon name="target" size="sm" color="primary" class="mr-3" />
                <span>Objectifs personnalisés</span>
              </div>
            </div>
          </div>
          
          <!-- Formations -->
          <div class="space-y-4">
            <h3 class="text-2xl font-semibold text-gray-900">Mes Formations</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="bg-white rounded-xl p-4 shadow-md">
                <div class="text-sm text-blue-600 font-medium mb-1">2015</div>
                <div class="font-semibold text-gray-900">Vision intégrale et intégrative de la santé</div>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-md">
                <div class="text-sm text-blue-600 font-medium mb-1">2018</div>
                <div class="font-semibold text-gray-900">Psychogénéalogie</div>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-md">
                <div class="text-sm text-blue-600 font-medium mb-1">2019</div>
                <div class="font-semibold text-gray-900">Thérapie Narrative</div>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-md">
                <div class="text-sm text-blue-600 font-medium mb-1">2020</div>
                <div class="font-semibold text-gray-900">Thérapie du Lien et des Mondes Relationnels</div>
              </div>
            </div>
            <div class="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-4 text-white">
              <div class="text-sm font-medium mb-1">Depuis 2021</div>
              <div class="font-semibold">Ateliers de perfectionnement continu</div>
            </div>
          </div>
          
          <!-- Bouton d'action -->
          <div class="pt-4">
            <AppButton 
              variant="primary" 
              size="lg"
              @click="openBooking"
              class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              🗓️ Prendre rendez-vous
            </AppButton>
          </div>
        </div>
        
        <!-- Image de profil avec design amélioré -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative">
            <div class="w-96 h-96 rounded-3xl bg-gradient-to-br from-blue-400 to-indigo-500 p-3 shadow-2xl">
              <div class="w-full h-full rounded-2xl bg-gray-200 flex items-center justify-center overflow-hidden">
                <div class="text-center p-8">
                  <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AppIcon name="user" size="xl" color="white" />
                  </div>
                  <div class="text-gray-600">
                    <div class="font-semibold text-lg mb-2">Photo de M. Bugeon</div>
                    <div class="text-sm">À remplacer par la vraie photo</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Badges flottants -->
            <div class="absolute -top-4 -right-4 bg-white text-blue-700 px-4 py-2 rounded-full shadow-lg">
              <span class="font-semibold">+9 ans d'expérience</span>
            </div>
            
            <div class="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg">
              <span class="font-semibold">Formation continue</span>
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
