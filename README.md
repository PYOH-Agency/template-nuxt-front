# Template Nuxt 3 + Strapi + Monitoring Complet

Template Nuxt 3 avec intégration Strapi et monitoring complet pour la production.

## 🚀 Fonctionnalités

- **Nuxt 3** - Framework Vue.js moderne
- **Strapi** - Headless CMS intégré
- **Tailwind CSS** - Framework CSS utilitaire
- **Pinia** - Gestion d'état Vue 3
- **Monitoring complet** - Sentry, Google Analytics, Uptime Robot
- **Kit de composants** - Composants réutilisables @pbugeon/nuxt-components-kit

## 📦 Kit de Composants

Ce template inclut automatiquement le kit de composants `@pbugeon/nuxt-components-kit` qui fournit des composants réutilisables :

### Composants disponibles

- **Layout** : `AppHeader`, `AppFooter`, `AppNavigation`
- **UI** : `AppButton`, `AppCard`, `AppIcon`
- **Sections** : `HeroSection`, `ServicesGrid`, `BookingSection`

### Utilisation

Les composants sont automatiquement importés avec le préfixe `Kit` :

```vue
<template>
  <div>
    <KitAppHeader />
    <KitHeroSection />
    <KitAppButton>Cliquez ici</KitAppButton>
  </div>
</template>
```

### Configuration automatique

Le kit est configuré automatiquement lors de l'installation. Si vous devez le reconfigurer manuellement :

```bash
chmod +x scripts/setup-kit.sh
./scripts/setup-kit.sh
```

## 🛠️ Installation

1. **Cloner le template**
```bash
git clone <votre-repo-template>
cd template-nuxt-front
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration automatique du kit**
```bash
./scripts/setup-kit.sh
```

4. **Lancer en développement**
```bash
npm run dev
```

## 📋 Scripts disponibles

- `npm run dev` - Lancement en développement
- `npm run build` - Build de production
- `npm run generate` - Génération statique
- `./scripts/setup-kit.sh` - Configuration du kit de composants
- `./deploy.sh` - Déploiement automatique

## 🔧 Configuration

### Variables d'environnement

Copiez `env.example` vers `env.local` et configurez :

```bash
cp env.example env.local
```

### Strapi

Configurez l'URL de votre instance Strapi dans `nuxt.config.ts` ou via les variables d'environnement.

### Monitoring

Le monitoring est configuré automatiquement en production via les variables d'environnement.

## 🚀 Déploiement

Utilisez le script de déploiement automatique :

```bash
./deploy.sh
```

Ou déployez manuellement sur Vercel, Netlify, ou votre plateforme préférée.

## 📚 Documentation

- [Nuxt 3](https://nuxt.com/docs)
- [Strapi](https://docs.strapi.io/)
- [Kit de composants](https://github.com/paulbugeon/nuxt-components-kit)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

MIT
