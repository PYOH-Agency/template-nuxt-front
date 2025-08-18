# Site Web - Philippe Bugeon

Site web professionnel pour Philippe Bugeon, psychopraticien à Nantes.

## 🎯 Objectif

Site web moderne et professionnel inspiré du design de [Ludovic Harel](https://www.ludovicharel-therapie.com/) avec :
- Design épuré et professionnel
- Couleurs chaleureuses et accueillantes
- Moins d'arrondis pour un look plus professionnel
- Intégration Cal.com pour la prise de rendez-vous
- Kit de composants réutilisables

## 🚀 Fonctionnalités

### ✅ Implémentées
- **Page d'accueil** avec sections :
  - Hero section avec appel à l'action
  - Services (thérapie individuelle et de groupe)
  - À propos avec formations
  - Témoignages de patients
  - Formulaire de contact
- **Navigation** responsive avec header et footer
- **Intégration Cal.com** pour la prise de rendez-vous
- **Design responsive** mobile-first
- **Kit de composants** @pbugeon/nuxt-components-kit

### 🔄 À venir
- **Système Stripe** pour le paiement en ligne
- **Deux produits** :
  - Thérapie individuelle
  - Thérapie de groupe
- **Checkout Stripe** intégré
- **Photos de M. Bugeon** (remplacer les placeholders)

## 🛠️ Technologies

- **Frontend** : Nuxt 3 + Vue 3
- **Styling** : Tailwind CSS
- **Composants** : @pbugeon/nuxt-components-kit
- **Réservations** : Cal.com (paul-bugeon-el1oht)
- **Paiements** : Stripe (à implémenter)

## 📁 Structure du projet

```
components/
├── AboutSection.vue          # Section "À propos"
├── ContactSection.vue        # Section contact avec formulaire
├── TestimonialsSection.vue   # Section témoignages
└── (autres composants du kit)

pages/
└── index.vue                 # Page d'accueil

assets/
├── css/
│   ├── main.css             # CSS principal + Tailwind
│   └── custom.css           # Styles personnalisés
```

## 🎨 Design

### Couleurs
- **Bleu chaleureux** : #4f46e5
- **Indigo chaleureux** : #6366f1  
- **Orange chaleureux** : #f97316
- **Gris neutre** : #1f2937

### Typographie
- **Titres** : Font-bold, tailles 2xl à 6xl
- **Corps** : Font-medium, tailles base à xl
- **Navigation** : Font-medium

### Composants
- **Boutons** : Moins arrondis (border-radius: 0.375rem)
- **Cards** : Ombres subtiles, transitions douces
- **Formulaires** : Design professionnel, focus states

## 🚀 Démarrage

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build pour la production
npm run build

# Preview de la production
npm run preview
```

## 🔧 Configuration

### Variables d'environnement
```env
# Cal.com
CAL_LINK=paul-bugeon-el1oht

# Stripe (à configurer)
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### Personnalisation
- **Couleurs** : Modifier `assets/css/custom.css`
- **Contenu** : Éditer les composants Vue
- **Images** : Remplacer les placeholders par les photos de M. Bugeon

## 📱 Responsive

- **Mobile** : Design mobile-first
- **Tablet** : Grilles adaptatives
- **Desktop** : Layout complet avec navigation

## 🔗 Liens utiles

- **Cal.com** : https://cal.com/paul-bugeon-el1oht
- **Kit de composants** : @pbugeon/nuxt-components-kit
- **Design inspiré** : https://www.ludovicharel-therapie.com/

## 📝 Notes de développement

- Utilisation du kit de composants pour la cohérence
- Design moins arrondi pour un look professionnel
- Couleurs chaleureuses pour l'aspect accueillant
- Intégration Cal.com pour la simplicité des réservations
- Structure modulaire pour faciliter les modifications

## 🚀 Déploiement

Le site est prêt pour être déployé sur :
- Vercel (recommandé)
- Netlify
- GitHub Pages
- Serveur VPS

## 📞 Support

Pour toute question ou modification, contacter l'équipe de développement PYOH.
