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

	function slideTo(index) {
		currentSlide.value = index;
	}

	onMounted(() => {
		console.log('content', props.section);
	});
</script>
<template>
	<div
		class="md:w-[50%] m-auto"
		:class="{ 'md:w-[500px]': props.section.gallery.length === 0 }"
		v-if="props.section.title || props.section.description">
		<h3
			class="font-bold text-big text-green"
			v-if="props.section.title">
			{{ props.section.title }}
		</h3>
		<div v-html="descriptionContent"></div>
	</div>
	<div
		v-if="section.gallery.length > 0"
		class="md:w-[50%] m-auto"
		:class="{
			'md:w-[500px]': !section.title && !section.description,
		}">
		<StoryblokImage
			v-if="section.gallery.length === 1"
			:src="section.gallery[0].image"
			:alt="section.gallery[0].alt"
			class="rounded-[--border-radius] max-w-[400px]" />
		<div
			v-if="section.gallery.length > 1"
			class="max-w-[400px]">
			<Carousel
				v-model="currentSlide"
				:wrap-around="true">
				<Slide
					v-for="image in section.gallery"
					:key="image">
					<StoryblokImage
						class="rounded-[--border-radius]"
						:src="image.image"
						:alt="image.alt" />
				</Slide>
			</Carousel>
			<br />
			<Carousel
				v-model="currentSlide"
				:items-to-show="3"
				:wrap-around="true">
				<Slide
					@click="slideTo(index)"
					v-for="(image, index) in section.gallery"
					:key="image"
					class="cursor-pointer">
					<StoryblokImage
						class="rounded-[--border-radius] w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]"
						:src="image.image"
						:alt="image.alt" />
				</Slide>
			</Carousel>
		</div>
	</div>
</template>
