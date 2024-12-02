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
	});
</script>
<template>
	<div>
		<article class="px-[1rem]">
			<div
				class="h-[200px] bg-[#000] w-full rounded-[--border-radius] grid place-items-center my-[1rem] relative">
				<StoryblokImage
					class="absolute inset-0 w-full h-full object-cover opacity-50"
					src="https://a.storyblok.com/f/311834/1859x984/a268c83c45/news_ubersicht_img_3880.png" />
				<h1 class="text-white text-big z-[9] font-bold">
					Presseberichte
				</h1>
			</div>
			<ul
				class="flex max-w-[--max-width] m-auto gap-[2rem] md:gap-[5rem] py-[2rem] md:py-[5rem] max-md:flex-col">
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
						class="grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[5rem] w-full">
						<li
							class="h-[150px] w-full flex gap-[1rem]"
							v-for="report in sortedData">
							<NuxtLink
								target="_blank"
								:to="report.content.report.filename"
								class="h-full aspect-square rounded-[--border-radius] bg-[#BFBFBF] grid place-items-center">
								.PDF
							</NuxtLink>
							<div class="w-full text-left">
								<div class="h-[2rem] max-w-[200px] grow mb-[.5rem]">
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
								</div>
								<div class="h-[2rem] max-w-[200px] mb-[.5rem]">
									{{ report.content.title }}
								</div>
								<div class="h-[2rem] max-w-[200px]">
									{{ report.content.description }}
								</div>
							</div>
						</li>
					</div>
				</ClientOnly>
			</ul>
		</article>
		<LazyNewsletter />
	</div>
</template>
