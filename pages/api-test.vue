<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="mb-8">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center text-indigo-600 hover:text-indigo-500 mb-4"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour à l'accueil
        </NuxtLink>
        <h1 class="text-3xl font-bold text-gray-900">Test API Strapi</h1>
        <p class="mt-2 text-gray-600">Testez la connexion et les endpoints de votre API Strapi</p>
      </div>

      <!-- API Status -->
      <div class="bg-white shadow rounded-lg p-6 mb-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Statut de l'API</h2>
        <div class="flex items-center space-x-3">
          <div :class="apiStatus.color" class="flex-shrink-0">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" :d="apiStatus.icon" clip-rule="evenodd" />
            </svg>
          </div>
          <span class="text-sm text-gray-900">{{ apiStatus.message }}</span>
        </div>
        <div class="mt-2 text-sm text-gray-500">
          URL: {{ strapiUrl }}
        </div>
      </div>

      <!-- Content Types -->
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Content Types disponibles</h2>
        
        <div v-if="pending" class="text-center py-8">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          <p class="mt-2 text-sm text-gray-500">Chargement...</p>
        </div>

        <div v-else-if="error" class="text-center py-8">
          <div class="text-red-500 mb-2">
            <svg class="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <p class="text-sm text-gray-500">{{ error }}</p>
        </div>

        <div v-else-if="contentTypes && contentTypes.length > 0" class="space-y-4">
          <div 
            v-for="contentType in contentTypes" 
            :key="contentType.uid"
            class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
          >
            <h3 class="font-medium text-gray-900">{{ contentType.info.displayName }}</h3>
            <p class="text-sm text-gray-500 mt-1">{{ contentType.uid }}</p>
            <div class="mt-2 flex space-x-2">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {{ contentType.kind }}
              </span>
              <span v-if="contentType.info.pluralName" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {{ contentType.info.pluralName }}
              </span>
            </div>
          </div>
        </div>

        <div v-else class="text-center py-8">
          <div class="text-gray-400 mb-2">
            <svg class="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p class="text-sm text-gray-500">Aucun content type trouvé</p>
        </div>
      </div>

      <!-- Quick Test -->
      <div class="mt-6 bg-white shadow rounded-lg p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Test rapide</h2>
        <button 
          @click="testConnection"
          :disabled="testing"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          <svg v-if="testing" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ testing ? 'Test en cours...' : 'Tester la connexion' }}
        </button>
        
        <div v-if="testResult" class="mt-4 p-3 rounded-md" :class="testResult.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'">
          {{ testResult.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Configuration de la page
useHead({
  title: 'Test API - Template Nuxt + Strapi'
})

const config = useRuntimeConfig()
const strapiUrl = config.public.strapiUrl

// Test de connexion API
const { data: contentTypes, pending, error } = await useFetch('/api/content-types', {
  baseURL: strapiUrl,
  server: false,
  default: () => []
})

// Statut de l'API
const apiStatus = computed(() => {
  if (pending.value) {
    return {
      color: 'text-yellow-500',
      icon: 'M10 2a8 8 0 100 16 8 8 0 000-16z',
      message: 'Connexion en cours...'
    }
  } else if (error.value) {
    return {
      color: 'text-red-500',
      icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z',
      message: 'Connexion échouée'
    }
  } else {
    return {
      color: 'text-green-500',
      icon: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
      message: 'Connexion réussie'
    }
  }
})

// Test de connexion manuel
const testing = ref(false)
const testResult = ref(null)

const testConnection = async () => {
  testing.value = true
  testResult.value = null
  
  try {
    const response = await $fetch('/api/health', {
      baseURL: strapiUrl
    })
    
    testResult.value = {
      success: true,
      message: 'Connexion réussie ! L\'API Strapi répond correctement.'
    }
  } catch (err) {
    testResult.value = {
      success: false,
      message: `Erreur de connexion : ${err.message || 'Impossible de joindre l\'API'}`
    }
  } finally {
    testing.value = false
  }
}
</script>
