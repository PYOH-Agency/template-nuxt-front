# Template Nuxt 3 + Strapi

Template de démarrage pour projets utilisant Nuxt 3 avec intégration Strapi.

## 🚀 Fonctionnalités

- **Nuxt 3** avec TypeScript
- **Tailwind CSS** pour le styling
- **Intégration Strapi** avec composables personnalisés
- **Authentification** prête à l'emploi
- **Pages d'exemple** et tests API
- **Structure de projet** optimisée

## 📋 Prérequis

- Node.js 18+ 
- npm/yarn/pnpm
- Instance Strapi (local ou cloud)

## 🛠 Installation

1. Clonez ce repository
```bash
git clone <votre-repo>
cd votre-projet
```

2. Installez les dépendances
```bash
npm install
```

3. Configurez les variables d'environnement
```bash
cp env.example .env
```

4. Modifiez le fichier `.env` avec vos configurations Strapi :
```env
NUXT_PUBLIC_STRAPI_URL=https://votre-strapi.com
NUXT_PUBLIC_STRAPI_TOKEN=votre_token_public
NUXT_PUBLIC_APP_NAME=Nom de votre projet
NUXT_PUBLIC_APP_DESCRIPTION=Description de votre projet
```

5. Lancez le serveur de développement
```bash
npm run dev
```

## 📁 Structure du projet

```
├── assets/
│   └── css/                 # Styles CSS/Tailwind
├── components/              # Composants Vue réutilisables
├── composables/             # Composables personnalisés
│   └── useStrapi.ts        # Intégration Strapi
├── pages/                   # Pages de l'application
│   ├── index.vue           # Page d'accueil
│   └── api-test.vue        # Test de l'API Strapi
├── app.vue                  # Layout principal
├── nuxt.config.ts          # Configuration Nuxt
└── env.example             # Variables d'environnement exemple
```

## 🔧 Configuration Strapi

### Variables d'environnement

- `NUXT_PUBLIC_STRAPI_URL` : URL de votre instance Strapi
- `NUXT_PUBLIC_STRAPI_TOKEN` : Token public Strapi (optionnel)
- `NUXT_PUBLIC_APP_NAME` : Nom de votre application
- `NUXT_PUBLIC_APP_DESCRIPTION` : Description de votre application

### Utilisation des composables

#### API Strapi

```vue
<script setup>
const { getCollection, getItem, createItem } = useStrapiApi()

// Récupérer une collection
const articles = await getCollection('articles')

// Récupérer un élément spécifique
const article = await getItem('articles', 1)

// Créer un nouvel élément
const newArticle = await createItem('articles', {
  title: 'Mon article',
  content: 'Contenu de l\'article'
})
</script>
```

#### Authentification

```vue
<script setup>
const { login, register, logout, user, isAuthenticated } = useStrapiAuth()

// Connexion
await login('email@example.com', 'password')

// Inscription
await register('username', 'email@example.com', 'password')

// Déconnexion
await logout()
</script>
```

## 📖 Pages disponibles

- **`/`** : Page d'accueil avec aperçu du projet
- **`/api-test`** : Test de connexion à l'API Strapi

## 🛠 Commandes disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Prévisualisation
npm run preview

# Génération statique
npm run generate
```

## 🎨 Personnalisation

### Tailwind CSS

Les styles sont configurés dans `assets/css/main.css`. Vous pouvez :
- Modifier les couleurs dans `tailwind.config.js`
- Ajouter des composants CSS personnalisés
- Utiliser les classes utilitaires Tailwind

### Composants

Créez vos composants dans le dossier `components/`. Ils sont automatiquement importés par Nuxt.

### Pages

Ajoutez vos pages dans le dossier `pages/`. Le routage est automatique basé sur la structure de fichiers.

## 🔗 Ressources

- [Documentation Nuxt 3](https://nuxt.com)
- [Documentation Strapi](https://strapi.io)
- [Documentation Tailwind CSS](https://tailwindcss.com)
- [Module Nuxt Strapi](https://strapi.nuxtjs.org)

## 📝 License

MIT
