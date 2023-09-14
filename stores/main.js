import { defineStore, acceptHMRUpdate } from 'pinia'

export const useMainStore = defineStore('store', {
  state: () => {
    return {
      authorization: null,
      refreshToken: null,
      email: null
    }
  },

  getters: {},
  actions: {
    set (key, newState) {
      this[key] = newState

      const options = {}
      if (key === 'authorization') {
        options.maxAge = 60 * 60 * 24 * 7
      }
      if (key === 'refreshToken') {
        options.maxAge = 60 * 60 * 24 * 7
      }
      const cookies = useCookie(key, options)
      cookies.value = newState
    },
    init () {
      Object.keys(this.$state).forEach((key) => {
        if (key === 'email') { return }
        const cookies = useCookie(key)
        if (cookies.value) {
          this[key] = cookies.value
        }
      })
    }
  },
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: 'strict'
    })
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}
