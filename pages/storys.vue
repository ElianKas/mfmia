<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'storys',
		is_startpage: false,
	});
	const sortedData = ref(null);
	const clientData = ref([]);
	const currentLength = computed(() => clientData.value.length);
	let increment;

	function loadMore() {
		const nextData = sortedData.value.slice(
			currentLength.value,
			currentLength.value + increment
		);
		clientData.value = [...clientData.value, ...nextData];
	}

	onMounted(() => {
		//set relation for loaded articles and viewport size
		if (window.innerWidth < 1024) {
			increment = 4;
		} else {
			increment = 6;
		}
		window.addEventListener('resize', function () {
			if (window.innerWidth < 1024) {
				increment = 4;
			} else {
				increment = 6;
			}
		});
		sortedData.value = data.stories.sort((a, b) => {
			const dateA = new Date(a.content.date);
			const dateB = new Date(b.content.date);
			return dateB - dateA;
		});
		loadMore();
	});
</script>
<template>
	<article
		class="min-h-[100vh] max-w-[--max-width] m-auto px-[2rem] mb-[10rem]">
		<div class="text-center my-[5rem]">
			<p class="font-bold text-green">
				Geschichten, wie wir Kamerun erleben.
			</p>
			<h1 class="text-big text-orange font-bold">Storys</h1>
		</div>
		<ClientOnly>
			<template #fallback>
				<div
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-[5rem] gap-[2rem]">
					<div class="skeleton h-[500px] w-full"></div>
					<div class="skeleton h-[500px] w-full"></div>
					<div class="skeleton h-[500px] w-full"></div>
					<div class="skeleton h-[500px] w-full"></div>
					<div
						class="skeleton h-[500px] w-full hidden lg:block"></div>
					<div
						class="skeleton h-[500px] w-full hidden lg:block"></div>
				</div>
			</template>
			<div v-if="clientData.length > 0">
				<div
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-[5rem] justify-items-center gap-[2rem]">
					<TemplatesStoryCard
						v-for="(story, index) in clientData"
						:key="story.id"
						:story="story"
						:prev="sortedData[index + 1]"
						:next="sortedData[index - 1]" />
				</div>
				<div class="text-center">
					<button
						class="btn mt-[5rem] bg-orange text-white"
						v-if="clientData.length !== sortedData.length"
						@click="loadMore()">
						Ältere Story laden
					</button>
				</div>
			</div>
		</ClientOnly>
	</article>
</template>
