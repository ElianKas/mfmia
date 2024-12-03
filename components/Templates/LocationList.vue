<script setup>
	const props = defineProps({
		data: Object,
	});
</script>
<template>
	<section class="px-[1rem] md:px-[3rem] mt-[3rem]">
		<div
			class="flex flex-wrap justify-between gap-[1rem] py-[1rem] md:border-b border-orange font-bold">
			<h2 class="text-orange">Projekte - Brunnenbau Karte</h2>
			<div v-if="data && data.stories">
				{{ data.stories.length }} Standorte
			</div>
			<div>Regionen: Yaounde NN; NW 150km</div>
		</div>
		<ClientOnly>
			<template #fallback>
				<div class="mt-[1rem]">
					<div
						class="skeleton h-[42px] md:h-[27px] mb-[1rem]"
						v-for="entry in data.stories.length"></div>
				</div>
			</template>
			<div
				class="grid-cols-[50px_1fr_1fr_1fr_1fr_50px] my-[1rem] gap-[1rem] hidden lg:grid"
				v-if="data && data.stories"
				v-for="(story, index) in data?.stories || []">
				<div class="font-bold">
					{{ data.stories.length - index }}
				</div>
				<div class="font-bold">
					{{ story.content.location }}
				</div>
				<div>
					{{ story.content.well }}
				</div>
				<div>
					{{ story.content.coordinates }}
				</div>
				<div>
					{{ story.content.group }}
				</div>
				<div class="justify-self-end">
					{{ story.content.year }}
				</div>
			</div>
			<div
				class="collapse collapse-arrow border-t rounded-none lg:hidden"
				v-if="data && data.stories"
				v-for="(story, index) in data.stories">
				<input
					type="radio"
					name="my-accordion-1" />
				<div class="collapse-title px-0">
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
</template>
