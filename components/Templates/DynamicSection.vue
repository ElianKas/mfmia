<script setup>
	const props = defineProps({ section: Object });
	const currentSlide = ref(0);
	const descriptionContent = computed(() => {
		if (props.section.description.type === 'doc') {
			return renderRichText(props.section.description);
		} else {
			return props.section.description;
		}
	});
</script>
<template>
	<section class="py-[1.5rem]">
		<StoryblokImage
			v-if="section.gallery.length === 1"
			:isDynamic="true"
			:src="section.gallery[0].image"
			:alt="section.gallery[0].alt"
			class="w-full mb-[1rem] max-h-[500px] object-cover" />
		<div class="max-w-[800px] m-auto">
			<h2
				class="font-bold text-big text-green"
				v-if="props.section.title">
				{{ props.section.title }}
			</h2>
			<div v-html="descriptionContent"></div>
		</div>
	</section>
</template>
