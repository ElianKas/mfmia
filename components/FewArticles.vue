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
		sortedData.value = sortedData.value.slice(0, 3);
	});
</script>
<template>
	<article class="px-[1rem] py-[2rem] max-w-[900px] m-auto">
		<h2 class="font-bold text-big text-orange">Aktuelles</h2>
		<br />
		<ul>
			<ClientOnly>
				<template #fallback>
					<div class="skeleton h-[47px] mb-[1rem] w-full"></div>
					<div class="skeleton h-[47px] mb-[1rem] w-full"></div>
					<div class="skeleton h-[47px] mb-[1rem] w-full"></div>
				</template>
				<li v-for="article in sortedData">
					<NuxtLink
						:to="`/news/aktuelles/${article.slug}`"
						class="p-[1rem] border-b flex justify-between items-center gap-[1rem]">
						<div>
							{{
								new Date(article.content.date).toLocaleDateString(
									'de-DE',
									{
										day: '2-digit',
										month: '2-digit',
										year: 'numeric',
									}
								)
							}}
							<b>{{ article.content.title }}</b>
						</div>
						<SvgsNavigationDoubleArrow class="shrink-0"
					/></NuxtLink>
				</li>
			</ClientOnly>
			<br />
			<div class="text-center">
				<NuxtLink to="/news/aktuelles">
					<u>Alle Artikel ansehen</u></NuxtLink
				>
			</div>
		</ul>
	</article>
</template>
