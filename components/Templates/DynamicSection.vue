<script setup>
	const props = defineProps({ section: Object });
	const descriptionContent = computed(() => {
		if (
			props.section.description &&
			props.section.description.type === 'doc'
		) {
			return renderRichText(props.section.description);
		} else {
			return props.section.description;
		}
	});
	const currentIndex = ref(0);

	function checkFormat(src) {
		const isVideo = src.includes('.mp4') || src.includes('.mov');
		return isVideo;
	}

	onMounted(() => {
		console.log('section', props.section.gallery);
	});
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
			<div
				v-for="(image, index) in section.gallery"
				:key="image"
				class="mb-[1rem] max-h-[500px] w-full overflow-hidden rounded-[--border-radius]">
				<StoryblokImage
					v-if="!checkFormat(image.image)"
					:isDynamic="true"
					:src="image.image"
					:alt="image.alt"
					:class="{ hidden: index !== currentIndex }"
					class="w-full h-full object-cover" />
				<video
					controls
					playsinline
					v-if="checkFormat(image.image)"
					:src="image.image"
					:class="{ hidden: index !== currentIndex }"
					class="w-full h-full object-cover"></video>
			</div>
			<div
				class="w-full flex sm:justify-center flex-wrap gap-[.5rem]">
				<div
					v-for="(image, index) in section.gallery"
					:key="image">
					<StoryblokImage
						v-if="!checkFormat(image.image)"
						:src="image.image"
						:alt="image.alt"
						@click="
							() => {
								currentIndex = index;
							}
						"
						class="w-[100px] aspect-[3/2] object-cover cursor-pointer pointer-events-auto" />
					<video
						playsinline
						v-if="checkFormat(image.image)"
						@click="
							() => {
								currentIndex = index;
							}
						"
						:src="image.image"
						class="w-[100px] aspect-[3/2] object-cover cursor-pointer pointer-events-auto rounded-[--border-radius]"></video>
				</div>
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
