#!/bin/bash

# 🚀 Script de Déploiement Automatique - Template Nuxt Front
# Ce script automatise le processus de déploiement vers GitHub et Vercel

set -e  # Arrêter en cas d'erreur

echo "🚀 Déploiement de votre projet Nuxt"
echo "===================================="

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction pour afficher les messages
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Vérifier que nous sommes dans le bon répertoire
if [[ ! -f "nuxt.config.ts" ]]; then
    print_error "Ce script doit être exécuté depuis le répertoire racine du projet Nuxt"
    exit 1
fi

# Étape 1: Vérification du projet
print_status "Étape 1: Vérification du projet..."

# Vérifier que Node.js est installé
if ! command -v node &> /dev/null; then
    print_error "Node.js n'est pas installé"
    exit 1
fi

# Vérifier que npm est installé
if ! command -v npm &> /dev/null; then
    print_error "npm n'est pas installé"
    exit 1
fi

print_success "Node.js et npm sont installés"

# Étape 2: Installation des dépendances
print_status "Étape 2: Installation des dépendances..."
npm install
print_success "Dépendances installées"

# Étape 3: Test du build
print_status "Étape 3: Test du build..."
npm run build
print_success "Build réussi"

# Étape 4: Vérification Git
print_status "Étape 4: Vérification Git..."

# Vérifier que nous sommes dans un repository Git
if [[ ! -d ".git" ]]; then
    print_error "Ce répertoire n'est pas un repository Git"
    exit 1
fi

# Vérifier le statut Git
git_status=$(git status --porcelain)
if [[ -n "$git_status" ]]; then
    print_warning "Il y a des modifications non commitées:"
    echo "$git_status"
    
    read -p "Voulez-vous les commiter avant le déploiement ? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_status "Commit des modifications..."
        git add .
        git commit -m "feat: prepare for deployment - $(date)"
        print_success "Modifications commitées"
    else
        print_warning "Modifications non commitées - le déploiement peut échouer"
    fi
fi

# Étape 5: Push vers GitHub
print_status "Étape 5: Push vers GitHub..."

# Vérifier l'origine
if ! git remote get-url origin &> /dev/null; then
    print_error "Aucune origine Git configurée"
    print_status "Configuration de l'origine..."
    
    read -p "Entrez l'URL de votre repository GitHub: " github_url
    if [[ -n "$github_url" ]]; then
        git remote add origin "$github_url"
        print_success "Origine configurée: $github_url"
    else
        print_error "URL GitHub requise pour continuer"
        exit 1
    fi
fi

# Push vers GitHub
print_status "Push vers GitHub..."
if git push -u origin master; then
    print_success "Code poussé vers GitHub"
else
    print_error "Échec du push vers GitHub"
    print_status "Vérifiez vos permissions et votre connexion"
    exit 1
fi

# Étape 6: Configuration Vercel
print_status "Étape 6: Configuration Vercel..."

# Vérifier si Vercel CLI est installé
if ! command -v vercel &> /dev/null; then
    print_warning "Vercel CLI n'est pas installé"
    print_status "Installation de Vercel CLI..."
    npm install -g vercel
    print_success "Vercel CLI installé"
fi

# Vérifier si le projet est déjà configuré pour Vercel
if [[ -f ".vercel/project.json" ]]; then
    print_status "Projet Vercel déjà configuré"
    
    read -p "Voulez-vous redéployer ? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_status "Redéploiement..."
        vercel --prod
    else
        print_status "Déploiement annulé"
        exit 0
    fi
else
    print_status "Configuration initiale de Vercel..."
    print_warning "Suivez les instructions à l'écran pour configurer Vercel"
    print_status "Assurez-vous de:"
    echo "  - Connecter votre compte GitHub"
    echo "  - Sélectionner le repository: votre-projet-nom"
    echo "  - Framework: Nuxt.js"
    echo "  - Build Command: npm run build"
    echo "  - Output Directory: .output"
    
    vercel
fi

# Étape 7: Vérification finale
print_status "Étape 7: Vérification finale..."

if [[ -f ".vercel/project.json" ]]; then
    project_url=$(grep -o '"url":"[^"]*"' .vercel/project.json | cut -d'"' -f4)
    if [[ -n "$project_url" ]]; then
        print_success "🎉 Déploiement réussi !"
        echo ""
        echo "🌐 Votre site est accessible sur: $project_url"
        echo ""
        echo "📊 Prochaines étapes:"
        echo "  1. Configurez vos variables d'environnement dans Vercel"
        echo "  2. Testez votre site en ligne"
        echo "  3. Configurez un domaine personnalisé si nécessaire"
        echo "  4. Activez le monitoring (Sentry, Analytics, Uptime Robot)"
        echo ""
        echo "📚 Documentation:"
        echo "  - DEPLOYMENT.md - Guide complet de déploiement"
        echo "  - MONITORING.md - Guide du monitoring"
    else
        print_warning "Déploiement terminé mais URL non trouvée"
    fi
else
    print_error "Configuration Vercel non trouvée"
    print_status "Vérifiez que Vercel a été configuré correctement"
fi

print_success "Script de déploiement terminé !"
