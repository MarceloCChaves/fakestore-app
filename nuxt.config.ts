// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: 'Fakestore',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Fakestore, a loja com produtos genuinamente verdadeiros' }
      ]
    }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icons',
    '@nuxt/icon',
    'nuxt-toast',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/image'
  ],

  vite: {
    build: {
      minify: 'esbuild'
    }
  }
})
