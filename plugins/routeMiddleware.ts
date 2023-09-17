import { useMainStore } from '~/stores/main'
export default defineNuxtPlugin(() => {
  addRouteMiddleware('portfolio', (to) => {
    if(to.path === '/portfolio') return
    return navigateTo(`/portfolio`)
  }, { global: true })
  addRouteMiddleware('global-auth', (to) => {

  }, { global: true })
})
