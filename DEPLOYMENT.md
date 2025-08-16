# 🚀 Guide de Déploiement - Template Nuxt Front

Ce guide vous explique comment déployer votre projet Nuxt en production avec GitHub et Vercel.

## 🎯 **Options de Déploiement**

### **Option 1 : Vercel (Recommandé)**
- ✅ **Gratuit** pour les projets personnels
- ✅ **Déploiement automatique** depuis GitHub
- ✅ **Performance optimisée** avec CDN global
- ✅ **SSL automatique** et domaines personnalisés
- ✅ **Intégration parfaite** avec Nuxt 3

### **Option 2 : Netlify**
- ✅ **Gratuit** avec limitations
- ✅ **Déploiement automatique** depuis GitHub
- ✅ **Formulaires** intégrés
- ✅ **Fonctions serverless**

### **Option 3 : GitHub Pages**
- ✅ **Gratuit** et intégré à GitHub
- ⚠️ **Limitations** pour les applications Nuxt
- ⚠️ **Pas de SSR** par défaut

## 🔧 **Déploiement avec Vercel**

### **Étape 1 : Préparer le Projet**

1. **Vérifiez la configuration** :
   ```bash
   # Vérifier que tout fonctionne en local
   npm run build
   npm run preview
   ```

2. **Fichiers de configuration** :
   - ✅ `vercel.json` - Configuration Vercel
   - ✅ `env.example` - Variables d'environnement
   - ✅ `nuxt.config.ts` - Configuration Nuxt

### **Étape 2 : Créer le Repository GitHub**

1. **Allez sur** [github.com](https://github.com)
2. **Cliquez sur** "New repository"
3. **Nom** : `votre-projet-nom`
4. **Description** : Description de votre projet
5. **Public** ou **Private** selon vos préférences
6. **Cliquez sur** "Create repository"

### **Étape 3 : Pousser le Code vers GitHub**

```bash
# Vérifier le statut Git
git status

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "feat: initial commit - [Nom du Projet]"

# Ajouter l'origine GitHub (remplacez par votre URL)
git remote add origin https://github.com/votre-username/votre-projet-nom.git

# Pousser vers GitHub
git push -u origin main
```

### **Étape 4 : Configurer Vercel**

1. **Allez sur** [vercel.com](https://vercel.com)
2. **Cliquez sur** "Sign Up" avec GitHub
3. **Cliquez sur** "New Project"
4. **Importez** votre repository GitHub
5. **Configurez** le projet :
   - **Framework Preset** : Nuxt.js
   - **Root Directory** : `./` (par défaut)
   - **Build Command** : `npm run build`
   - **Output Directory** : `.output`
   - **Install Command** : `npm install`

### **Étape 5 : Variables d'Environnement Vercel**

Dans Vercel, allez dans **Settings** → **Environment Variables** et ajoutez :

```bash
# Strapi
NUXT_PUBLIC_STRAPI_URL=https://votre-strapi-url.com
NUXT_PUBLIC_STRAPI_TOKEN=votre_token_strapi

# Sentry
NUXT_PUBLIC_SENTRY_DSN=votre_sentry_dsn
NUXT_PUBLIC_SENTRY_ENVIRONMENT=production

# Analytics (remplacez par vos vrais IDs)
NUXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NUXT_PUBLIC_PLAUSIBLE_DOMAIN=votre-domaine.com
NUXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Uptime Robot
NUXT_PUBLIC_UPTIME_ROBOT_API_KEY=votre_api_key
NUXT_PUBLIC_UPTIME_ROBOT_MONITOR_ID=votre_monitor_id
```

### **Étape 6 : Déployer**

1. **Cliquez sur** "Deploy"
2. **Attendez** la fin du build
3. **Vérifiez** que le déploiement réussit
4. **Testez** votre site en ligne

## 🌐 **Configuration du Domaine**

### **Domaine Vercel Gratuit :**
- **Format** : `votre-projet-nom.vercel.app`
- **SSL** : Automatique
- **CDN** : Global

### **Domaine Personnalisé :**
1. **Dans Vercel** : Settings → Domains
2. **Ajoutez** votre domaine
3. **Configurez** les DNS selon les instructions Vercel
4. **Attendez** la propagation DNS (24-48h)

## 📱 **Configuration Mobile et PWA**

### **Manifest PWA :**
Le projet est déjà configuré avec :
- ✅ **Service Worker** pour le cache offline
- ✅ **Manifest** pour l'installation mobile
- ✅ **Meta tags** pour iOS et Android

### **Test Mobile :**
1. **Ouvrez** votre site sur mobile
2. **Vérifiez** la responsivité
3. **Testez** l'installation PWA

## 🔍 **Vérification Post-Déploiement**

### **Tests à Effectuer :**

1. **Page d'accueil** : Chargement et contenu
2. **Navigation** : Toutes les pages accessibles
3. **Formulaires** : Envoi des données
4. **Monitoring** : Sentry, Analytics, Uptime Robot
5. **Performance** : Core Web Vitals
6. **Mobile** : Responsivité et PWA

### **Outils de Vérification :**

- **Lighthouse** : Performance et PWA
- **PageSpeed Insights** : Google
- **GTmetrix** : Performance détaillée
- **Browser DevTools** : Console et Network

## 🚀 **Déploiement Automatique**

### **Configuration GitHub Actions (Optionnel) :**

Créez `.github/workflows/deploy.yml` :

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🔧 **Résolution de Problèmes**

### **Erreurs Courantes :**

#### **1. Build Failed :**
```bash
# Vérifiez les erreurs dans Vercel
# Testez en local d'abord
npm run build
```

#### **2. Variables d'environnement manquantes :**
```bash
# Vérifiez dans Vercel Settings → Environment Variables
# Assurez-vous que NODE_ENV=production
```

#### **3. Erreurs Strapi :**
```bash
# Vérifiez l'URL Strapi en production
# Testez l'API Strapi directement
```

### **Logs de Déploiement :**
- **Vercel Dashboard** : Logs de build et runtime
- **GitHub Actions** : Logs de CI/CD
- **Console du navigateur** : Erreurs JavaScript

## 📊 **Monitoring en Production**

### **Sentry :**
- **Erreurs** en temps réel
- **Performance** des pages
- **Sessions** utilisateur

### **Analytics :**
- **Visiteurs** et comportement
- **Pages** populaires
- **Conversions** et objectifs

### **Uptime Robot :**
- **Disponibilité** 24h/24
- **Temps de réponse**
- **Alertes** automatiques

## 🎯 **Prochaines Étapes**

Après le déploiement :

1. **Configurez** vos analytics (GA4, Plausible)
2. **Testez** Uptime Robot en production
3. **Optimisez** les performances
4. **Configurez** un domaine personnalisé
5. **Mettez en place** le monitoring

## 🎉 **Félicitations !**

Votre projet Nuxt est maintenant déployé en production ! 🚀

**Besoin d'aide pour une étape spécifique du déploiement ?**
