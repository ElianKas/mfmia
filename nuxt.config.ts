// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: false },
	modules: [
		[
			'@storyblok/nuxt',
			{
				accessToken: process.env.STORYBLOK_ACCESSTOKEN,
			},
		],
		'@nuxt/image',
		'@nuxtjs/leaflet',
		'@hypernym/nuxt-gsap',
		'vue3-carousel-nuxt',
		'@nuxtjs/sitemap',
		'@nuxtjs/robots',
	],
	css: ['~/assets/css/main.css'],
	/*   gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },  */
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	image: {
		storyblok: {
			baseURL: 'https://a.storyblok.com',
		},
	},
	app: {
		head: {
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					name: 'google-site-verification',
					content: 'n86WMj23tEvbQQ_4grNCrmfyDSoYmKz9NEsSaODpBUM',
				},
			],
			script: [
				{ src: 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js' },
				{
					async: true,
					src: 'https://www.google.com/recaptcha/api.js?render=6LfMDgcsAAAAAAVVwmsCzIDA7wzLnWUlTiWqZSiC',
				},
			],
		},
	},
});
