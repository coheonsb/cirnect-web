import { fileURLToPath } from 'node:url'
// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'


const config = {
  devtools: { enabled: true },

  components: [],
  css: [
    '~/assets/font.scss',
    '~/assets/global.scss',
    '~/assets/palette.scss',
    '~/assets/styleguide.scss'
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://api.example.com/'
    }
  },
  appConfig: {},
  imports: {
    dirs: ['.stores']
  },
  
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/robots'
  ],
  pinia: {
    autoImports: ['defineStore', 'definePiniaStore', 'acceptHMRUpdate', 'storeToRefs']
  },
  robots: {
    rules: {
      UserAgent: '*',
      Disallow: '/'
    }
  },

  plugins: [
    '~/plugins/store.ts',
    '~/plugins/globalSetup.ts'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/define.scss" as *;'
        }
      }
    }
  }
}


export default defineNuxtConfig(config)
