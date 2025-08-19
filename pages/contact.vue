<template>
  <div>
    <!-- Section Contact -->
    <ContactSection
      title="Contactez-nous"
      subtitle="Nous sommes là pour vous accompagner"
      :contact-info="contactInfo"
      :form-config="formConfig"
      :cta="contactCta"
      color="emerald"
    />
  </div>
</template>

<script setup>
// Configuration des informations de contact
const contactInfo = {
  email: "contact@philippe-bugeon.fr",
  phone: "+33 1 23 45 67 89",
  address: "Nantes, France",
  hours: "Lun-Ven: 9h-18h, Sam: 9h-12h",
  description: "N'hésitez pas à nous contacter pour toute question ou pour prendre rendez-vous. Nous vous répondrons dans les plus brefs délais."
}

// Configuration du formulaire
const formConfig = {
  fields: [
    { name: 'name', label: 'Nom complet', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Téléphone', type: 'tel', required: false },
    { name: 'subject', label: 'Sujet', type: 'select', required: true, options: [
      'Prise de rendez-vous',
      'Question sur les services',
      'Informations générales',
      'Autre'
    ]},
    { name: 'message', label: 'Message', type: 'textarea', required: true }
  ],
  submitLabel: 'Envoyer le message',
  successMessage: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
}

// Configuration du CTA
const contactCta = {
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
  title: 'Contact - Philippe Bugeon',
  meta: [
    {
      name: 'description',
      content: 'Contactez Philippe Bugeon, thérapeute professionnel. Prise de rendez-vous, informations sur nos services et accompagnement personnalisé.'
    }
  ]
})
</script>
