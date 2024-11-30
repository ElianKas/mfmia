<script setup>
	const props = defineProps({ moreSectionContent: Array });
	const currentSlide = ref(0);

	function slideTo(index) {
		currentSlide.value = index;
	}
</script>
<template>
	<section
		class="my-[3rem] md:my-[6rem] flex flex-col gap-[2rem] lg:gap-[4rem] xl:gap-[6rem]"
		:class="{
			'md:flex-row': i % 2 === 0,
			'md:flex-row-reverse': i % 2 !== 0,
		}"
		v-if="moreSectionContent.length > 0"
		v-for="(section, i) in moreSectionContent"
		:key="section">
		<div
			class="md:w-[50%] m-auto"
			:class="{ 'md:w-[500px]': section.gallery.length === 0 }"
			v-if="section.title || section.description">
			<h3
				class="font-bold text-big text-green"
				v-if="section.title">
				{{ section.title }}
			</h3>
			<p v-if="section.description">{{ section.description }}</p>
		</div>
		<div
			v-if="section.gallery.length > 0"
			class="md:w-[50%] m-auto"
			:class="{
				'md:w-[500px]': !section.title && !section.description,
			}">
			<ImagesStoryblokImage
				v-if="section.gallery.length === 1"
				:src="section.gallery[0].image"
				:alt="section.gallery[0].alt"
				class="rounded-[--border-radius] md:w-[80%] md:m-auto h-auto" />
			<div v-if="section.gallery.length > 1">
				<Carousel
					v-model="currentSlide"
					:wrap-around="true">
					<Slide
						v-for="image in section.gallery"
						:key="image"
						class="md:px-[2rem]">
						<ImagesStoryblokImage
							class="rounded-[--border-radius] w-full md:m-auto h-auto"
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
						class="md:px-[2rem] cursor-pointer">
						<ImagesStoryblokImage
							class="rounded-[--border-radius] w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover"
							:src="image.image"
							:alt="image.alt" />
					</Slide>
				</Carousel>
			</div>
		</div>
	</section>
</template>
