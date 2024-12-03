<script setup>
	const props = defineProps({
		data: Object,
	});

	onMounted(() => {
		console.log('data', props.data);
	});
</script>
<template>
	<section class="px-[1rem] md:px-[3rem] mt-[3rem]">
		<div
			class="flex flex-wrap justify-between gap-[1rem] py-[1rem] md:border-b border-orange font-bold">
			<h2 class="text-orange">
				Projekte - <slot name="name"></slot> Karte
			</h2>
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
				:class="{
					collapse:
						story.content.images && story.content.images.length > 0,
					'collapse-arrow':
						story.content.images && story.content.images.length > 0,
				}"
				v-if="data && data.stories"
				v-for="(story, index) in data?.stories || []">
				<input
					type="checkbox"
					v-if="
						story.content.images && story.content.images.length > 0
					" />
				<div
					class="collapse-title grid-cols-[50px_1fr_1fr_1fr_1fr_50px] my-[1rem] gap-[1rem] hidden lg:grid">
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
				<!-- collapse content -->
				<div
					:class="{
						'collapse-content':
							story.content.images && story.content.images.length > 0,
					}">
					<div class="flex gap-[2rem] flex-wrap">
						<StoryblokImage
							class="h-[300px] w-auto"
							:src="image.filename"
							v-for="image in story.content.images" />
					</div>
				</div>
			</div>
			<!-- mobile -->
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
