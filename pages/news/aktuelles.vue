<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'news/aktuelles',
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
		console.log(clientData.value);
	});
</script>
<template>
	<article class="px-[1rem]">
		<div
			class="h-[200px] bg-[#000] w-full rounded-[--border-radius] grid place-items-center my-[1rem]">
			<h1 class="text-white text-big">Aktuelles</h1>
		</div>
		<ul class="my-[5rem] max-w-[900px] m-auto">
			<li v-for="article in clientData">
				<NuxtLink
					:to="article.full_slug"
					class="p-[1rem] border-b flex justify-between items-center gap-[1rem]">
					<div>
						{{
							new Date(article.content.date).toLocaleDateString(
								'de-DE',
								{ day: '2-digit', month: '2-digit', year: 'numeric' }
							)
						}}
						<b>{{ article.content.title }}</b>
					</div>
					<SvgsNavigationDoubleArrow class="shrink-0"
				/></NuxtLink>
			</li>
		</ul>
	</article>
	<aside><Newsletter class="my-[5rem]" /></aside>
</template>
