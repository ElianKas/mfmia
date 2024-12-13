<script setup lang="ts">
	import { Analytics } from '@vercel/analytics/nuxt';
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
