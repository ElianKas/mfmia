<script setup>
	const currentValue = ref(0);
	const projects = [
		{
			title: 'Bildung',
			link: '/projekte/bildung',
			src: 'https://a.storyblok.com/f/311834/6000x4000/7976ff7f8d/img_3554_kvdd4f.jpg',
		},
		{
			title: 'Brunnenbau',
			link: '/projekte/brunnenbau',
			src: 'https://a.storyblok.com/f/311834/6000x4000/013c3d6298/img_8154_wasser_usks9x.jpg',
		},
		{
			title: 'Hygiene & Gesundheit',
			link: '/projekte/hygiene-gesundheit',
			src: 'https://a.storyblok.com/f/311834/6000x4000/6d9047773b/img_5523_pzsznc.jpg',
		},
		{
			title: 'Hilfe zur Selbsthilfe',
			link: '/projekte/hilfe-zur-selbsthilfe',
			src: 'https://a.storyblok.com/f/311834/5200x2490/1169d78ee3/auto-sebastien.png',
		},
		{
			title: 'Kamerun',
			link: '/projekte/kamerun',
			src: 'https://a.storyblok.com/f/311834/6000x4000/3b83684f13/schuler_1_rwnd0o.jpg',
		},
	];
</script>
<template>
	<div class="py-[2rem]">
		<ClientOnly>
			<template #fallback>
				<div
					class="flex justify-evenly gap-[4rem] px-[1rem] md:px-[2rem]">
					<div
						class="skeleton w-full md:w-[500px] aspect-square"></div>
					<div
						class="skeleton w-[500px] aspect-square hidden md:block"></div>
					<div
						class="skeleton w-[500px] aspect-square hidden md:block"></div>
				</div>
			</template>
			<nav class="max-w-[--max-width-big] m-auto">
				<h2 class="font-bold text-big text-orange text-center">
					Lerne unsere Projekte kennen
				</h2>
				<br />
				<Carousel
					:items-to-show="1.2"
					:breakpoints="{
						768: { itemsToShow: 2.2 },
						1280: { itemsToShow: 3.2 },
					}"
					v-model="currentValue"
					:wrap-around="false">
					<Slide
						class="px-[1rem] md:px-[2rem]"
						v-for="(slide, index) in projects">
						<div
							class="bg-[#000] relative w-full md:w-[500px] aspect-square flex items-end rounded-[--border-radius] cursor-pointer"
							@click="
								() => {
									currentValue = index;
								}
							">
							<StoryblokImage
								class="absolute inset-0 w-full h-full object-cover opacity-50"
								:src="slide.src"
								v-if="slide.src" />
							<NuxtLink
								:to="slide.link"
								class="flex items-center justify-between cursor-pointer w-full p-[1.5rem] z-[9]">
								<div class="text-white text-big font-bold text-left">
									{{ slide.title }}
								</div>
								<div>
									<SvgsNavigationDoubleArrowWhite
										class="w-[20px] h-auto" />
								</div>
							</NuxtLink>
						</div>
					</Slide>
				</Carousel>
			</nav>
		</ClientOnly>
	</div>
</template>
