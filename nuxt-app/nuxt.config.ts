// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    ["@nuxtjs/google-fonts", {
      families: {
        'Open Sans': [400, 700],
        'Montserrat': true,
      }
    }],
    "nuxt-swiper",
    'reka-ui/nuxt',
  ],
  css: ['~/assets/css/dialog.css', '~/assets/css/main.css', , '~/assets/css/pagination.css'],
})
