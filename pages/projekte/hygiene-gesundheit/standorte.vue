<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'projekte/hygiene-gesundheit',
		is_startpage: false,
	});
</script>
<template>
	<div>
		<TemplatesFirstParagraphProjects>
			<template #logo><SvgsIconsHygieneStandorte /></template>
			<template #title>Standorte</template>
			<template #subtitle
				>Wo der Verein Toilettenhäuser baut
			</template>
			<template #description
				>Wir bauen Toilettenhäuser in ländlichen Regionen Kameruns,
				insbesondere in der Region Leng-Tombo. Der Ort Leng-Tombo
				liegt etwa 150 km östlich von Yaoundé, der Hauptstadt
				Kameruns.
				<br />
				<br />
				Weitere Toilettenhäuser werden wir im Gebiet Obala, ca. 50 km
				nördlich von Yaoundé, bauen, wo wir auch Brunnen errichten und
				eine Schule unterstützen.
			</template>
			<template #image><MapsMap :data="data" /></template>
		</TemplatesFirstParagraphProjects>
		<section
			class="px-[1rem] md:px-[3rem] mt-[3rem] max-w-[--max-width-big] m-auto">
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
		<LazyTemplatesExploreMoreTemplate
			:page="{
				title: 'Toilettenhäuser',
			}">
			<LinkCardsHygieneToilettenhäuser />
			<LinkCardsHygieneVorgehen />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
