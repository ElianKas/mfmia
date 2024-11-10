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
	<div class="max-w-[--max-width] m-auto">
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
				<MapsBrunnenbauMap :data="data" />
			</div>
		</section>
		<section class="px-[3rem]">
			<div
				class="flex flex-wrap justify-between gap-[1rem] py-[1rem] md:border-b border-orange">
				<h2 class="text-orange">Projekte - Brunnenbau Karte</h2>
				<div v-if="data && data.stories">
					{{ data.stories.length }} Standorte
				</div>
				<div>Regionen: Yaounde NN; NW 150km</div>
			</div>
			<ClientOnly>
				<template #fallback>
					<div class="grid grid-rows-6 gap-[1rem] my-[1rem]">
						<div class="skeleton h-[24px]"></div>
						<div class="skeleton h-[24px]"></div>
						<div class="skeleton h-[24px]"></div>
						<div class="skeleton h-[24px]"></div>
						<div class="skeleton h-[24px]"></div>
						<div class="skeleton h-[24px]"></div>
					</div>
				</template>
				<div
					class="grid-cols-6 my-[1rem] gap-[1rem] hidden lg:grid"
					v-if="data && data.stories"
					v-for="(story, index) in data?.stories || []">
					<div>
						{{ data.stories.length - index }}
					</div>
					<div>{{ story.content.location }}</div>
					<div>{{ story.content.well }}</div>
					<div>{{ story.content.coordinates }}</div>
					<div>{{ story.content.group }}</div>
					<div>{{ story.content.year }}</div>
				</div>
				<div
					class="collapse collapse-arrow border-t rounded-none lg:hidden"
					v-if="data && data.stories"
					v-for="(story, index) in data.stories">
					<input
						type="radio"
						name="my-accordion-1" />
					<div class="collapse-title pl-[1rem]">
						{{ data.stories.length - index }}
						{{ story.content.location }}
					</div>
					<div class="collapse-content">
						<ul class="list-disc pl-[1rem]">
							<li>{{ story.content.well }}</li>
							<li>{{ story.content.coordinates }}</li>
							<li>{{ story.content.group }}</li>
							<li>{{ story.content.year }}</li>
						</ul>
					</div>
				</div>
			</ClientOnly>
		</section>
		<TemplatesExploreMoreTemplate
			:page="`Brunnenbau`"
			:content="[
				{
					link: 'link1',
					title: 'Vorgehen',
					subtitle: 'So gehen wir beim Brunnenbau vor',
					image: 'image1',
				},
				{
					link: 'link2',
					title: 'title2',
					subtitle: 'subtitle2',
					image: 'image2',
				},
			]" />
	</div>
</template>
