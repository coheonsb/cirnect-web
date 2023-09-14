<template>
 <div class="empty">
    <slot keep-alive />
    <!-- <Footer /> -->
    <ModalArea ref="modalArea" class="modal-area" />
  </div>

</template>

<script>

import ModalArea from '~/components/common/ModalArea.vue'
import Footer from '~/components/Footer.vue'
import BaseExtend from '~/layouts/BaseExtend.js'

export default {
  name: 'Empty',
  components: {
    Footer, ModalArea
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

  .modal-area {
    position: fixed;
  }
}
</style>
