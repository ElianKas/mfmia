<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'news',
		is_startpage: false,
	});
	onMounted(() => {
		console.log(data.stories);
	});
</script>
<template>
	<main>hello</main>
</template>
