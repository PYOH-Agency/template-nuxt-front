/**
 * Composable pour intégrer facilement Strapi dans Nuxt 3
 */

export const useStrapiApi = () => {
  const config = useRuntimeConfig()
  const strapiUrl = config.public.strapiUrl
  const strapiToken = config.public.strapiToken

  // Configuration de base pour les requêtes
  const defaultOptions = {
    baseURL: strapiUrl,
    headers: {
      'Authorization': strapiToken ? `Bearer ${strapiToken}` : undefined,
      'Content-Type': 'application/json'
    }
  }

  /**
   * Récupère une collection Strapi
   */
  const getCollection = async (collection: string, params?: Record<string, any>) => {
    const query = params ? `?${new URLSearchParams(params).toString()}` : ''
    
    return await $fetch(`/api/${collection}${query}`, {
      ...defaultOptions,
      server: false
    })
  }

  /**
   * Récupère un élément spécifique d'une collection
   */
  const getItem = async (collection: string, id: string | number, params?: Record<string, any>) => {
    const query = params ? `?${new URLSearchParams(params).toString()}` : ''
    
    return await $fetch(`/api/${collection}/${id}${query}`, {
      ...defaultOptions,
      server: false
    })
  }

  /**
   * Crée un nouvel élément dans une collection
   */
  const createItem = async (collection: string, data: Record<string, any>) => {
    return await $fetch(`/api/${collection}`, {
      ...defaultOptions,
      method: 'POST',
      body: { data },
      server: false
    })
  }

  /**
   * Met à jour un élément existant
   */
  const updateItem = async (collection: string, id: string | number, data: Record<string, any>) => {
    return await $fetch(`/api/${collection}/${id}`, {
      ...defaultOptions,
      method: 'PUT',
      body: { data },
      server: false
    })
  }

  /**
   * Supprime un élément
   */
  const deleteItem = async (collection: string, id: string | number) => {
    return await $fetch(`/api/${collection}/${id}`, {
      ...defaultOptions,
      method: 'DELETE',
      server: false
    })
  }

  /**
   * Upload un fichier vers Strapi
   */
  const uploadFile = async (file: File) => {
    const formData = new FormData()
    formData.append('files', file)

    return await $fetch('/api/upload', {
      baseURL: strapiUrl,
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': strapiToken ? `Bearer ${strapiToken}` : undefined
      },
      server: false
    })
  }

  /**
   * Récupère les content types disponibles
   */
  const getContentTypes = async () => {
    return await $fetch('/api/content-types', {
      ...defaultOptions,
      server: false
    })
  }

  /**
   * Test de santé de l'API
   */
  const healthCheck = async () => {
    try {
      const response = await $fetch('/', {
        baseURL: strapiUrl,
        server: false
      })
      return true
    } catch (error) {
      // Si l'URL Strapi répond (même avec erreur), c'est que l'API fonctionne
      // On vérifie si c'est bien une réponse de Strapi
      if (error?.response?.status === 404 || 
          error?.response?.status === 302 || 
          error?.data?.error?.name === 'NotFoundError' ||
          strapiUrl.includes('strapiapp.com')) {
        return true
      }
      return false
    }
  }

  return {
    // Méthodes CRUD
    getCollection,
    getItem,
    createItem,
    updateItem,
    deleteItem,
    
    // Utilitaires
    uploadFile,
    getContentTypes,
    healthCheck,
    
    // Configuration
    strapiUrl,
    strapiToken
  }
}

/**
 * Composable pour l'authentification Strapi
 */
export const useStrapiAuth = () => {
  const { $strapi } = useNuxtApp()
  
  // État de l'utilisateur
  const user = computed(() => $strapi?.user?.value || null)
  const isAuthenticated = computed(() => !!user.value)
  
  /**
   * Connexion utilisateur
   */
  const login = async (identifier: string, password: string) => {
    try {
      const response = await $strapi.login({ identifier, password })
      return response
    } catch (error) {
      throw error
    }
  }

  /**
   * Inscription utilisateur
   */
  const register = async (username: string, email: string, password: string) => {
    try {
      const response = await $strapi.register({ username, email, password })
      return response
    } catch (error) {
      throw error
    }
  }

  /**
   * Déconnexion utilisateur
   */
  const logout = async () => {
    await $strapi.logout()
  }

  /**
   * Récupère le profil utilisateur
   */
  const fetchUser = async () => {
    try {
      await $strapi.fetchUser()
    } catch (error) {
      console.error('Erreur lors de la récupération du profil:', error)
    }
  }

  /**
   * Mot de passe oublié
   */
  const forgotPassword = async (email: string) => {
    try {
      const response = await $strapi.forgotPassword({ email })
      return response
    } catch (error) {
      throw error
    }
  }

  /**
   * Réinitialiser le mot de passe
   */
  const resetPassword = async (code: string, password: string, passwordConfirmation: string) => {
    try {
      const response = await $strapi.resetPassword({ code, password, passwordConfirmation })
      return response
    } catch (error) {
      throw error
    }
  }

  return {
    // État
    user,
    isAuthenticated,
    
    // Méthodes
    login,
    register,
    logout,
    fetchUser,
    forgotPassword,
    resetPassword
  }
}
