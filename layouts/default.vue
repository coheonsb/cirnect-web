<template>
  <div class="default">
    <slot keep-alive />
    <!-- <Footer /> -->
    <ModalArea ref="modalArea" class="modal-area" />
  </div>

</template>

<script>

import ModalArea from '~/components/common/ModalArea.vue'
// import Footer from '~/components/Footer.vue'
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
.empty {
  .default {
    width: 100%;
    background-color: var(--primary-color);
    padding: 20px;
  }
  .modal-area {
    position: fixed;
  }
}
</style>
