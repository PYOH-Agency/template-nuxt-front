<template>
  <section class="relative bg-gradient-to-br from-slate-700 via-gray-700 to-slate-800 text-white overflow-hidden">
    <!-- Éléments décoratifs -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-48 h-48 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      <div class="absolute top-0 right-0 w-48 h-48 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-48 h-48 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
    </div>
    
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Contenu principal -->
        <div class="space-y-8">
          <div class="space-y-6">
            <div class="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <span class="text-xs font-medium">Thérapeute professionnel</span>
            </div>
              
            <h1 class="text-4xl lg:text-6xl font-bold leading-tight">
              PHILIPPE BUGEON
              <span class="block text-2xl lg:text-3xl font-light mt-3 text-slate-100">
                Thérapeute professionnel
              </span>
            </h1>
              
            <p class="text-lg lg:text-xl text-slate-100 leading-relaxed max-w-xl">
              Découvrez un accompagnement thérapeutique personnalisé pour votre bien-être et votre épanouissement personnel.
            </p>
          </div>
          
          <!-- Statistiques -->
          <div class="grid grid-cols-3 gap-4 py-4">
            <div class="text-center">
              <div class="text-2xl font-bold">+9</div>
              <div class="text-xs text-slate-200">Années d'expérience</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold">500+</div>
              <div class="text-xs text-slate-200">Patients accompagnés</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold">95%</div>
              <div class="text-xs text-slate-200">Satisfaction</div>
            </div>
          </div>
          
          <!-- Boutons d'action -->
          <div class="flex flex-col sm:flex-row gap-3">
            <button 
              @click="startBookingFlow('solo')"
              class="bg-white text-slate-700 hover:bg-slate-50 text-base px-6 py-3 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-semibold rounded-lg"
            >
              Prendre rendez-vous maintenant
            </button>
              
            <NuxtLink 
              to="/services"
              class="border-white text-white hover:bg-white hover:text-slate-700 text-base px-6 py-3 border-2 text-center rounded-lg"
            >
              Découvrir mes services
            </NuxtLink>
          </div>
        </div>
        
        <!-- Image de profil -->
        <div class="flex justify-center lg:justify-end">
          <div class="w-64 h-64 overflow-hidden shadow-lg rounded-2xl">
            <img 
              src="~/assets/images/philippe-bugeon.jpg" 
              alt="Philippe Bugeon - Thérapeute professionnel"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Vague décorative -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-24">
        <path d="M0,0V46.29c47.79,22.2,103.59,8.77,158.84-12.88C208.34,15.11,243.56,8.19,278.84,8.19c66.26,0,123.12,47.3,139.56,112.34C443.71,149.97,510.56,169.67,576,169.67c66.26,0,123.12-19.67,139.56-49.14C732.44,85.67,799.29,66,864.67,66c66.26,0,123.12,19.67,139.56,49.14C1020.44,149.97,1087.29,169.67,1152.67,169.67c66.26,0,123.12-19.67,139.56-49.14C1315.56,85.67,1382.41,66,1447.79,66c66.26,0,123.12,19.67,139.56,49.14C1602.56,149.97,1659.41,169.67,1724.79,169.67c66.26,0,123.12,19.67,139.56,49.14C1800,85.67,1866.85,66,1932.23,66c66.26,0,123.12,19.67,139.56,49.14C2087.44,149.97,2154.29,169.67,2219.67,169.67c66.26,0,123.12,19.67,139.56,49.14C2284.56,85.67,2351.41,66,2416.79,66c66.26,0,123.12,19.67,139.56,49.14C2572.56,149.97,2639.41,169.67,2704.79,169.67c66.26,0,123.12,19.67,139.56,49.14C2780,85.67,2846.85,66,2912.23,66c66.26,0,123.12,19.67,139.56,49.14C3067.44,149.97,3134.29,169.67,3200,169.67V0Z" fill="#f8fafc" opacity=".25"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#f8fafc" opacity=".5"></path>
        <path d="M0,0V5.67C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,114.44-6.21,165.39,12.43C776.83,77.25,828.34,96.54,884.32,96.54c58.3,0,113.74-19.29,165.39-12.43,51.05,18.64,106.35,21.06,165.39,12.43,43.38,6.34,84.61,18.82,127.61,26.46C1485.91,71.32,1650.07,59,1800,5.67V0Z" fill="#f8fafc"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
// Utiliser le composable de réservation
const { startBookingFlow } = useBookingFlow()
</script>

<style scoped>
.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
