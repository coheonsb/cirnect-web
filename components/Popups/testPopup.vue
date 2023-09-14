<template>
  <div>

    <div>
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestPopup',
  props: {
    text: { default: '' }
  },
  emits: ['close'],
  mounted () {
    // this.$emit('close', 213010)
  }
}
</script>
