export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {
    mounted (el: any, binding: any) {
      const { value } = binding
      if (!('value' in binding) || value) {
        el.focus()
      }
    }
  })
  nuxtApp.provide('uploadImage', async (file: any, params: any) => {
    const formData = new FormData()
    formData.append('file', file)
    const options = {
      params,
      body: formData
    }

    if (typeof nuxtApp.$gtag === 'function') {
      nuxtApp.$gtag('file_upload', {
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type
      })
    }

    if (file.size > 20 * 1024 * 1024) {
      const error = Error(`파일은 20Mb 이하만 업로드 가능합니다.\n(파일이름: ${file.name})`)

      if (typeof nuxtApp.$trackError === 'function') { nuxtApp.$trackError(error) }
      throw createError(error)
    }
    try {
      const { uploadFileUrl } = await $api.$post('v1/external/sellers/upload-image', options)
      return uploadFileUrl
    } catch (error) {
      if (typeof nuxtApp.$trackError === 'function') { nuxtApp.$trackError(error) }
    }
  })

  nuxtApp.provide('downloadExcel', async (url: string, fileName = '상품목록') => {
    const response = await $api.$get(url, {
      responseType: 'blob'
    })
    // const fileName = '상품목록'

    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(new Blob([response]))
    link.setAttribute('download', `${fileName}.xlsx`)
    link.style.cssText = 'display:none'
    document.body.appendChild(link)
    link.click()
    link.remove()
  })
})
