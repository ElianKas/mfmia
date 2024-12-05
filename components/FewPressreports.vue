<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'news/presse',
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
	<article
		class="max-w-[--max-width] m-auto px-[1rem] md:px-[3rem] text-center py-[2rem]">
		<h2 class="font-bold text-big text-orange">Presseberichte</h2>
		<NuxtLink
			class="text-orange"
			to="/news/presse"
			><u>Alle Presseberichte ansehen</u></NuxtLink
		>
		<ul
			class="flex gap-[2rem] md:gap-[5rem] py-[2rem] max-md:flex-col">
			<ClientOnly>
				<template #fallback>
					<li class="h-[150px] w-full flex gap-[1rem]">
						<div class="skeleton h-full aspect-square"></div>
						<div class="w-full">
							<div
								class="skeleton h-[2rem] max-w-[200px] grow mb-[1rem]"></div>
							<div
								class="skeleton h-[2rem] max-w-[200px] mb-[1rem]"></div>
							<div class="skeleton h-[2rem] max-w-[200px]"></div>
						</div>
					</li>
					<li class="h-[150px] w-full flex gap-[1rem]">
						<div class="skeleton h-full aspect-square"></div>
						<div class="w-full">
							<div
								class="skeleton h-[2rem] max-w-[200px] grow mb-[1rem]"></div>
							<div
								class="skeleton h-[2rem] max-w-[200px] mb-[1rem]"></div>
							<div class="skeleton h-[2rem] max-w-[200px]"></div>
						</div>
					</li>
				</template>
				<div
					class="flex gap-[2rem] md:gap-[5rem] max-lg:flex-col w-full">
					<li
						class="w-full flex gap-[1rem]"
						v-for="report in sortedData">
						<NuxtLink
							target="_blank"
							:to="report.content.report.filename"
							class="h-[150px] aspect-square rounded-[--border-radius] bg-[#BFBFBF] grid place-items-center">
							.PDF
						</NuxtLink>
						<div class="w-full text-left flex flex-col gap-[.5rem]">
							<p>
								{{
									new Date(report.content.date).toLocaleDateString(
										'de-DE',
										{
											day: '2-digit',
											month: '2-digit',
											year: 'numeric',
										}
									)
								}}
							</p>
							<p>
								{{ report.content.title }}
							</p>
							<p v-if="report.content.description">
								{{ report.content.description }}
							</p>
						</div>
					</li>
				</div>
			</ClientOnly>
		</ul>
	</article>
</template>
