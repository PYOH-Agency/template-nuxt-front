<template>
  <div>
    <!-- Section Témoignages -->
    <TestimonialsSection
      title="Témoignages de nos patients"
      subtitle="Découvrez ce que disent nos patients de leur expérience"
      :testimonials="testimonials"
      :overall-rating="overallRating"
      :cta="testimonialsCta"
      color="emerald"
    />
  </div>
</template>

<script setup>
// Configuration des témoignages
const testimonials = [
  {
    id: 1,
    name: "Marie L.",
    rating: 5,
    content: "Philippe m'a accompagnée avec beaucoup de bienveillance dans une période difficile de ma vie. Son approche personnalisée m'a permis de retrouver confiance en moi et de surmonter mes difficultés.",
    therapy: "Thérapie individuelle",
    date: "2024"
  },
  {
    id: 2,
    name: "Thomas R.",
    rating: 5,
    content: "La thérapie de groupe avec Philippe a été une expérience enrichissante. L'ambiance bienveillante et le partage d'expériences m'ont beaucoup aidé dans mon parcours.",
    therapy: "Thérapie de groupe",
    date: "2024"
  },
  {
    id: 3,
    name: "Sophie M.",
    rating: 5,
    content: "Philippe est un thérapeute exceptionnel. Son écoute active et ses conseils adaptés m'ont permis de progresser rapidement vers un mieux-être durable.",
    therapy: "Thérapie individuelle",
    date: "2023"
  },
  {
    id: 4,
    name: "Pierre D.",
    rating: 5,
    content: "Grâce à l'accompagnement de Philippe, j'ai pu surmonter mes angoisses et retrouver une vie équilibrée. Je recommande vivement ses services.",
    therapy: "Thérapie individuelle",
    date: "2023"
  },
  {
    id: 5,
    name: "Julie C.",
    rating: 5,
    content: "La thérapie de groupe a été un véritable soutien dans ma reconstruction personnelle. Philippe crée un environnement sécurisant et bienveillant.",
    therapy: "Thérapie de groupe",
    date: "2024"
  },
  {
    id: 6,
    name: "Marc F.",
    rating: 5,
    content: "Philippe a su m'accompagner avec professionnalisme et empathie. Sa méthode adaptée à mes besoins m'a permis d'atteindre mes objectifs thérapeutiques.",
    therapy: "Thérapie individuelle",
    date: "2023"
  }
]

// Note globale
const overallRating = {
  score: 5.0,
  total: testimonials.length,
  average: "5.0/5"
}

// Configuration du CTA
const testimonialsCta = {
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
  title: 'Témoignages - Philippe Bugeon',
  meta: [
    {
      name: 'description',
      content: 'Découvrez les témoignages de nos patients satisfaits. Philippe Bugeon accompagne avec bienveillance vers le bien-être et l\'épanouissement personnel.'
    }
  ]
})
</script>
