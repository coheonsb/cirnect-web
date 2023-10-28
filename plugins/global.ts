function updateSize () {
  const customVH = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${customVH}px`)
}

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    updateSize()
    window.addEventListener('resize', () => {
      updateSize()
    })
  }
})
