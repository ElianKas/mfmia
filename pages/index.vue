<script setup>
	useSeoMeta({
		title: 'Miteinander - für Menschen in Afrika e.V.',
		description:
			'Gemeinsam für Bildung, Gesundheit und Selbsthilfe in Kamerun. Erfahren Sie mehr über unsere aktuellen Projekte und wie Sie helfen können.',
	});
</script>
<template>
	<div>
		<Landing />
		<nav
			class="grid grid-cols-1 md:grid-cols-2 gap-[1rem] max-w-[--max-width] m-auto px-[1rem] md:px-[3rem] py-[2rem]">
			<NuxtLink
				to="/projekte"
				class="aspect-[2/1] rounded-[--border-radius] flex items-end relative bg-[#000]">
				<StoryblokImage
					class="absolute inset-0 w-full h-full object-cover opacity-50"
					src="https://a.storyblok.com/f/311834/6000x4000/87c7c23808/projekte-ubersicht_img_8126.JPG" />
				<div
					class="flex items-center justify-between cursor-pointer w-full p-[1.5rem] z-[9] text-white">
					<div class="font-bold text-big">Projekte</div>
					<div>
						<SvgsNavigationDoubleArrowWhite class="w-[20px] h-auto" />
					</div>
				</div>
			</NuxtLink>
			<NuxtLink
				to="/storys"
				class="aspect-[2/1] rounded-[--border-radius] flex items-end relative bg-[#000]">
				<StoryblokImage
					class="absolute inset-0 w-full h-full object-cover opacity-50"
					src="https://a.storyblok.com/f/311834/6000x4000/1a41e12359/storys_ubersicht_img_3454.JPG" />
				<div
					class="flex items-center justify-between cursor-pointer w-full p-[1.5rem] z-[9] text-white">
					<div class="font-bold text-big">Storys</div>
					<div>
						<SvgsNavigationDoubleArrowWhite class="w-[20px] h-auto" />
					</div>
				</div>
			</NuxtLink>
			<NuxtLink
				to="/verein"
				class="aspect-[2/1] rounded-[--border-radius] flex items-end relative bg-[#000]">
				<StoryblokImage
					class="absolute inset-0 w-full h-full object-cover opacity-50"
					src="https://a.storyblok.com/f/311834/1806x956/6e231504e3/unser-verein_ubersicht_img_5803.png" />
				<div
					class="flex items-center justify-between cursor-pointer w-full p-[1.5rem] z-[9] text-white">
					<div class="font-bold text-big">Unser Verein</div>
					<div>
						<SvgsNavigationDoubleArrowWhite class="w-[20px] h-auto" />
					</div>
				</div>
			</NuxtLink>
			<NuxtLink
				to="/news"
				class="aspect-[2/1] rounded-[--border-radius] flex items-end relative bg-[#000]">
				<StoryblokImage
					class="absolute inset-0 w-full h-full object-cover opacity-50"
					src="https://a.storyblok.com/f/311834/1859x984/a268c83c45/news_ubersicht_img_3880.png" />
				<div
					class="flex items-center justify-between cursor-pointer w-full p-[1.5rem] z-[9] text-white">
					<div class="font-bold text-big">News</div>
					<div>
						<SvgsNavigationDoubleArrowWhite class="w-[20px] h-auto" />
					</div>
				</div>
			</NuxtLink>
		</nav>
		<LazyFewArticles />
		<LazyDonate />
		<LazyMilestones />
		<LazyProjectCarousel />
		<LazyNewsletter />
	</div>
</template>
