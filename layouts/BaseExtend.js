import Alert from '~/components/common/Alert'
export default {
  name: 'BaseExtend',
  provide () {
    return {
      $popup: this.popup,
      $alert: this.alert
    }
  },

  mounted () {
    const nuxtApp = useNuxtApp()
    nuxtApp.$alert = this.alert
    nuxtApp.$gtag('default_layout_mounted', {
      
    })
  },

  methods: {
    popup (comp, props) {
      if (this.modalArea == null) {
        return
      }
      return this.modalArea.open({ component: shallowRef(comp), props })
    },
    alert ({ message, title, buttons }) {
      if (this.modalArea == null) {
        return
      }
      return this.modalArea.open({
        component: shallowRef(Alert),
        props: {
          message,
          title,
          buttons
        }
      })
    }
  }
}
