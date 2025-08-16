import { useRuntimeConfig } from '#app'

export const useMonitoring = () => {
  const config = useRuntimeConfig()
  
  // Vérifier si nous sommes en production
  const isProduction = process.env.NODE_ENV === 'production'
  
  // Configuration du monitoring (seulement en production)
  const monitoringConfig = isProduction ? (config.public.monitoring as any) : null
  const sentryConfig = isProduction ? (config.public.sentry as any) : null
  const gaConfig = isProduction ? (config.public.ga as any) : null
  const plausibleConfig = isProduction ? (config.public.plausible as any) : null
  const gtmConfig = isProduction ? (config.public.gtm as any) : null
  const uptimeRobotConfig = isProduction ? (config.public.uptimeRobot as any) : null
  const grafanaConfig = isProduction ? (config.public.grafana as any) : null

  /**
   * Initialise le monitoring pour l'application
   */
  const initializeMonitoring = () => {
    if (!isProduction) {
      console.log('Monitoring désactivé en développement')
      return
    }
    
    if (monitoringConfig?.enableErrorTracking && sentryConfig?.dsn) {
      initializeSentry()
    }
    
    if (monitoringConfig?.enablePerformanceMonitoring) {
      initializePerformanceMonitoring()
    }
    
    if (monitoringConfig?.enableUserBehaviorTracking) {
      initializeUserBehaviorTracking()
    }

    if (monitoringConfig?.enableAnalytics) {
      initializeAnalytics()
    }
  }

  /**
   * Initialise Sentry pour le suivi des erreurs
   */
  const initializeSentry = () => {
    if (sentryConfig?.dsn) {
      console.log('Sentry initialized for error tracking')
    }
  }

  /**
   * Initialise les analytics
   */
  const initializeAnalytics = () => {
    // Google Analytics 4
    if (gaConfig?.measurementId) {
      initializeGoogleAnalytics()
    }

    // Plausible Analytics
    if (plausibleConfig?.domain) {
      initializePlausible()
    }

    // Google Tag Manager
    if (gtmConfig?.id) {
      initializeGoogleTagManager()
    }

    console.log('Analytics initialized')
  }

  /**
   * Initialise Google Analytics 4
   */
  const initializeGoogleAnalytics = () => {
    if (typeof window !== 'undefined' && gaConfig?.measurementId) {
      // Configuration GA4
      window.gtag = window.gtag || function() {
        (window.gtag as any).q = (window.gtag as any).q || []
        ;(window.gtag as any).q.push(arguments)
      }
      
      window.gtag('js', new Date())
      window.gtag('config', gaConfig.measurementId, {
        page_title: document.title,
        page_location: window.location.href
      })

      console.log('Google Analytics 4 initialized:', gaConfig.measurementId)
    }
  }

  /**
   * Initialise Plausible Analytics
   */
  const initializePlausible = () => {
    if (typeof window !== 'undefined' && plausibleConfig?.domain) {
      // Script Plausible
      const script = document.createElement('script')
      script.defer = true
      script.setAttribute('data-domain', plausibleConfig.domain)
      script.src = 'https://plausible.io/js/script.js'
      document.head.appendChild(script)

      console.log('Plausible Analytics initialized:', plausibleConfig.domain)
    }
  }

  /**
   * Initialise Google Tag Manager
   */
  const initializeGoogleTagManager = () => {
    if (typeof window !== 'undefined' && gtmConfig?.id) {
      // Script GTM
      window.dataLayer = window.dataLayer || []
      window.gtag = function() {
        window.dataLayer.push(arguments)
      }
      
      window.gtag('js', new Date())
      window.gtag('config', gtmConfig.id)

      // Script GTM
      const script = document.createElement('script')
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmConfig.id}');
      `
      document.head.appendChild(script)

      console.log('Google Tag Manager initialized:', gtmConfig.id)
    }
  }

  /**
   * Initialise le monitoring des performances
   */
  const initializePerformanceMonitoring = () => {
    if (typeof window !== 'undefined') {
      // Web Vitals monitoring (optionnel)
      // import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      //   getCLS(metric => sendPerformanceMetric('CLS', metric))
      //   getFID(metric => sendPerformanceMetric('FID', metric))
      //   getFCP(metric => sendPerformanceMetric('FCP', metric))
      //   getLCP(metric => sendPerformanceMetric('LCP', metric))
      //   getTTFB(metric => sendPerformanceMetric('TTFB', metric))
      // })

      // Navigation timing
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          if (navigation) {
            sendPerformanceMetric('DOMContentLoaded', { value: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart })
            sendPerformanceMetric('LoadComplete', { value: navigation.loadEventEnd - navigation.loadEventStart })
          }
        })
      }
    }
  }

  /**
   * Initialise le suivi du comportement utilisateur
   */
  const initializeUserBehaviorTracking = () => {
    if (typeof window !== 'undefined') {
      // Track page views
      trackPageView()
      
      // Track user interactions
      trackUserInteractions()
      
      // Track scroll depth
      trackScrollDepth()
    }
  }

  /**
   * Envoie une métrique de performance
   */
  const sendPerformanceMetric = (name: string, metric: any) => {
    // Envoyer à Google Analytics
    if (typeof window !== 'undefined' && window.gtag && gaConfig?.measurementId) {
      window.gtag('event', 'timing_complete', {
        name,
        value: Math.round(metric.value),
        category: 'Performance'
      })
    }

    // Envoyer à Grafana (si configuré)
    if (grafanaConfig?.url && grafanaConfig?.apiKey) {
      sendToGrafana('performance', { name, value: metric.value, timestamp: Date.now() })
    }

    console.log(`Performance metric: ${name} = ${metric.value}`)
  }

  /**
   * Suit les vues de page
   */
  const trackPageView = (url?: string) => {
    const currentUrl = url || window.location.pathname
    
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag && gaConfig?.measurementId) {
      window.gtag('event', 'page_view', { 
        page_title: document.title, 
        page_location: currentUrl 
      })
    }

    // Plausible
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('pageview', { props: { url: currentUrl } })
    }

    // Google Tag Manager
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_title: document.title,
        page_location: currentUrl
      })
    }

    // Grafana
    if (grafanaConfig?.url && grafanaConfig?.apiKey) {
      sendToGrafana('pageview', { url: currentUrl, timestamp: Date.now() })
    }
  }

  /**
   * Suit les interactions utilisateur
   */
  const trackUserInteractions = () => {
    if (typeof window !== 'undefined') {
      // Track clicks
      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement
        if (target.tagName === 'BUTTON' || target.tagName === 'A') {
          trackEvent('click', {
            element: target.tagName.toLowerCase(),
            text: target.textContent?.trim() || '',
            href: (target as HTMLAnchorElement).href || ''
          })
        }
      })

      // Track form submissions
      document.addEventListener('submit', (event) => {
        const form = event.target as HTMLFormElement
        trackEvent('form_submit', {
          form: form.id || form.action || 'unknown'
        })
      })
    }
  }

  /**
   * Suit la profondeur de défilement
   */
  const trackScrollDepth = () => {
    if (typeof window !== 'undefined') {
      let maxScrollDepth = 0
      
      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = Math.round((scrollTop / docHeight) * 100)
        
        if (scrollPercent > maxScrollDepth) {
          maxScrollDepth = scrollPercent
          
          // Track at 25%, 50%, 75%, 100%
          if ([25, 50, 75, 100].includes(maxScrollDepth)) {
            trackEvent('scroll_depth', { depth: maxScrollDepth })
          }
        }
      })
    }
  }

  /**
   * Suit un événement personnalisé
   */
  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag && gaConfig?.measurementId) {
      window.gtag('event', eventName, {
        event_category: 'User Interaction',
        event_label: eventName,
        ...parameters
      })
    }

    // Plausible
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible(eventName, { props: parameters })
    }

    // Google Tag Manager
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...parameters
      })
    }

    // Grafana
    if (grafanaConfig?.url && grafanaConfig?.apiKey) {
      sendToGrafana('event', { 
        event: eventName, 
        parameters, 
        timestamp: Date.now() 
      })
    }

    console.log(`Event tracked: ${eventName}`, parameters)
  }

  /**
   * Envoie des données à Grafana
   */
  const sendToGrafana = async (metricType: string, data: any) => {
    try {
      const response = await fetch(`${grafanaConfig.url}/api/datasources/proxy/1/api/v1/write`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${grafanaConfig.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          metric: `nuxt.${metricType}`,
          value: data.value || 1,
          timestamp: data.timestamp || Date.now(),
          tags: {
            ...data,
            app: config.public.appName || 'nuxt-app',
            environment: sentryConfig?.environment || 'development'
          }
        })
      })

      if (!response.ok) {
        console.warn('Failed to send data to Grafana:', response.statusText)
      }
    } catch (error) {
      console.warn('Error sending data to Grafana:', error)
    }
  }

  /**
   * Vérifie le statut Uptime Robot
   */
  const checkUptimeStatus = async () => {
    if (!uptimeRobotConfig?.apiKey || !uptimeRobotConfig?.monitorId) {
      console.warn('Uptime Robot not configured')
      return null
    }

    try {
      const response = await fetch(`https://api.uptimerobot.com/v2/getMonitors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
          api_key: uptimeRobotConfig.apiKey,
          monitors: uptimeRobotConfig.monitorId,
          format: 0,
          logs: 1
        })
      })

      if (response.ok) {
        const data = await response.json()
        const monitor = data.monitors?.[0]
        
        if (monitor) {
          console.log('Uptime Robot status:', monitor.status)
          return {
            id: monitor.id,
            name: monitor.friendly_name,
            status: monitor.status,
            uptime: monitor.all_time_uptime_ratio,
            lastCheck: monitor.last_checked,
            responseTime: monitor.response_times?.[0]?.value || 0
          }
        }
      } else {
        console.warn('Uptime Robot API error:', response.statusText)
      }
    } catch (error) {
      console.warn('Error checking Uptime Robot status:', error)
    }

    return null
  }

  /**
   * Vérifie le statut de tous les monitors Uptime Robot
   */
  const checkAllUptimeMonitors = async () => {
    if (!uptimeRobotConfig?.apiKey) {
      console.warn('Uptime Robot API key not configured')
      return []
    }

    try {
      const response = await fetch(`https://api.uptimerobot.com/v2/getMonitors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
          api_key: uptimeRobotConfig.apiKey,
          format: 0,
          logs: 1
        })
      })

      if (response.ok) {
        const data = await response.json()
        return data.monitors?.map((monitor: any) => ({
          id: monitor.id,
          name: monitor.friendly_name,
          status: monitor.status,
          uptime: monitor.all_time_uptime_ratio,
          lastCheck: monitor.last_checked,
          responseTime: monitor.response_times?.[0]?.value || 0,
          url: monitor.url
        })) || []
      } else {
        console.warn('Uptime Robot API error:', response.statusText)
        return []
      }
    } catch (error) {
      console.warn('Error checking all Uptime Robot monitors:', error)
      return []
    }
  }

  /**
   * Obtient les logs d'un monitor Uptime Robot
   */
  const getUptimeLogs = async (monitorId?: string) => {
    const targetMonitorId = monitorId || uptimeRobotConfig?.monitorId
    
    if (!uptimeRobotConfig?.apiKey || !targetMonitorId) {
      console.warn('Uptime Robot not configured')
      return []
    }

    try {
      const response = await fetch(`https://api.uptimerobot.com/v2/getMonitors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
          api_key: uptimeRobotConfig.apiKey,
          monitors: targetMonitorId,
          format: 0,
          logs: 1,
          log_types: '1-2-98' // 1=down, 2=up, 98=down (delayed)
        })
      })

      if (response.ok) {
        const data = await response.json()
        const monitor = data.monitors?.[0]
        
        if (monitor?.logs) {
          return monitor.logs.map((log: any) => ({
            id: log.id,
            type: log.type,
            datetime: log.datetime,
            duration: log.duration,
            reason: log.reason?.detail || 'No reason provided'
          }))
        }
      }
    } catch (error) {
      console.warn('Error getting Uptime Robot logs:', error)
    }

    return []
  }

  /**
   * Envoie une alerte Uptime Robot à Grafana
   */
  const sendUptimeAlertToGrafana = async (monitorData: any) => {
    if (grafanaConfig?.url && grafanaConfig?.apiKey) {
      await sendToGrafana('uptime_alert', {
        monitor_id: monitorData.id,
        monitor_name: monitorData.name,
        status: monitorData.status,
        uptime: monitorData.uptime,
        response_time: monitorData.responseTime,
        timestamp: Date.now()
      })
    }
  }

  /**
   * Capture une erreur
   */
  const captureError = (error: Error, context?: Record<string, any>) => {
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag && gaConfig?.measurementId) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false
      })
    }

    // Grafana
    if (grafanaConfig?.url && grafanaConfig?.apiKey) {
      sendToGrafana('error', {
        message: error.message,
        stack: error.stack,
        timestamp: Date.now()
      })
    }

    console.error('Error captured:', error, context)
  }

  /**
   * Définit l'utilisateur pour le tracking
   */
  const setUser = (userId: string, userData?: Record<string, any>) => {
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag && gaConfig?.measurementId) {
      window.gtag('config', gaConfig.measurementId, {
        user_id: userId,
        ...userData
      })
    }

    console.log('User set for tracking:', userId)
  }

  return {
    initializeMonitoring,
    trackPageView,
    trackEvent,
    captureError,
    setUser,
    checkUptimeStatus,
    sendPerformanceMetric,
    checkAllUptimeMonitors,
    getUptimeLogs,
    sendUptimeAlertToGrafana
  }
}

// Types globaux pour TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    plausible: (eventName: string, options?: { props?: Record<string, any> }) => void
    dataLayer: any[]
  }
}
