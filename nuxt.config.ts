// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [[
    '@storyblok/nuxt',
    {
      accessToken: process.env.STORYBLOK_ACCESSTOKEN,
    },
  ], '@nuxt/image', '@nuxtjs/leaflet', '@hypernym/nuxt-gsap'],
  css: ['~/assets/css/main.css'],
  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  }
})