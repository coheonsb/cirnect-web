import dayjs from 'dayjs'
import 'dayjs/locale/ko'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$filters = {
    data: (v, ...args) => {
      const toFormat = args.pop() || 'YYYY.MM.DD'
      if (v && v.format) { return v.format(toFormat) }
      return dayjs(v, ...args).format(toFormat)
    },
    time: (v, ...args) => {
      const toFormat = args.pop() || 'HH:mm:ss'
      if (v && v.format) { return v.format(toFormat) }
      return dayjs(v, ...args).format(toFormat)
    },
    datetime: (v, ...args) => {
      const toFormat = args.pop() || 'YYYY.MM.DD HH:mm'
      if (v && v.format) { return v.format(toFormat) }
      return dayjs(v, ...args).format(toFormat)
    },
    timestamp: (v, ...args) => {
      const toFormat = args.pop() || 'YYYY.MM.DD HH:mm:ss'
      if (v && v.format) { return v.format(toFormat) }
      return dayjs(v, ...args).format(toFormat)
    },
    withComma: n => `${n || 0}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
})
