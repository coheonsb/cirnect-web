<template>
  <div class="default">
    <slot keep-alive />
    <ModalArea ref="modalArea" class="modal-area" />
  </div>

</template>

<script>

import ModalArea from '~/components/common/ModalArea.vue'
import BaseExtend from '~/layouts/BaseExtend.js'

export default {
  name: 'Default',
  components: {
    ModalArea
  },
  extends: BaseExtend,
  setup () {
    const modalArea = ref(null)
    return {
      modalArea
    }
  }

}

</script>
<style scoped lang="scss">
.default {
  width: 100%;
  min-height: 100vh;
  // padding: 20px;
  background: var(--smoky-black);
  .modal-area {
    position: fixed;
    z-index: 10;
  }
}
</style>
