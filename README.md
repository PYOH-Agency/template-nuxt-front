# 🚀 Template Nuxt Front - Monitoring Complet

Template Nuxt 3 avec intégration Strapi et système de monitoring complet et professionnel.

## ✨ **Fonctionnalités Incluses**

### **🎯 Framework & CMS**
- **Nuxt 3** - Framework Vue.js moderne avec SSR
- **Strapi** - Headless CMS intégré
- **Tailwind CSS** - Framework CSS utilitaire
- **TypeScript** - Support complet des types

### **📊 Monitoring Complet**
- **Sentry** - Suivi des erreurs et performance
- **Google Analytics 4** - Analytics utilisateur
- **Plausible Analytics** - Analytics respectueux de la vie privée
- **Google Tag Manager** - Gestion centralisée des tags
- **Uptime Robot** - Surveillance de disponibilité 24h/24
- **Grafana** - Visualisation et alertes centralisées

### **🚀 Déploiement Automatique**
- **Vercel** - Déploiement automatique depuis GitHub
- **Scripts automatisés** - Configuration et déploiement
- **Variables d'environnement** - Gestion production/development
- **CI/CD** - Intégration continue

## 🛠 **Installation Rapide**

### **1. Créer un nouveau projet**
```bash
# Depuis le répertoire script/
./init-project.sh client "Nom du Client"
```

### **2. Configuration automatique**
Le script configure automatiquement :
- ✅ Projet Nuxt avec toutes les dépendances
- ✅ Intégration Strapi
- ✅ Configuration Sentry (création automatique du projet)
- ✅ Variables d'environnement
- ✅ Scripts de déploiement

### **3. Déploiement en production**
```bash
# Dans le projet créé
./deploy.sh
```

## 📁 **Structure du Template**

```
template-nuxt-front/
├── 📄 nuxt.config.ts          # Configuration Nuxt avec monitoring
├── 📄 package.json             # Dépendances (Sentry, Analytics, Uptime Robot)
├── 📄 vercel.json             # Configuration Vercel
├── 📄 env.example             # Variables d'environnement
├── 📄 deploy.sh               # Script de déploiement automatisé
├── 📄 DEPLOYMENT.md           # Guide de déploiement
├── 📄 MONITORING.md           # Guide du monitoring
├── 📁 composables/
│   └── 📄 useMonitoring.ts    # Composable de monitoring générique
├── 📁 pages/
│   ├── 📄 sentry-test.vue     # Test Sentry
│   ├── 📄 analytics-test.vue  # Test Analytics
│   └── 📄 uptime-test.vue     # Test Uptime Robot
└── 📁 components/
    └── 📄 SentryTest.vue      # Composant de test Sentry
```

## 🔧 **Configuration**

### **Variables d'Environnement Requises**

```bash
# Strapi
NUXT_PUBLIC_STRAPI_URL=https://votre-strapi-url.com
NUXT_PUBLIC_STRAPI_TOKEN=votre_token

# Sentry
NUXT_PUBLIC_SENTRY_DSN=votre_sentry_dsn
NUXT_PUBLIC_SENTRY_ENVIRONMENT=development

# Analytics
NUXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NUXT_PUBLIC_PLAUSIBLE_DOMAIN=votre-domaine.com
NUXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Uptime Robot
NUXT_PUBLIC_UPTIME_ROBOT_API_KEY=votre_api_key
NUXT_PUBLIC_UPTIME_ROBOT_MONITOR_ID=votre_monitor_id

# Grafana
NUXT_PUBLIC_GRAFANA_URL=http://localhost:3000
NUXT_PUBLIC_GRAFANA_API_KEY=votre_api_key
```

## 📊 **Utilisation du Monitoring**

### **Composable useMonitoring**

```typescript
// Dans vos composants
const { 
  initializeMonitoring, 
  trackEvent, 
  trackPageView, 
  captureError,
  checkUptimeStatus 
} = useMonitoring()

// Initialiser le monitoring
onMounted(() => {
  initializeMonitoring()
})

// Tracker un événement
trackEvent('button_click', { 
  button: 'cta', 
  page: 'home' 
})

// Capturer une erreur
captureError(error, { context: 'user_action' })

// Vérifier le statut Uptime Robot
const status = await checkUptimeStatus()
```

### **Pages de Test**

- **`/sentry-test`** - Test Sentry et monitoring d'erreurs
- **`/analytics-test`** - Test Analytics et tracking utilisateur
- **`/uptime-test`** - Test Uptime Robot et surveillance

## 🚀 **Déploiement**

### **Déploiement Automatique**

1. **Configuration GitHub** : Le script configure automatiquement l'origine
2. **Configuration Vercel** : Intégration automatique avec Vercel
3. **Variables d'environnement** : Configuration production/development
4. **Monitoring en production** : Tous les outils sont configurés

### **Script de Déploiement**

```bash
# Déploiement complet
./deploy.sh

# Le script :
# 1. Vérifie le projet
# 2. Installe les dépendances
# 3. Teste le build
# 4. Push vers GitHub
# 5. Configure Vercel
# 6. Déploie en production
```

## 📚 **Documentation**

- **`DEPLOYMENT.md`** - Guide complet de déploiement
- **`MONITORING.md`** - Guide du système de monitoring
- **`env.example`** - Exemple de configuration
- **`vercel.json`** - Configuration Vercel

## 🎯 **Avantages du Template**

### **✅ Professionnel**
- Monitoring de niveau entreprise
- Intégration complète des outils
- Configuration automatisée

### **✅ Réutilisable**
- Un seul template pour tous les projets
- Configuration générique et adaptable
- Scripts d'automatisation

### **✅ Maintenable**
- Une seule source de vérité
- Mises à jour centralisées
- Documentation complète

### **✅ Productif**
- Création de projet en quelques minutes
- Déploiement automatique
- Monitoring immédiat

## 🔄 **Mise à Jour du Template**

Pour mettre à jour le template :

```bash
# Depuis le répertoire template-nuxt-front/
git add .
git commit -m "feat: update template with new features"
git push origin main

# Les nouveaux projets utiliseront automatiquement la version mise à jour
```

## 🎉 **Résultat Final**

Avec ce template, chaque nouveau projet aura automatiquement :

1. **🚀 Nuxt 3** avec Strapi intégré
2. **📊 Monitoring complet** (Sentry, Analytics, Uptime Robot)
3. **🌐 Déploiement automatique** sur Vercel
4. **📱 PWA** et optimisation mobile
5. **🔧 Scripts automatisés** pour tout configurer
6. **📚 Documentation complète** pour chaque aspect

**Prêt à créer des projets professionnels en quelques minutes ?** 🚀
