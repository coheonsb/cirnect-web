import { useMainStore } from '~/stores/main'

function piniaPlugin () {
  return { creationTime: new Date() }
}

export default defineNuxtPlugin(({ $pinia }) => {
  const store = useMainStore()
  store.init()
  $pinia.use(piniaPlugin)
  return {
    provide: {
      store
    }
  }
})
