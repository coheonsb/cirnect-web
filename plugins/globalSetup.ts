export default defineNuxtPlugin({
  name: 'globalSetup',
  setup () {

    useHead({
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-QE75KTYC35',
          async: true,
          type: 'text/javascript'
        },
        {
          src: '/ga.js',
          type: 'text/javascript'
        }
      ],
    })
  }
}
)
