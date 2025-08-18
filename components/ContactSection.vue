<template>
  <section id="contact" class="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
    <!-- Éléments décoratifs -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- En-tête de section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
          <span class="text-sm font-medium">📞 Contact & Rendez-vous</span>
        </div>
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">Prenons rendez-vous ensemble !</h2>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          Contactez-moi pour toute question ou prenez directement rendez-vous en ligne.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Informations de contact -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold mb-6">Mes Coordonnées</h3>
            
            <div class="space-y-6">
              <div class="flex items-start bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <AppIcon name="map-pin" size="md" color="white" />
                </div>
                <div>
                  <div class="font-semibold text-lg">Cabinet de thérapie</div>
                  <div class="text-blue-100">Nantes, France</div>
                  <div class="text-sm text-blue-200 mt-1">Centre-ville, facile d'accès</div>
                </div>
              </div>
              
              <div class="flex items-start bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <AppIcon name="phone" size="md" color="white" />
                </div>
                <div>
                  <div class="font-semibold text-lg">Téléphone</div>
                  <div class="text-blue-100">06 XX XX XX XX</div>
                  <div class="text-sm text-blue-200 mt-1">Réponse sous 24h</div>
                </div>
              </div>
              
              <div class="flex items-start bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <AppIcon name="mail" size="md" color="white" />
                </div>
                <div>
                  <div class="font-semibold text-lg">Email</div>
                  <div class="text-blue-100">contact@philippe-bugeon.fr</div>
                  <div class="text-sm text-blue-200 mt-1">Réponse sous 24h</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Horaires -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 class="text-xl font-semibold mb-4">Horaires de consultation</h3>
            <div class="space-y-3 text-blue-100">
              <div class="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span class="font-semibold">9h00 - 19h00</span>
              </div>
              <div class="flex justify-between">
                <span>Samedi</span>
                <span class="font-semibold">9h00 - 12h00</span>
              </div>
              <div class="flex justify-between">
                <span>Dimanche</span>
                <span class="font-semibold text-red-300">Fermé</span>
              </div>
            </div>
            
            <div class="mt-4 p-3 bg-green-500/20 rounded-lg border border-green-400/30">
              <div class="text-sm text-green-200">
                <strong>Disponibilité :</strong> Créneaux disponibles cette semaine
              </div>
            </div>
          </div>
        </div>
        
        <!-- Formulaire de contact -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 class="text-2xl font-semibold mb-6">Une question ?</h3>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-2">Prénom</label>
                <input 
                  v-model="form.firstName"
                  type="text" 
                  required
                  class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  placeholder="Votre prénom"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-2">Nom</label>
                <input 
                  v-model="form.lastName"
                  type="text" 
                  required
                  class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                  placeholder="Votre nom"
                />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2">Email</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                placeholder="votre@email.com"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2">Téléphone</label>
              <input 
                v-model="form.phone"
                type="tel" 
                class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                placeholder="06 XX XX XX XX"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2">Message</label>
              <textarea 
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                placeholder="Votre message..."
              ></textarea>
            </div>
            
            <AppButton 
              type="submit"
              variant="primary" 
              size="lg"
              class="w-full bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              👉 J'envoie mon message à Philippe
            </AppButton>
          </form>
        </div>
      </div>
      
      <!-- Bouton de prise de rendez-vous principal -->
      <div class="text-center mt-16">
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 class="text-2xl font-bold mb-4">Prêt à commencer ?</h3>
          <p class="text-blue-100 mb-6">Prenez rendez-vous dès maintenant et faites le premier pas vers votre bien-être.</p>
          <AppButton 
            variant="primary" 
            size="xl"
            @click="openBooking"
            class="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
          >
            🗓️ Je prends rendez-vous maintenant
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
})

const submitForm = () => {
  // Ici on pourrait envoyer le formulaire à une API
  console.log('Formulaire soumis:', form.value)
  alert('Merci pour votre message ! Je vous répondrai très prochainement.')
  
  // Reset du formulaire
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
}

const openBooking = () => {
  window.open('https://cal.com/paul-bugeon-el1oht', '_blank')
}
</script>
