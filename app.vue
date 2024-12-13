<script setup lang="ts">
	import { Analytics } from '@vercel/analytics/nuxt';
	useSeoMeta({
		title: 'Miteinander - für Menschen in Afrika e.V.',
		ogTitle: 'Miteinander - für Menschen in Afrika e.V.',
		description:
			'Gemeinsam für Bildung, Gesundheit und Selbsthilfe in Kamerun. Erfahren Sie mehr über unsere aktuellen Projekte und wie Sie helfen können.',
		ogDescription:
			'Gemeinsam für Bildung, Gesundheit und Selbsthilfe in Kamerun. Erfahren Sie mehr über unsere aktuellen Projekte und wie Sie helfen können.',
		ogImage:
			'https://a.storyblok.com/f/311834/1130x280/057bd7b72b/kamerunverein_wortmarke_1200x300px.jpg',
		twitterCard: 'summary_large_image',
	});
</script>
<template>
	<Analytics />
	<div class="relative">
		<NavigationHeaderComponent />
		<main><NuxtPage /></main>
		<LazyNavigationFooterComponent />
		<ScrollTop />
	</div>
</template>
