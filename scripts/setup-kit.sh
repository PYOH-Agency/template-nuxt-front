#!/bin/bash

# 🚀 Script de Configuration du Kit - Template Nuxt Front
# Ce script configure automatiquement le kit de composants

set -e  # Arrêter en cas d'erreur

echo "🚀 Configuration du Kit de Composants"
echo "====================================="

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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
if [[ ! -f "package.json" ]]; then
    print_error "Ce script doit être exécuté depuis le répertoire racine du projet Nuxt"
    exit 1
fi

# Vérifier Node.js et npm
if ! command -v node &> /dev/null; then
    print_error "Node.js n'est pas installé"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    print_error "npm n'est pas installé"
    exit 1
fi

print_success "Node.js et npm sont installés"

# Vérifier si le kit est déjà installé
if npm list @pbugeon/nuxt-components-kit &> /dev/null; then
    print_success "✅ Le kit @pbugeon/nuxt-components-kit est déjà installé"
    print_status "Version installée: $(npm list @pbugeon/nuxt-components-kit --depth=0 | grep @pbugeon/nuxt-components-kit)"
else
    print_status "Installation du kit @pbugeon/nuxt-components-kit..."
    npm install @pbugeon/nuxt-components-kit@latest
    
    if [ $? -eq 0 ]; then
        print_success "✅ Kit installé avec succès !"
    else
        print_error "❌ Échec de l'installation du kit"
        exit 1
    fi
fi

# Vérifier la configuration Nuxt
print_status "Vérification de la configuration Nuxt..."
if grep -q "@pbugeon/nuxt-components-kit/components" nuxt.config.ts; then
    print_success "✅ Configuration Nuxt correcte"
else
    print_warning "⚠️  Configuration Nuxt manquante pour le kit"
    print_status "Ajout de la configuration..."
    
    # Sauvegarder la configuration actuelle
    cp nuxt.config.ts nuxt.config.ts.backup
    
    # Ajouter la configuration du kit
    sed -i '' 's|~/components|~/components,\n      "~/node_modules/@pbugeon/nuxt-components-kit/components"|' nuxt.config.ts
    
    print_success "✅ Configuration Nuxt mise à jour"
fi

# Vérifier que les composants sont accessibles
print_status "Test d'accès aux composants du kit..."
if [ -d "node_modules/@pbugeon/nuxt-components-kit/components" ]; then
    print_success "✅ Répertoire des composants accessible"
    
    # Lister les composants disponibles
    print_status "Composants disponibles:"
    find node_modules/@pbugeon/nuxt-components-kit/components -name "*.vue" | sed 's|.*/||' | sed 's|\.vue||' | while read component; do
        echo "  - $component"
    done
else
    print_error "❌ Répertoire des composants non accessible"
    exit 1
fi

print_success "🎉 Configuration du kit terminée avec succès !"
echo ""
echo "📋 Récapitulatif:"
echo "  - Kit installé: @pbugeon/nuxt-components-kit"
echo "  - Composants auto-importés avec le préfixe 'Kit'"
echo "  - Configuration Nuxt mise à jour"
echo ""
echo "🚀 Vous pouvez maintenant utiliser les composants du kit dans votre projet !"
echo "   Exemple: <KitAppButton> ou <KitAppCard>"

