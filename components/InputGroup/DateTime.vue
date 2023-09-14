<template>
  <div class="date">
    <input ref="picker" type="text" class="datetime">
    <div v-if="icon" class="calendar">
      <img src="~/assets/images/ic-calendar_month.svg" alt="calendar">
    </div>
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
import { Korean } from 'flatpickr/dist/l10n/ko'
import moment from 'moment'

export default {
  name: 'DateTime',
  props: {
    modelValue: [Date, moment, Number, String],
    options: Object,
    format: { type: String, default: 'YYYY-MM-DDTHH:mm:ss' },
    time: { type: Boolean, default: true },
    noCalendar: { type: Boolean, default: false },
    icon: { type: Boolean, default: true }
  },
  emits: ['update:modelValue'],
  data () {
    return {
      flatpickr: null
    }
  },
  watch: {
    modelValue () {
      this.updateValue()
    }
  },
  mounted () {
    this.flatpickr = flatpickr(this.$refs.picker, {
      locale: Korean,
      enableTime: this.time,
      noCalendar: this.noCalendar,
      dateFormat: this.time ? 'Y.m.d H:i\\' : 'Y.m.d\\',
      ...this.options,
      defaultDate: this.modelValue,
      onChange: this.onChange
    })
    this.updateValue()
  },
  beforeUnmount () {
    if (this.flatpickr) {
      this.flatpickr.destroy()
      this.flatpickr = null
    }
  },
  methods: {
    onChange ([date]) {
      this.date = date && moment(date, this.format).format(this.format)
      this.$emit('update:modelValue', this.date)
    },
    updateValue () {
      const m = moment(this.modelValue, this.format)
      if (m.isValid()) { this.flatpickr.setDate(m.toDate(), false) } else { this.flatpickr.clear() }
    }
  }

}
</script>

<style lang="scss">
.date {
  position: relative;
  border-radius: 5px !important;
  // height: 40px !important;
  // box-sizing: inherit !important;
  flex: 1;
  width: 100%;
  .datetime {
    height: 40px !important;
    width: calc(100% - 16px) !important;
    flex: 1;
    display: inline;
    height: calc(40px - 9px) !important;
    border-radius: 5px !important;
    padding: 3.5px 0 3.5px 15px !important;
  }
  .calendar {
    position: absolute;
    bottom: 5px;
    right: 8px;
    pointer-events: none;
  }
}

</style>
