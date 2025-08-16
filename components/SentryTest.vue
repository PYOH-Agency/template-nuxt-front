<template>
  <div class="p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-xl font-bold mb-4">Test Sentry Integration</h2>
    
    <div class="space-y-4">
      <button 
        @click="triggerError" 
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Trigger Test Error
      </button>
      
      <button 
        @click="triggerPerformanceIssue" 
        class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        Trigger Performance Issue
      </button>
      
      <button 
        @click="trackCustomEvent" 
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Track Custom Event
      </button>
    </div>
    
    <div class="mt-4 p-3 bg-gray-100 rounded text-sm">
      <p><strong>Status:</strong> {{ status }}</p>
      <p><strong>Last Action:</strong> {{ lastAction }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const status = ref('Ready')
const lastAction = ref('No action yet')

const triggerError = () => {
  try {
    status.value = 'Triggering error...'
    lastAction.value = 'Error triggered'
    
    // Simuler une erreur
    throw new Error('Test error from SentryTest component')
  } catch (error) {
    status.value = 'Error captured'
    console.error('Test error:', error)
  }
}

const triggerPerformanceIssue = () => {
  status.value = 'Simulating performance issue...'
  lastAction.value = 'Performance issue simulated'
  
  // Simuler un long processus
  const start = performance.now()
  let result = 0
  
  for (let i = 0; i < 1000000; i++) {
    result += Math.random()
  }
  
  const duration = performance.now() - start
  status.value = `Performance test completed in ${duration.toFixed(2)}ms`
  
  console.log(`Performance test: ${duration.toFixed(2)}ms`)
}

const trackCustomEvent = () => {
  status.value = 'Tracking custom event...'
  lastAction.value = 'Custom event tracked'
  
  // Ici vous pouvez utiliser votre composable de monitoring
  console.log('Custom event tracked: button_click')
  status.value = 'Custom event tracked'
}
</script>
