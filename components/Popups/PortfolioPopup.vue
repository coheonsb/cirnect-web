<template>
  <div class="detail-popup">
    <div class="title fd-sb ai-fs">
      <h2 class="white-2">{{ project.name }}</h2>
      <button @click="$emit('close')">닫기</button>
    </div>
    <div class="media mt s-20">
      <img v-if="!project.video" :src="project.img" alt="">
      <video v-else class="mt mb s-10" :poster="project.img" autoplay
             muted
             loop>
        <source :src="project.video" type="video/mp4">
      </video>
    </div>
    <div class="sp14">
      <div>📅 기간:  <span class="white-2">{{ project.period }}</span></div>
    </div>
    <br>
    <div class="sp14">
      <div class="wb-ka">주요 기능, 내용</div>
      <span class="sp16 white-2" v-html="project.description" />
    </div>
    <br>
    <div class="sp14">
      <div class="wb-ka">기술 스택</div>
      <span v-for="t of project.tech" :key="t" class="sp16 white-2 tech">{{ t }}</span>
    </div>
    <br>
    <div ref="end" class="sp14 ">
      <div class="wb-ka">기여도</div>
      <div class="sp16  white-2">{{ project.my }}</div>
    </div>
    <br>
    <div class="sp14 fd-r">
      <div class="wb-ka">Link: </div>
      <a v-for="l of project.link" :key="l" :href="l" target="_blank"
         class="sp16 ml s-10">{{ l }}</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TestPopup',
  props: {
    project: { default: {} }
  },
  emits: ['close'],
  setup () {
    const end = ref(null)
    return {
      end
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.end.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }
}
</script>
<style lang="scss" scoped>
.detail-popup {
  width: 100%;
  max-width: 80vw;
  height: 100%;
  max-height: 90vh;
  overflow: scroll;
  word-break: break-word;
  color: var(--white-2);
  .title {
    position: relative;
    h2 {
      margin: 0;
    }
    button {
      color: var(--white-2);
      background: var(--smoky-black);
      border: 1px solid var(--white-2);
      border-radius: 5px;
      padding: 5px 10px;
      cursor: pointer;
      &:hover {
        color: var(--vegas-gold);
        border: 1px solid var(--vegas-gold);
      }
    }
  }
  .media {
    width: 100%;
    height: 100%;
    max-height: 50vw;
    img {
      width: 100%;
      height: 100%;
      max-height: 50vw;
      object-fit: contain;
    }
    video {
      width: 100%;
      height: 100%;
      max-height: 50vw;

      object-fit: contain;
    }
  }
  .tech {
    margin-right: 10px;
    &:after {
      content: ',';
    }
    &:last-child {
      &:after {
        content: '';
      }
    }
  }
  color: rgb(107 114 128/1);
}
</style>
