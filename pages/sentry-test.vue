<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Sentry Integration Test</h1>
        <p class="text-gray-600">Testez l'intégration Sentry et le monitoring de votre application</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Composant de test Sentry -->
        <SentryTest />
        
        <!-- Informations de configuration -->
        <div class="p-6 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-bold mb-4">Configuration Status</h2>
          
          <div class="space-y-3 text-sm">
            <div class="flex justify-between">
              <span class="font-medium">Sentry DSN:</span>
              <span :class="sentryDsn ? 'text-green-600' : 'text-red-600'">
                {{ sentryDsn ? 'Configured' : 'Not configured' }}
              </span>
            </div>
            
            <div class="flex justify-between">
              <span class="font-medium">Environment:</span>
              <span class="text-blue-600">{{ sentryEnvironment }}</span>
            </div>
            
            <div class="flex justify-between">
              <span class="font-medium">Release:</span>
              <span class="text-blue-600">{{ sentryRelease }}</span>
            </div>
            
            <div class="flex justify-between">
              <span class="font-medium">Performance Monitoring:</span>
              <span :class="performanceMonitoring ? 'text-green-600' : 'text-red-600'">
                {{ performanceMonitoring ? 'Enabled' : 'Disabled' }}
              </span>
            </div>
            
            <div class="flex justify-between">
              <span class="font-medium">Error Tracking:</span>
              <span :class="errorTracking ? 'text-green-600' : 'text-red-600'">
                {{ errorTracking ? 'Enabled' : 'Disabled' }}
              </span>
            </div>
          </div>
          
          <div class="mt-4 p-3 bg-blue-50 rounded text-sm text-blue-800">
            <p><strong>Instructions:</strong></p>
            <ul class="list-disc list-inside mt-2 space-y-1">
              <li>Cliquez sur "Trigger Test Error" pour tester Sentry</li>
              <li>Vérifiez que l'erreur apparaît dans votre dashboard Sentry</li>
              <li>Utilisez "Trigger Performance Issue" pour tester le monitoring des performances</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Logs de test -->
      <div class="mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Test Logs</h2>
        <div class="bg-gray-100 p-4 rounded font-mono text-sm max-h-64 overflow-y-auto">
          <div v-for="(log, index) in logs" :key="index" class="mb-1">
            <span class="text-gray-500">[{{ log.timestamp }}]</span>
            <span :class="log.type === 'error' ? 'text-red-600' : 'text-blue-600'">
              {{ log.message }}
            </span>
          </div>
        </div>
        <button 
          @click="clearLogs" 
          class="mt-3 px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
        >
          Clear Logs
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()
const logs = ref([])

// Configuration Sentry
const sentryDsn = config.public.sentry?.dsn
const sentryEnvironment = config.public.sentry?.environment || 'development'
const sentryRelease = config.public.sentry?.release || '1.0.0'
const performanceMonitoring = config.public.monitoring?.enablePerformanceMonitoring
const errorTracking = config.public.monitoring?.enableErrorTracking

// Ajouter un log
const addLog = (message, type = 'info') => {
  logs.value.push({
    timestamp: new Date().toLocaleTimeString(),
    message,
    type
  })
}

// Effacer les logs
const clearLogs = () => {
  logs.value = []
}

// Intercepter les erreurs globales
onMounted(() => {
  addLog('Page loaded, Sentry test ready', 'info')
  
  // Intercepter les erreurs non gérées
  window.addEventListener('error', (event) => {
    addLog(`Global error: ${event.message}`, 'error')
  })
  
  // Intercepter les promesses rejetées
  window.addEventListener('unhandledrejection', (event) => {
    addLog(`Unhandled promise rejection: ${event.reason}`, 'error')
  })
})
</script>
