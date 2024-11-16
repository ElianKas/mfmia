<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'news/aktuelles',
		is_startpage: false,
	});
	const sortedData = ref(null);

	onMounted(() => {
		sortedData.value = data.stories.sort((a, b) => {
			const dateA = new Date(a.content.date);
			const dateB = new Date(b.content.date);
			return dateB - dateA;
		});
		sortedData.value = sortedData.value.slice(0, 2);
	});
</script>
<template>
	<article class="max-w-[--max-width] m-auto px-[1rem] text-center">
		<h2 class="font-bold text-big text-orange">Presseberichte</h2>
		<NuxtLink
			class="text-orange"
			to="/news/presse"
			><u>Alle Presseberichte ansehen</u></NuxtLink
		>
	</article>
</template>
