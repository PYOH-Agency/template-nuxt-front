// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/strapi',
    '@pinia/nuxt',
    ...(process.env.NODE_ENV === 'production' ? ['@sentry/nuxt', '@nuxtjs/google-analytics'] : [])
  ],
  strapi: {
    url: process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  runtimeConfig: {
    public: {
      strapiUrl: process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
      strapiToken: process.env.NUXT_PUBLIC_STRAPI_TOKEN || '',
      // Monitoring Configuration (Production only)
      ...(process.env.NODE_ENV === 'production' ? {
        sentry: {
          dsn: process.env.NUXT_PUBLIC_SENTRY_DSN || '',
          environment: process.env.NUXT_PUBLIC_SENTRY_ENVIRONMENT || 'production',
          release: process.env.NUXT_PUBLIC_SENTRY_RELEASE || '1.0.0',
          tracesSampleRate: parseFloat(process.env.NUXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE || '0.1'),
          replaysSessionSampleRate: parseFloat(process.env.NUXT_PUBLIC_SENTRY_REPLAYS_SESSION_SAMPLE_RATE || '0.1'),
          replaysOnErrorSampleRate: parseFloat(process.env.NUXT_PUBLIC_SENTRY_REPLAYS_ON_ERROR_SAMPLE_RATE || '1.0')
        },
        ga: {
          measurementId: process.env.NUXT_PUBLIC_GA_MEASUREMENT_ID || '',
          debugMode: process.env.NUXT_PUBLIC_GA_DEBUG_MODE === 'true'
        },
        plausible: {
          domain: process.env.NUXT_PUBLIC_PLAUSIBLE_DOMAIN || ''
        },
        gtm: {
          id: process.env.NUXT_PUBLIC_GTM_ID || ''
        },
        uptimeRobot: {
          apiKey: process.env.NUXT_PUBLIC_UPTIME_ROBOT_API_KEY || '',
          monitorId: process.env.NUXT_PUBLIC_UPTIME_ROBOT_MONITOR_ID || '',
          checkInterval: parseInt(process.env.NUXT_PUBLIC_UPTIME_ROBOT_CHECK_INTERVAL || '300'),
          enableAlerts: process.env.NUXT_PUBLIC_UPTIME_ROBOT_ENABLE_ALERTS === 'true'
        },
        grafana: {
          url: process.env.NUXT_PUBLIC_GRAFANA_URL || 'http://localhost:3000',
          apiKey: process.env.NUXT_PUBLIC_GRAFANA_API_KEY || ''
        },
        monitoring: {
          enablePerformanceMonitoring: process.env.NUXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING === 'true',
          enableErrorTracking: process.env.NUXT_PUBLIC_ENABLE_ERROR_TRACKING === 'true',
          enableUserBehaviorTracking: process.env.NUXT_PUBLIC_ENABLE_USER_BEHAVIOR_TRACKING === 'true',
          enableAnalytics: process.env.NUXT_PUBLIC_ENABLE_ANALYTICS === 'true'
        }
      } : {})
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Template Nuxt + Strapi',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Template Nuxt 3 avec intégration Strapi et monitoring complet' }
      ]
    }
  },
  // Sentry Configuration (Production only)
  ...(process.env.NODE_ENV === 'production' ? {
    sentry: {
      dsn: process.env.NUXT_PUBLIC_SENTRY_DSN || '',
      environment: process.env.NUXT_PUBLIC_SENTRY_ENVIRONMENT || 'production',
      release: process.env.NUXT_PUBLIC_SENTRY_RELEASE || '1.0.0',
      tracesSampleRate: parseFloat(process.env.NUXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE || '0.1'),
      replaysSessionSampleRate: parseFloat(process.env.NUXT_PUBLIC_SENTRY_REPLAYS_SESSION_SAMPLE_RATE || '0.1'),
      replaysOnErrorSampleRate: parseFloat(process.env.NUXT_PUBLIC_SENTRY_REPLAYS_ON_ERROR_SAMPLE_RATE || '1.0'),
      vueOptions: {
        tracing: true,
        tracingOptions: {
          trackComponents: true,
          trackLongTasks: true
        }
      }
    }
  } : {}),
  // Google Analytics Configuration (Production only)
  ...(process.env.NODE_ENV === 'production' ? {
    googleAnalytics: {
      id: process.env.NUXT_PUBLIC_GA_MEASUREMENT_ID || '',
      debug: {
        enabled: process.env.NUXT_PUBLIC_GA_DEBUG_MODE === 'true',
        sendHitTask: true
      },
      autoTracking: {
        screenview: true,
        pageviewOnLoad: true,
        exception: true,
        timing: true
      }
    }
  } : {})
})

