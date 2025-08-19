<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header avec navigation -->
    <SimpleHeader />
    
    <!-- Contenu principal -->
    <main class="flex-1">
      <slot />
    </main>
    
    <!-- Footer -->
    <SimpleFooter />
    
  </div>
</template>


