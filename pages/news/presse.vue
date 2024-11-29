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
	});
</script>
<template>
	<div>
		<article class="px-[1rem]">
			<div
				class="h-[200px] bg-[#000] w-full rounded-[--border-radius] grid place-items-center my-[1rem]">
				<h1 class="text-white text-big">Presseberichte</h1>
			</div>
		</article>
		<LazyNewsletter />
	</div>
</template>
