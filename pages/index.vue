<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'meilensteine',
		is_startpage: false,
	});
	onMounted(() => {
		console.log(data.stories);
	});
</script>
<template>
	<div class="bg-black">homepage</div>
</template>
