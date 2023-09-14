<template>
  <div class="alert">
    <div class="message sp16-r">
      <div v-if="title" class="sp20 fw700 gray800" :style="{whiteSpace}" v-text="title" />
      <p v-if="message" class="sp16 fw300 gray800 mt s-10 ws-pw wb-wa">{{ message }}</p>
    </div>
    <div class="buttons mt s-24 ml-a">
      <button v-for="(button, i) of buttons" :key="button"
              v-focus="i === buttons.length - 1"
              :class="{gray: i == 0 && buttons.length > 1}"
              @click="$emit('close', button)">{{ button }}</button>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Alert',
  props: {
    message: [String, Error],
    title: String,
    buttons: { type: Array, default: () => ['확인'] }
  },
  computed: {
    whiteSpace () {
      return (this.title || '').includes('\n') ? 'pre' : 'pre-wrap'
    }
  }
}
</script>
<style lang="scss" scoped>
.alert{
  min-width: 450px;
  display: flex; flex-direction: column;
  overflow: hidden;
  background-color: white;
  transform: translate3d(0,0,0); // 사파리에서 상단보더 라운드 안나오는 문제
  border-radius: 8px;
  .message{
    line-height: 180%;
    .title {
      white-space: pre-wrap; max-width: 100%;
    }
    .text {
      white-space: pre-wrap; max-width: 100%;
      max-height: 100%; overflow: scroll;
    }
  }
  .buttons{
    display: flex;
    height:40px;
     flex-direction: row;
    // border-top: solid 1px var(--primary-color);

    button{
      border-radius: 5px;
      border: 0px;
      padding: 0 15px;
      color: white;
      background-color: var(--primary-color);
      &.gray {
        color: var(--gray600);
        background-color: var(--gray200);
      }
      &:last-child {
        margin-left: 10px;
      }
    }
  }
}
</style>
