// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [[
    '@storyblok/nuxt',
    {
      accessToken: process.env.STORYBLOK_ACCESSTOKEN,
    },
  ], '@nuxt/image', '@nuxtjs/leaflet', '@hypernym/nuxt-gsap', 'vue3-carousel-nuxt'],
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
    },
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dxizsaymj/image/upload/'
    }
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        { src: 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js' }
      ],
    }
  }
})