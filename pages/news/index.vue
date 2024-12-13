<script setup>
	useSeoMeta({
		title: 'News',
		description:
			'Aktuelle Neuigkeiten, Pressemitteilungen und Newsletter von ‘Miteinander - für Menschen in Afrika e.V.’. Bleiben Sie informiert über unsere Aktivitäten.',
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
				<h1 class="text-white text-big z-[9] font-bold">News</h1>
			</div>
			<FewArticles />
		</article>
		<LazyMilestones />
		<LazyNewsletter />
		<LazyFewPressreports />
	</div>
</template>
