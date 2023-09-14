<template>
  <Transition name="toast" @before-enter="beforeEnter" @enter="enter"
              @after-leave="afterLeave">
    <div v-if="modelValue" class="toast md3-ko-b-white">{{ modelValue }}</div>
  </Transition>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    modelValue: { type: [String, Number], required: true },
    direction: { type: String, required: false, default: 'bottom' }
  },
  emits: ['update:modelValue', 'after-leave'],
  methods: {
    beforeEnter (el) {
      if (this._last && this._last.classList) { this._last.classList.add('stack') }
      this._last = el
    },
    enter () {
      this.$nextTick(() => {
        this.$emit('update:modelValue', '')
        // done()
      })
    },

    afterLeave (el) {
      if (this._last === el) { this._last = undefined }
      this.$emit('after-leave')
    }
  }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed; left: 50%; bottom: 100px; z-index: 1000;
  max-width: 60%;
  padding: 8px 20px;
  transform: translate3d(-50%,0,0);
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  transition: all .4s cubic-bezier(.36,.66,.04,1);
  white-space: pre;
  pointer-events: none;
  font-size: 16px;
  &.center{bottom:50%}
&.toast-enter-from, &.toast-leave-from {
    opacity: 0;
    transform: translate3d(-50%,0,0) scale3d(.9,.7,1);
  }
  &.toast-enter-to, &.toast-leave-to {
    opacity: 1;
    transform: translate3d(-50%,0,0) scale3d(1,1,1);
    transition: all 2s cubic-bezier(.36,.66,.04,1);
  }
  &.toast-leave-active{
  }
  &.stack{
    transition-delay: 0s;
    opacity: 0.2;
    transform: translate3d(-50%,100%,0) scale3d(.9,.7,1);
  }

}
</style>
