<script setup>
	const props = defineProps({ section: Object });
	const descriptionContent = computed(() => {
		if (props.section.description.type === 'doc') {
			return renderRichText(props.section.description);
		} else {
			return props.section.description;
		}
	});
	const currentIndex = ref(0);
</script>
<template>
	<section class="py-[1.5rem]">
		<StoryblokImage
			v-if="section.gallery.length === 1"
			:isDynamic="true"
			:src="section.gallery[0].image"
			:alt="section.gallery[0].alt"
			class="w-full mb-[1.5rem] max-h-[500px] object-cover" />
		<div
			v-if="section.gallery.length > 1"
			class="mb-[1.5rem]">
			<StoryblokImage
				v-for="(image, index) in section.gallery"
				:src="image.image"
				:alt="image.alt"
				:class="{ hidden: index !== currentIndex }"
				class="w-full mb-[1rem] max-h-[500px] object-cover" />
			<div class="w-full flex flex-wrap gap-[.5rem]">
				<StoryblokImage
					v-for="(image, index) in section.gallery"
					:key="image"
					:src="image.image"
					:alt="image.alt"
					@click="
						() => {
							currentIndex = index;
						}
					"
					class="w-[100px] aspect-[3/2] object-cover cursor-pointer" />
			</div>
		</div>
		<div class="max-w-[800px] m-auto">
			<h2
				class="font-bold text-big text-green mb-[1rem]"
				v-if="props.section.title">
				{{ props.section.title }}
			</h2>
			<div v-html="descriptionContent"></div>
		</div>
	</section>
</template>
