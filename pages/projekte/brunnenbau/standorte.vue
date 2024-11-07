<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'projekte/brunnenbau',
		is_startpage: false,
	});
	onMounted(() => {
		console.log(data.stories);
	});
</script>
<template>
	<div class="max-w-[var(--max-width)] m-auto">
		<section
			class="min-h-[calc(100vh-80px)] flex flex-col md:flex-row md:items-center gap-[5rem] md:px-[3rem]">
			<div
				class="mt-[100px] flex flex-col gap-[2rem] max-md:px-[3rem] md:w-[50%]">
				<div class="flex flex-col gap-[2rem]">
					<div>logo</div>
					<div>
						<h1>titel</h1>
						<p class="subtitle">untertitel</p>
					</div>
				</div>
				<div>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Velit accusamus, optio ab sapiente molestiae repellat ex
					maxime nostrum consectetur exercitationem cum sint obcaecati
					vero ipsa numquam corporis harum facilis sit.
				</div>
			</div>
			<div class="md:w-[50%]">
				<MapsBrunnenbauMap />
			</div>
		</section>
		<section class="px-[3rem]">
			<div
				class="grid grid-cols-6 mb-[1rem] gap-[1rem]"
				v-for="(story, index) in data.stories">
				<div>{{ data.stories.length - index }}</div>
				<div>{{ story.content.location }}</div>
				<div>{{ story.content.well }}</div>
				<div>{{ story.content.coordinates }}</div>
				<div>{{ story.content.group }}</div>
				<div>{{ story.content.year }}</div>
			</div>
		</section>
	</div>
</template>
