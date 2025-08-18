# 📦 Guide d'Utilisation du Kit de Composants

Ce guide explique comment utiliser le kit de composants `@pbugeon/nuxt-components-kit` dans vos projets Nuxt.

## 🚀 Installation Automatique

Le kit est automatiquement installé et configuré lors de l'utilisation du template. Si vous devez le réinstaller manuellement :

```bash
npm install @pbugeon/nuxt-components-kit@latest
```

## ⚙️ Configuration

### Configuration Nuxt

Le kit est automatiquement configuré dans `nuxt.config.ts` :

```typescript
export default defineNuxtConfig({
  components: {
    dirs: [
      '~/components',
      '~/node_modules/@pbugeon/nuxt-components-kit/components'
    ]
  }
})
```

### Préfixe des Composants

Tous les composants du kit sont automatiquement importés avec le préfixe `Kit` pour éviter les conflits de noms.

## 🎨 Composants Disponibles

### Layout Components

#### `<KitAppHeader>`
En-tête de navigation principal avec menu responsive.

```vue
<template>
  <KitAppHeader 
    :logo="'/logo.png'"
    :menu-items="menuItems"
    :cta-text="'Contactez-nous'"
    @cta-click="handleContact"
  />
</template>

<script setup>
const menuItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'À propos', href: '/about' },
  { label: 'Contact', href: '/contact' }
]

const handleContact = () => {
  // Logique de contact
}
</script>
```

#### `<KitAppFooter>`
Pied de page avec liens et informations de contact.

```vue
<template>
  <KitAppFooter 
    :company-name="'Votre Entreprise'"
    :social-links="socialLinks"
    :contact-info="contactInfo"
  />
</template>

<script setup>
const socialLinks = [
  { platform: 'facebook', url: 'https://facebook.com/votre-entreprise' },
  { platform: 'twitter', url: 'https://twitter.com/votre-entreprise' },
  { platform: 'linkedin', url: 'https://linkedin.com/company/votre-entreprise' }
]

const contactInfo = {
  email: 'contact@votre-entreprise.com',
  phone: '+33 1 23 45 67 89',
  address: '123 Rue de la Paix, 75001 Paris'
}
</script>
```

#### `<KitAppNavigation>`
Navigation secondaire ou de section.

```vue
<template>
  <KitAppNavigation 
    :items="navItems"
    :orientation="'horizontal'"
    :show-icons="true"
  />
</template>

<script setup>
const navItems = [
  { label: 'Fonctionnalités', href: '#features', icon: 'star' },
  { label: 'Tarifs', href: '#pricing', icon: 'credit-card' },
  { label: 'FAQ', href: '#faq', icon: 'help-circle' }
]
</script>
```

### UI Components

#### `<KitAppButton>`
Bouton personnalisable avec différents styles et états.

```vue
<template>
  <div class="space-y-4">
    <!-- Bouton primaire -->
    <KitAppButton 
      variant="primary"
      size="lg"
      @click="handlePrimaryClick"
    >
      Bouton Principal
    </KitAppButton>

    <!-- Bouton secondaire avec icône -->
    <KitAppButton 
      variant="secondary"
      size="md"
      :icon="'arrow-right'"
      :icon-position="'right'"
      @click="handleSecondaryClick"
    >
      En savoir plus
    </KitAppButton>

    <!-- Bouton outline -->
    <KitAppButton 
      variant="outline"
      size="sm"
      :disabled="isLoading"
      @click="handleOutlineClick"
    >
      {{ isLoading ? 'Chargement...' : 'Cliquez ici' }}
    </KitAppButton>
  </div>
</template>

<script setup>
const isLoading = ref(false)

const handlePrimaryClick = () => {
  console.log('Bouton principal cliqué')
}

const handleSecondaryClick = () => {
  console.log('Bouton secondaire cliqué')
}

const handleOutlineClick = async () => {
  isLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))
  isLoading.value = false
}
</script>
```

#### `<KitAppCard>`
Carte conteneur avec options de style.

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Carte simple -->
    <KitAppCard>
      <h3 class="text-xl font-bold mb-2">Titre de la carte</h3>
      <p class="text-gray-600">Contenu de la carte avec du texte descriptif.</p>
    </KitAppCard>

    <!-- Carte avec image -->
    <KitAppCard 
      :image="'/image.jpg'"
      :image-alt="'Description de l\'image'"
      :elevation="'md'"
    >
      <h3 class="text-xl font-bold mb-2">Carte avec image</h3>
      <p class="text-gray-600">Carte avec une image en en-tête.</p>
    </KitAppCard>

    <!-- Carte interactive -->
    <KitAppCard 
      :interactive="true"
      :elevation="'lg'"
      @click="handleCardClick"
    >
      <h3 class="text-xl font-bold mb-2">Carte interactive</h3>
      <p class="text-gray-600">Cliquez sur cette carte pour une action.</p>
    </KitAppCard>
  </div>
</template>

<script setup>
const handleCardClick = () => {
  console.log('Carte cliquée')
}
</script>
```

#### `<KitAppIcon>`
Icône SVG personnalisable.

```vue
<template>
  <div class="flex items-center space-x-4">
    <KitAppIcon 
      name="heart"
      size="24"
      color="red"
      class="animate-pulse"
    />
    
    <KitAppIcon 
      name="star"
      size="20"
      color="gold"
      :filled="true"
    />
    
    <KitAppIcon 
      name="check-circle"
      size="32"
      color="green"
      :animated="true"
    />
  </div>
</template>
```

### Section Components

#### `<KitHeroSection>`
Section héro avec titre, description et call-to-action.

```vue
<template>
  <KitHeroSection 
    :title="'Bienvenue sur notre site'"
    :subtitle="'Découvrez nos services exceptionnels'"
    :description="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'"
    :cta-text="'Commencer maintenant'"
    :background-image="'/hero-bg.jpg'"
    :overlay="true"
    @cta-click="handleHeroCTA"
  />
</template>

<script setup>
const handleHeroCTA = () => {
  // Navigation ou action CTA
  navigateTo('/services')
}
</script>
```

#### `<KitServicesGrid>`
Grille de services avec icônes et descriptions.

```vue
<template>
  <KitServicesGrid 
    :services="services"
    :columns="3"
    :show-icons="true"
    @service-click="handleServiceClick"
  />
</template>

<script setup>
const services = [
  {
    id: 1,
    title: 'Développement Web',
    description: 'Sites web modernes et responsives',
    icon: 'code',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Design UI/UX',
    description: 'Interfaces utilisateur intuitives',
    icon: 'palette',
    color: 'purple'
  },
  {
    id: 3,
    title: 'Consulting',
    description: 'Conseils stratégiques en développement',
    icon: 'users',
    color: 'green'
  }
]

const handleServiceClick = (service) => {
  console.log('Service sélectionné:', service.title)
  navigateTo(`/services/${service.id}`)
}
</script>
```

#### `<KitBookingSection>`
Section de réservation avec formulaire.

```vue
<template>
  <KitBookingSection 
    :title="'Réservez votre consultation'"
    :description="'Prenez rendez-vous pour discuter de votre projet'"
    :fields="bookingFields"
    :submit-text="'Réserver maintenant'"
    @submit="handleBookingSubmit"
  />
</template>

<script setup>
const bookingFields = [
  { name: 'name', label: 'Nom complet', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'phone', label: 'Téléphone', type: 'tel', required: false },
  { name: 'date', label: 'Date souhaitée', type: 'date', required: true },
  { name: 'message', label: 'Message', type: 'textarea', required: false }
]

const handleBookingSubmit = async (formData) => {
  try {
    // Envoi des données de réservation
    console.log('Données de réservation:', formData)
    // API call ici
  } catch (error) {
    console.error('Erreur de réservation:', error)
  }
}
</script>
```

## 🎨 Personnalisation

### Variables CSS

Le kit utilise des variables CSS pour la personnalisation :

```css
:root {
  --kit-primary-color: #3b82f6;
  --kit-secondary-color: #64748b;
  --kit-success-color: #10b981;
  --kit-warning-color: #f59e0b;
  --kit-error-color: #ef4444;
  --kit-border-radius: 0.5rem;
  --kit-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
```

### Classes Tailwind

Tous les composants sont compatibles avec Tailwind CSS et peuvent être personnalisés avec des classes utilitaires.

## 🔧 Développement

### Ajouter de nouveaux composants

1. Créez votre composant dans `components/`
2. Exportez-le dans `components/index.ts`
3. Utilisez-le avec le préfixe `Kit`

### Override des composants

Pour personnaliser un composant du kit, créez un composant local avec le même nom :

```vue
<!-- components/KitAppButton.vue -->
<template>
  <button class="custom-button">
    <slot />
  </button>
</template>

<style scoped>
.custom-button {
  /* Vos styles personnalisés */
}
</style>
```

## 📚 Ressources

- [Documentation complète du kit](https://github.com/paulbugeon/nuxt-components-kit)
- [Exemples d'utilisation](https://github.com/paulbugeon/nuxt-components-kit/examples)
- [Issues et support](https://github.com/paulbugeon/nuxt-components-kit/issues)

## 🆘 Support

Si vous rencontrez des problèmes avec le kit :

1. Vérifiez la [documentation officielle](https://github.com/paulbugeon/nuxt-components-kit)
2. Consultez les [issues existantes](https://github.com/paulbugeon/nuxt-components-kit/issues)
3. Créez une [nouvelle issue](https://github.com/paulbugeon/nuxt-components-kit/issues/new) si nécessaire

