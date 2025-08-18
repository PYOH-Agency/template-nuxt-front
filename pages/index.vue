<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Header -->
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
    
    <!-- Hero Section -->
    <HeroSection
      title="PHILIPPE BUGEON Psychopraticien à Nantes"
      description="Face aux situations douloureuses, aux problèmes récurrents & au mal-être, je vous aide à retrouver votre équilibre et votre bien-être."
      highlightedWord="PHILIPPE BUGEON"
      :primaryAction="{
        text: '👉 Je prends rendez-vous',
        action: openBooking
      }"
      :secondaryAction="{
        text: 'Découvrir mes services',
        to: '#services'
      }"
      :visual="{
        type: 'icon',
        icon: 'heart',
        title: 'Bienveillance',
        subtitle: 'Un accompagnement dans la confiance'
      }"
      @primaryAction="openBooking"
    />
    
    <!-- Services Section -->
    <ServicesGrid
      id="services"
      title="Mes Services"
      description="Je propose deux types d'accompagnement pour vous aider à retrouver votre équilibre et votre bien-être."
      :services="services"
      :gridClasses="'grid grid-cols-1 md:grid-cols-2 gap-8'"
    />
    
    <!-- About Section -->
    <AboutSection id="about" />
    
    <!-- Testimonials Section -->
    <TestimonialsSection id="testimonials" />
    
    <!-- Contact Section -->
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

const openBooking = () => {
  // Ouvrir Cal.com dans un nouvel onglet
  window.open('https://cal.com/paul-bugeon-el1oht', '_blank')
}

const navigation = [
  { label: 'Accueil', path: '#home' },
  { label: 'Services', path: '#services' },
  { label: 'À propos', path: '#about' },
  { label: 'Témoignages', path: '#testimonials' },
  { label: 'Contact', path: '#contact' }
]

const services = [
  {
    title: 'Thérapie Individuelle',
    description: 'Un accompagnement personnalisé pour les adultes, adolescents et enfants. Séance d\'environ 55 minutes.',
    icon: 'user',
    color: 'primary',
    price: '60€',
    action: {
      text: 'Prendre rendez-vous',
      variant: 'primary',
      action: openBooking
    }
  },
  {
    title: 'Thérapie de Groupe',
    description: 'Un accompagnement en groupe pour partager et progresser ensemble. Séance d\'environ 90 minutes.',
    icon: 'users',
    color: 'secondary',
    price: '45€',
    badge: {
      text: 'Nouveau',
      type: 'success'
    },
    action: {
      text: 'Prendre rendez-vous',
      variant: 'outline',
      action: openBooking
    }
  }
]
</script>
