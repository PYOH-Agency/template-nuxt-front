# 🚀 Guide de Configuration du Monitoring

Ce template inclut un système de monitoring complet avec Sentry, Google Analytics, Uptime Robot et Grafana.

## 📋 Prérequis

- Node.js 18+ et npm/yarn
- Compte Sentry (gratuit)
- Compte Google Analytics 4
- Compte Uptime Robot (gratuit)
- Instance Grafana (locale ou cloud)

## 🔧 Installation et Configuration

### 1. **Installation des dépendances**

```bash
npm install
```

### 2. **Configuration Sentry (Automatique)**

Exécutez le wizard Sentry dans votre projet :

```bash
npx @sentry/wizard@latest -i nuxt --saas --org pyoh --project votre-projet
```

Le wizard va :
- Installer le SDK Sentry
- Configurer les fichiers `sentry.client.config.ts` et `sentry.server.config.ts`
- Créer la configuration Nuxt

### 3. **Configuration des variables d'environnement**

Copiez `env.example` vers `.env` et configurez :

```bash
# Sentry
NUXT_PUBLIC_SENTRY_DSN=https://votre-dsn@sentry.io/project-id
NUXT_PUBLIC_SENTRY_ENVIRONMENT=production
NUXT_PUBLIC_SENTRY_RELEASE=1.0.0

# Google Analytics
NUXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Uptime Robot
NUXT_PUBLIC_UPTIME_ROBOT_API_KEY=votre_api_key
NUXT_PUBLIC_UPTIME_ROBOT_MONITOR_ID=votre_monitor_id

# Grafana
NUXT_PUBLIC_GRAFANA_URL=http://localhost:3000
NUXT_PUBLIC_GRAFANA_API_KEY=votre_api_key
```

### 4. **Test de l'intégration**

Lancez votre application et visitez `/sentry-test` pour tester :

```bash
npm run dev
```

Puis allez sur `http://localhost:3000/sentry-test`

## 🎯 Fonctionnalités du Monitoring

### **Sentry - Suivi des Erreurs**
- ✅ Capture automatique des erreurs JavaScript
- ✅ Monitoring des performances (Web Vitals)
- ✅ Session replay pour reproduire les bugs
- ✅ Breadcrumbs pour tracer les actions utilisateur
- ✅ Intégration native avec Nuxt 3

### **Google Analytics 4 - Analytics**
- ✅ Suivi automatique des pages vues
- ✅ Suivi des événements utilisateur
- ✅ Suivi de la profondeur de défilement
- ✅ Suivi des performances
- ✅ Suivi des exceptions

### **Uptime Robot - Disponibilité**
- ✅ Vérification de la disponibilité du site
- ✅ Alertes automatiques en cas de problème
- ✅ Intégration avec le dashboard de monitoring

### **Grafana - Visualisation**
- ✅ Dashboard centralisé de toutes les métriques
- ✅ Visualisation des performances
- ✅ Suivi des erreurs en temps réel
- ✅ Alertes personnalisables

## 📊 Utilisation dans votre Code

### **Composable de Monitoring**

```typescript
// Dans vos composants
const { 
  initializeMonitoring, 
  trackEvent, 
  captureError, 
  setUser 
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
try {
  // Votre code
} catch (error) {
  captureError(error, { context: 'user_action' })
}

// Définir l'utilisateur
setUser('user123', { 
  email: 'user@example.com',
  plan: 'premium' 
})
```

### **Interception Globale des Erreurs**

```typescript
// Dans app.vue
const { captureError } = useMonitoring()

// Intercepter les erreurs globales
onErrorCaptured((error, instance, info) => {
  captureError(error, { 
    component: instance?.$options.name,
    info 
  })
})
```

## 🧪 Tests et Vérification

### **Page de Test Sentry**
- Route : `/sentry-test`
- Fonctionnalités :
  - Test des erreurs
  - Test des performances
  - Vérification de la configuration
  - Logs en temps réel

### **Vérification Sentry**
1. Cliquez sur "Trigger Test Error"
2. Vérifiez que l'erreur apparaît dans votre dashboard Sentry
3. Vérifiez les breadcrumbs et le contexte

### **Vérification Google Analytics**
1. Ouvrez les DevTools
2. Allez dans l'onglet Network
3. Vérifiez les requêtes vers Google Analytics

## 📈 Dashboard Grafana

### **Métriques Collectées**
- **Performance** : Web Vitals, temps de chargement
- **Erreurs** : Fréquence, types, pages affectées
- **Utilisateurs** : Comportement, interactions
- **Disponibilité** : Statut Uptime Robot
- **Navigation** : Pages vues, parcours utilisateur

### **Panels Recommandés**
1. **Vue d'ensemble** : Métriques clés, statut des services
2. **Performance** : Web Vitals, temps de réponse
3. **Erreurs** : Fréquence, types, tendances
4. **Utilisateurs** : Sessions, pages populaires
5. **Disponibilité** : Uptime, temps de réponse

## 🔍 Dépannage

### **Sentry ne fonctionne pas**
- Vérifiez que le DSN est correct
- Vérifiez que les fichiers de config Sentry sont présents
- Vérifiez la console pour les erreurs

### **Google Analytics ne fonctionne pas**
- Vérifiez l'ID de mesure
- Vérifiez que le module est installé
- Vérifiez les DevTools pour les requêtes

### **Grafana ne reçoit pas de données**
- Vérifiez l'URL et l'API key
- Vérifiez que InfluxDB est configuré
- Vérifiez les logs de Grafana

## 📚 Ressources Utiles

- [Documentation Sentry Nuxt](https://docs.sentry.io/platforms/javascript/guides/nuxt/)
- [Documentation Google Analytics 4](https://developers.google.com/analytics/devguides/collection/ga4)
- [Documentation Uptime Robot API](https://uptimerobot.com/api)
- [Documentation Grafana](https://grafana.com/docs/)

## 🚀 Déploiement

### **Variables d'environnement de production**
```bash
NUXT_PUBLIC_SENTRY_ENVIRONMENT=production
NUXT_PUBLIC_SENTRY_RELEASE=1.0.0
NUXT_PUBLIC_GA_DEBUG_MODE=false
```

### **Build et déploiement**
```bash
npm run build
npm run preview
```

Le monitoring est maintenant prêt pour la production ! 🎉
