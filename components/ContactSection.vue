<template>
  <section class="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- En-tête de section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Prenons rendez-vous ensemble !</h2>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          Contactez-moi pour toute question ou prenez directement rendez-vous en ligne.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Informations de contact -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-semibold mb-6">Mes Coordonnées</h3>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <AppIcon name="map-pin" size="md" color="white" class="mr-3 mt-1" />
                <div>
                  <div class="font-semibold">Cabinet de thérapie</div>
                  <div class="text-blue-100">Nantes, France</div>
                </div>
              </div>
              
              <div class="flex items-start">
                <AppIcon name="phone" size="md" color="white" class="mr-3 mt-1" />
                <div>
                  <div class="font-semibold">Téléphone</div>
                  <div class="text-blue-100">06 XX XX XX XX</div>
                </div>
              </div>
              
              <div class="flex items-start">
                <AppIcon name="mail" size="md" color="white" class="mr-3 mt-1" />
                <div>
                  <div class="font-semibold">Email</div>
                  <div class="text-blue-100">contact@philippe-bugeon.fr</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Horaires -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Horaires de consultation</h3>
            <div class="space-y-2 text-blue-100">
              <div>Lundi - Vendredi : 9h00 - 19h00</div>
              <div>Samedi : 9h00 - 12h00</div>
              <div>Dimanche : Fermé</div>
            </div>
          </div>
        </div>
        
        <!-- Formulaire de contact -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 class="text-2xl font-semibold mb-6">Une question ?</h3>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium mb-2">Prénom</label>
                <input 
                  v-model="form.firstName"
                  type="text" 
                  required
                  class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Votre prénom"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium mb-2">Nom</label>
                <input 
                  v-model="form.lastName"
                  type="text" 
                  required
                  class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
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
                class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="votre@email.com"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2">Téléphone</label>
              <input 
                v-model="form.phone"
                type="tel" 
                class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="06 XX XX XX XX"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium mb-2">Message</label>
              <textarea 
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Votre message..."
              ></textarea>
            </div>
            
            <AppButton 
              type="submit"
              variant="primary" 
              size="lg"
              class="w-full bg-white text-blue-700 hover:bg-blue-50"
            >
              👉 J'envoie mon message à Philippe
            </AppButton>
          </form>
        </div>
      </div>
      
      <!-- Bouton de prise de rendez-vous principal -->
      <div class="text-center mt-16">
        <AppButton 
          variant="primary" 
          size="xl"
          @click="openBooking"
          class="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-4"
        >
          👉 Je prends rendez-vous maintenant
        </AppButton>
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
