function gtag () {
  dataLayer.push(arguments)
}

function trackError (err, nuxtApp) {
  const cookies = useCookie('email')

  const error = err

  if (window.dataLayer != null) {
    gtag('event', 'errorCaptured', {
      error,
      errorStack: error?.stack,
      errorMessage: error?.data?.message || error?.message,
      errorName: error?.name,
      errorTime: new Date().toISOString(),
      errorUrl: window.location.href,
      errorUserAgent: window.navigator.userAgent,
      email: cookies?.value
    })
    nuxtApp.$alert({ message: error?.data?.message || error?.message, title: '에러' })
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const cookies = useCookie('email')

  nuxtApp.provide('gtag', function (eventName, params) {
    if (window.dataLayer != null) {
      Object.assign(params, {

      })
      gtag('event', eventName, params)
    }
  })

  nuxtApp.provide('trackError', function (err) {
    trackError(err, nuxtApp)
  })

  nuxtApp.hook('vue:error', (err) => {
    trackError(err, nuxtApp)
  })
})
