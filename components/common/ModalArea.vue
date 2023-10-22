<template>
  <div class="modal-components">
    <TransitionGroup name="fade" tag="div">
      <div v-for="(popup, i) of popups" :key="i" class="modal-area"
           :class="{'no-backdrop': popup.props.noBackdrop }"
           :style="popup.props.popupPosition"
           @click.stop="popup.props.noBackdrop ? ()=>{} : closePopup('backdrop',popup.id)">
        <Component :is="popup.component" v-show="popup.component" v-bind="popup.props"
                   class="modal"
                   :style="{'z-index': i+1}"
                   @click.stop="e=>e.stopPropagation()"
                   @close="e=>closePopup(e, popup.id)" />
      </div>
    </TransitionGroup>

  </div>

</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
const popupHash = '#/popup-'
export default {
  name: 'ModalArea',
  props: {

  },
  data () {
    return {
      popups: [],
      id: 2
    }
  },
  watch: {
    'popups.length' (v) {
      if (v) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
  },

  mounted () {

    // if (this.$route.hash.includes(popupHash)) {
    //   this.$router.replace({ hash: '' })
    // }
    // this.$router.afterEach((to, from) => {
    //   if (from.hash === to.hash) { return }
    //   const fromKey = from.hash.split(popupHash)[1] || null
    //   const toKey = to.hash.split(popupHash)[1] || null
    //   if (fromKey) {
    //     const popup = this.findPopup(parseInt(fromKey))
    //     if (parseInt(toKey) > parseInt(fromKey)) {
    //       return
    //     }
    //     if (popup) {
    //       const popupIndex = this.popups.findIndex(x => x.id === popup.id)
    //       this.popups[popupIndex].resolve('back')
    //       this.popups.splice(popupIndex, 1)
    //     }
    //   }
    // })
    // this.$router.beforeEach((to, from, next) => {
    //   return next()
    // })
  },
  methods: {
    open ({ component, props }) {
      const promise = new Promise((resolve, reject) => {
        this.pushPopup({ component, props, resolve, reject, id: this.id })
        // const { query, path } = this.$route
        // this.$router.push({ query, path, hash: `${popupHash}${this.id}` })
        this.id++
      })
      return promise
    },
    pushPopup (props) {
      this.popups.push(props)
    },
    closePopup (value, id) {
      const { hash } = this.$route
      const popupIndex = this.popups.findIndex(x => x.id === id)
      if (popupIndex === -1) { return }
      this.popups[popupIndex].resolve(value)
      // this.popups[popupIndex].resolve('back')
      this.popups.splice(popupIndex, 1)
      // if (hash && hash !== '') {
      // this.$router.go(-1)
      // }
    },
    findPopup (id) {
      if (!id) { return }
      const popup = this.popups.find(x => x.id === id)
      return popup
    }

  }
}
</script>

<style scoped lang="scss">
.modal-components {
  .modal-area {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,.5);
    &.no-backdrop {
      background: rgba(0,0,0,0);
    }
    .modal {
      background: var(--black-2);
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
    }

  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
}
</style>
