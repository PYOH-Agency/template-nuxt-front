<template>
  <div class="min-h-screen">
    <!-- Header avec navigation -->
    <AppHeader
      title="Philippe Bugeon"
      subtitle="Psychopraticien à Nantes"
      color="blue"
      :navigation="navigation"
      :cta="{
        primary: {
          label: 'Prendre RDV',
          path: '#',
          action: openBooking
        }
      }"
    />
    
    <!-- Hero Section avec design amélioré -->
    <section class="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
      <!-- Éléments décoratifs -->
      <div class="absolute inset-0">
        <div class="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div class="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Contenu principal -->
          <div class="space-y-8">
            <div class="space-y-6">
              <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span class="text-sm font-medium">👨‍⚕️ Psychopraticien certifié</span>
              </div>
              
              <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
                PHILIPPE BUGEON
                <span class="block text-3xl lg:text-4xl font-light mt-4 text-blue-100">
                  Psychopraticien à Nantes
                </span>
              </h1>
              
              <p class="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                Face aux situations douloureuses, aux problèmes récurrents & au mal-être, 
                je vous aide à retrouver votre équilibre et votre bien-être.
              </p>
            </div>
            
            <!-- Statistiques -->
            <div class="grid grid-cols-3 gap-6 py-6">
              <div class="text-center">
                <div class="text-3xl font-bold">+9</div>
                <div class="text-sm text-blue-200">Années d'expérience</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold">500+</div>
                <div class="text-sm text-blue-200">Patients accompagnés</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold">95%</div>
                <div class="text-sm text-blue-200">Satisfaction</div>
              </div>
            </div>
            
            <!-- Boutons d'action -->
            <div class="flex flex-col sm:flex-row gap-4">
              <AppButton 
                variant="primary" 
                size="xl"
                @click="openBooking"
                class="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                🗓️ Prendre rendez-vous maintenant
              </AppButton>
              
              <AppButton 
                variant="outline" 
                size="xl"
                @click="scrollToServices"
                class="border-white text-white hover:bg-white hover:text-blue-700 text-lg px-8 py-4"
              >
                Découvrir mes services
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
              
              <div class="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full shadow-lg">
                <span class="font-semibold">Disponible cette semaine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Vague décorative -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-24">
          <path d="M0,0V46.29c47.79,22.2,103.59,8.77,158.84-12.88C208.34,15.11,243.56,8.19,278.84,8.19c66.26,0,123.12,47.3,139.56,112.34C443.71,149.97,510.56,169.67,576,169.67c66.26,0,123.12-19.67,139.56-49.14C732.44,85.67,799.29,66,864.67,66c66.26,0,123.12,19.67,139.56,49.14C1020.44,149.97,1087.29,169.67,1152.67,169.67c66.26,0,123.12-19.67,139.56-49.14C1315.56,85.67,1382.41,66,1447.79,66c66.26,0,123.12,19.67,139.56,49.14C1592.56,149.97,1659.41,169.67,1724.79,169.67c66.26,0,123.12-19.67,139.56,49.14C1800,85.67,1866.85,66,1932.23,66c66.26,0,123.12,19.67,139.56,49.14C2087.44,149.97,2154.29,169.67,2219.67,169.67c66.26,0,123.12-19.67,139.56,49.14C2284.56,85.67,2351.41,66,2416.79,66c66.26,0,123.12,19.67,139.56,49.14C2572.56,149.97,2639.41,169.67,2704.79,169.67c66.26,0,123.12,19.67,139.56,49.14C2780,85.67,2846.85,66,2912.23,66c66.26,0,123.12,19.67,139.56,49.14C3067.44,149.97,3134.29,169.67,3200,169.67V0Z" fill="#f8fafc" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8fafc" opacity=".5"></path>
          <path d="M0,0V5.67C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,114.44-6.21,165.39,12.43C776.83,77.25,828.34,96.54,884.32,96.54c58.3,0,113.74-19.29,165.39-12.43,51.05,18.64,106.35,21.06,165.39,12.43,43.38,6.34,84.61,18.82,127.61,26.46C1485.91,71.32,1650.07,59,1800,5.67V0Z" fill="#f8fafc"></path>
        </svg>
      </div>
    </section>
    
    <!-- Services Section avec design amélioré -->
    <section id="services" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Mes Services</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Je propose deux types d'accompagnement pour vous aider à retrouver votre équilibre et votre bien-être.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Thérapie Individuelle -->
          <div class="group relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            
            <div class="relative">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <AppIcon name="user" size="lg" color="white" />
              </div>
              
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Thérapie Individuelle</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Un accompagnement personnalisé pour les adultes, adolescents et enfants. 
                Séance d'environ 55 minutes dans un cadre bienveillant et confidentiel.
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-center text-gray-700">
                  <AppIcon name="check" size="sm" color="success" class="mr-3" />
                  <span>Consultation personnalisée</span>
                </div>
                <div class="flex items-center text-gray-700">
                  <AppIcon name="check" size="sm" color="success" class="mr-3" />
                  <span>Suivi régulier</span>
                </div>
                <div class="flex items-center text-gray-700">
                  <AppIcon name="check" size="sm" color="success" class="mr-3" />
                  <span>Techniques adaptées</span>
                </div>
              </div>
              
              <div class="flex items-center justify-between">
                <div class="text-3xl font-bold text-blue-600">60€</div>
                <AppButton 
                  variant="primary" 
                  size="lg"
                  @click="openBooking"
                  class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Prendre RDV
                </AppButton>
              </div>
            </div>
          </div>
          
          <!-- Thérapie de Groupe -->
          <div class="group relative bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            
            <div class="relative">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <AppIcon name="users" size="lg" color="white" />
              </div>
              
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Thérapie de Groupe</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Un accompagnement en groupe pour partager et progresser ensemble. 
                Séance d'environ 90 minutes dans un environnement bienveillant.
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-center text-gray-700">
                  <AppIcon name="check" size="sm" color="success" class="mr-3" />
                  <span>Partage d'expériences</span>
                </div>
                <div class="flex items-center text-gray-700">
                  <AppIcon name="check" size="sm" color="success" class="mr-3" />
                  <span>Support mutuel</span>
                </div>
                <div class="flex items-center text-gray-700">
                  <AppIcon name="check" size="sm" color="success" class="mr-3" />
                  <span>Dynamique de groupe</span>
                </div>
              </div>
              
              <div class="flex items-center justify-between">
                <div class="text-3xl font-bold text-purple-600">45€</div>
                <AppButton 
                  variant="outline" 
                  size="lg"
                  @click="openBooking"
                  class="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                >
                  Prendre RDV
                </AppButton>
              </div>
            </div>
          </div>
        </div>
        
        <!-- CTA principal -->
        <div class="text-center mt-16">
          <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 class="text-2xl font-bold mb-4">Prêt à commencer votre thérapie ?</h3>
            <p class="text-blue-100 mb-6">Prenez rendez-vous dès maintenant et faites le premier pas vers votre bien-être.</p>
            <AppButton 
              variant="primary" 
              size="xl"
              @click="openBooking"
              class="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-4"
            >
              🗓️ Prendre rendez-vous maintenant
            </AppButton>
          </div>
        </div>
      </div>
    </section>
    
    <!-- About Section avec design amélioré -->
    <AboutSection id="about" />
    
    <!-- Testimonials Section avec design amélioré -->
    <TestimonialsSection id="testimonials" />
    
    <!-- Contact Section avec design amélioré -->
    <ContactSection id="contact" />
    
    <!-- Footer -->
    <AppFooter
      title="Philippe Bugeon"
      subtitle="Psychopraticien à Nantes"
      description="Spécialisé dans l'accompagnement thérapeutique pour vous aider à retrouver votre équilibre et votre bien-être."
      :footerNavigation="{
        title: 'Liens rapides',
        links: [
          { label: 'Services', path: '#services' },
          { label: 'À propos', path: '#about' },
          { label: 'Contact', path: '#contact' }
        ]
      }"
      :contact="{
        title: 'Contact',
        email: 'contact@philippe-bugeon.fr',
        phone: '06 XX XX XX XX',
        address: 'Nantes, France'
      }"
      copyrightText="Philippe Bugeon"
      additionalInfo="Tous droits réservés"
    />
  </div>
</template>

<script setup>
useHead({
  title: 'Philippe Bugeon - Psychopraticien à Nantes',
  meta: [
    { name: 'description', content: 'Philippe Bugeon, psychopraticien à Nantes. Thérapie individuelle et de groupe. Prise de rendez-vous en ligne.' }
  ]
})

const navigation = [
  { label: 'Accueil', path: '#home' },
  { label: 'Services', path: '#services' },
  { label: 'À propos', path: '#about' },
  { label: 'Témoignages', path: '#testimonials' },
  { label: 'Contact', path: '#contact' }
]

const openBooking = () => {
  // Ouvrir Cal.com dans un nouvel onglet
  window.open('https://cal.com/paul-bugeon-el1oht', '_blank')
}

const scrollToServices = () => {
  // Scroll vers la section services
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
