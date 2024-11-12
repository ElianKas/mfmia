<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'storys',
		is_startpage: false,
	});

	onMounted(() => {
		console.log(data.stories);
	});
</script>
<template>
	<article class="min-h-[100vh] max-w-[--max-width] px-[1rem]">
		<div class="text-center my-[5rem]">
			<p>Geschichten, wie wir Kamerun erleben.</p>
			<h1 class="text-big text-orange">Storys</h1>
		</div>
		<ClientOnly>
			<template #fallback>
				<div class="grid grid-cols-1">
					<div
						v-for="story in data.stories"
						class="skeleton h-[500px] w-full"></div>
				</div>
			</template>
			<div class="grid grid-cols-1">
				<TemplatesStoryCard
					v-for="story in data.stories"
					:key="story.id"
					:story="story" />
			</div>
		</ClientOnly>
	</article>
</template>
