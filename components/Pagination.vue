<template>
  <div class="pagination">
    <button :disabled="isFirst" class="button-style first" @click="first" />
    <button :disabled="!hasPrev" class="button-style prev" @click="prev" />
    <div class="fd-r ai-c">
      <div v-for="page in pages" :key="page">
        <button
          :class="{ selected: page === currentPage }"
          class="number-style"
          @click="selectPage(page)">
          {{ page + 1 }}
        </button>
      </div>
    </div>
    <button :disabled="!hasNext" class="button-style next" @click="next" />
    <button :disabled="isLast" class="button-style last" @click="last" />
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: { type: Number },
    totalPage: { type: Number }
  },
  data () {
    return {}
  },
  computed: {
    groupIndex () {
      return parseInt(this.currentPage / 10)
    },
    pages () {
      const start = this.groupIndex * 10
      const last = Math.min(start + 10, this.totalPage)
      const pages = []
      for (let i = start; i < last; i++) {
        pages.push(i)
      }
      return pages
    },
    hasNext () {
      return this.groupIndex < parseInt(this.totalPage / 10)
    },
    hasPrev () {
      return this.groupIndex > 0
    },
    isFirst () {
      return this.groupIndex === 0
    },
    isLast () {
      return this.groupIndex === parseInt(this.totalPage / 10)
    }
  },
  methods: {
    first () {
      this.selectPage(0)
    },
    prev () {
      this.selectPage((this.groupIndex - 1) * 10)
    },
    next () {
      this.selectPage((this.groupIndex + 1) * 10)
    },
    last () {
      this.selectPage(this.totalPage - 1)
    },
    selectPage (page) {
      this.$emit('selectPage', page)
    }
  }
}
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 36px;
  align-items: center;
  justify-content: center;
}

.button-style {
  cursor: pointer;
  outline: none;

  width: 28px;
  height: 28px;
  margin: 0px 4px;

  background-color: #ffffff;
  border: 1px solid #bdbdbd;
  border-radius: 8px;

  background-size: 12px 12px;
  background-repeat: no-repeat;
  background-position: center;

  &.prev {
    background-image: url("~/assets/images/btn-back-arrow-left.svg");
  }

  &.next {
    transform: rotate(180deg);
    transform-origin: center;
    background-image: url("~/assets/images/btn-back-arrow-left.svg");
  }

  &.first {
    background-image: url("~/assets/images/btn-back-arrow-left-double.svg");
  }

  &.last {
    transform: rotate(180deg);
    transform-origin: center;
    background-image: url("~/assets/images/btn-back-arrow-left-double.svg");
  }
}
.button-style:disabled {
  opacity: 0.3;
}

.number-style {
  cursor: pointer;
  outline: none;

  padding: 0px 2px;
  margin: 0px 4px;
  height: 32px;

  font-size: 14px;
  font-weight: 500;

  border: none;
  background: none;

  &.selected {
    font-weight: 700;
    color: var(--primary-color);
  }
}
</style>
