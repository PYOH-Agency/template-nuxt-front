<template>
  <nav class="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo et Titre -->
        <NuxtLink to="/" class="flex items-center space-x-3">
          <div class="w-10 h-10 overflow-hidden shadow-md rounded-full">
            <img 
              src="~/assets/images/philippe-bugeon.jpg" 
              alt="Philippe Bugeon"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 class="text-lg font-bold text-gray-900">Philippe Bugeon</h1>
            <p class="text-xs font-medium text-slate-600">Thérapeute</p>
          </div>
        </NuxtLink>
        
        <!-- Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.path"
            :to="item.path"
            class="text-gray-700 hover:text-slate-600 font-medium transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
        
        <!-- CTA Button -->
        <div class="flex items-center space-x-4">
          <NuxtLink 
            to="/services"
            class="bg-slate-700 hover:bg-slate-800 text-white px-4 py-2 transition-all duration-300 font-medium shadow-md hover:shadow-lg rounded-lg"
          >
            Prendre RDV
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Configuration de la navigation
const navigation = [
  { path: '/', label: 'Accueil' },
  { path: '/services', label: 'Services' },
  { path: '/a-propos', label: 'À propos' },
  { path: '/temoignages', label: 'Témoignages' },
  { path: '/contact', label: 'Contact' }
]
</script>
