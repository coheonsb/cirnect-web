import { useMainStore } from '~/stores/main'
export default defineNuxtPlugin(() => {
  addRouteMiddleware('global-auth', (to) => {

  }, { global: true })
})
