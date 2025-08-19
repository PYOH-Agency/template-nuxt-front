<template>
  <div>
    <!-- Section À propos -->
    <AboutSection
      title="Philippe Bugeon"
      subtitle="Thérapeute professionnel"
      :content="aboutContent"
      :badges="badges"
      :cta="aboutCta"
      color="emerald"
    />
  </div>
</template>

<script setup>
// Configuration du contenu "À propos"
const aboutContent = {
  description: "Philippe Bugeon est un thérapeute professionnel passionné par l'accompagnement de ses patients vers le bien-être et l'épanouissement personnel. Avec plus de 9 ans d'expérience, il a développé une approche bienveillante et personnalisée pour chaque personne qu'il accompagne.",
  experience: "9+ années d'expérience",
  patients: "500+ patients accompagnés",
  satisfaction: "95% de satisfaction",
  approach: "Mon approche thérapeutique se base sur l'écoute active, la bienveillance et l'adaptation aux besoins spécifiques de chaque patient. Je crois en la capacité de chacun à retrouver son équilibre et à développer les ressources nécessaires pour surmonter les difficultés de la vie.",
  values: [
    "Bienveillance et non-jugement",
    "Confidentialité absolue",
    "Approche personnalisée",
    "Accompagnement sur le long terme"
  ]
}

// Configuration des badges
const badges = [
  { label: 'Thérapeute certifié', color: 'emerald' },
  { label: '9+ ans d\'expérience', color: 'blue' },
  { label: '500+ patients', color: 'purple' },
  { label: '95% satisfaction', color: 'green' }
]

// Configuration du CTA
const aboutCta = {
  primary: { 
    label: 'Prendre rendez-vous', 
    action: () => startBookingFlow('solo') 
  },
  secondary: { 
    label: 'Voir nos services', 
    path: '/services' 
  }
}

// Utiliser le composable de réservation
const { startBookingFlow } = useBookingFlow()

// Meta tags pour le SEO
useHead({
  title: 'À propos - Philippe Bugeon',
  meta: [
    {
      name: 'description',
      content: 'Découvrez Philippe Bugeon, thérapeute professionnel avec plus de 9 ans d\'expérience. Son approche bienveillante et personnalisée pour votre bien-être.'
    }
  ]
})
</script>
