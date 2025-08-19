<template>
  <footer class="bg-slate-800 text-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Informations principales -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-3 mb-3">
            <div class="w-8 h-8 bg-gradient-to-br from-slate-600 to-gray-700 flex items-center justify-center rounded-full">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold">Philippe Bugeon</h3>
              <p class="text-xs text-slate-300">Thérapeute professionnel</p>
            </div>
          </div>
          <p class="text-slate-300 mb-4 max-w-sm">
            Accompagnement thérapeutique personnalisé pour votre bien-être et votre épanouissement personnel.
          </p>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Services</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/services#individuelle" class="text-slate-300 hover:text-white transition-colors">
                Thérapie individuelle
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services#groupe" class="text-slate-300 hover:text-white transition-colors">
                Thérapie de groupe
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <ul class="space-y-2">
            <li>
              <a href="mailto:contact@philippe-bugeon.fr" class="text-slate-300 hover:text-white transition-colors">
                contact@philippe-bugeon.fr
              </a>
            </li>
            <li>
              <a href="tel:+33123456789" class="text-slate-300 hover:text-white transition-colors">
                +33 1 23 45 67 89
              </a>
            </li>
            <li class="text-slate-300">
              Nantes, France
            </li>
          </ul>
        </div>
      </div>

      <!-- Séparateur -->
      <div class="border-t border-slate-700 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-slate-400 text-sm">
            © 2024 Philippe Bugeon. Tous droits réservés.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <NuxtLink to="/a-propos" class="text-slate-400 hover:text-white text-sm transition-colors">
              À propos
            </NuxtLink>
            <NuxtLink to="/contact" class="text-slate-400 hover:text-white text-sm transition-colors">
              Contact
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
