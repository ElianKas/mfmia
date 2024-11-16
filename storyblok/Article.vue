<script setup>
	const props = defineProps({ blok: Object });
	const moreSectionContent = ref([]);
	const currentSlide = ref(0);

	function checkSectionContent() {
		props.blok.moreSections.forEach((section) => {
			const newSection = {
				title: null,
				description: null,
				gallery: [],
			};
			if (section.title) {
				newSection.title = section.title;
			}
			if (section.description) {
				newSection.description = section.description;
			}
			if (section.gallery) {
				section.gallery.forEach((galleryItem) => {
					newSection.gallery.push({
						image: galleryItem.filename,
						alt: galleryItem.alt,
					});
				});
			}
			//if section has content
			if (
				newSection.title ||
				newSection.description ||
				newSection.gallery.length > 0
			) {
				moreSectionContent.value.push(newSection);
			}
		});
	}

	function slideTo(index) {
		currentSlide.value = index;
	}

	onMounted(() => {
		console.log(props.blok);
		checkSectionContent();
	});
</script>
<template>
	<article
		class="min-h-[100vh] max-w-[--max-width] m-auto px-[2rem] mb-[10rem]">
		<div class="text-center my-[5rem]">
			<p class="font-bold text-green">
				Geschichten, wie wir Kamerun erleben.
			</p>
			<h1 class="text-big text-orange">Storys</h1>
		</div>
		<section
			class="flex flex-col md:flex-row-reverse gap-[2rem] lg:gap-[4rem] xl:gap-[6rem]">
			<div
				class="md:w-[50%] m-auto"
				:class="{ 'md:w-[500px]': blok.cover.filename === '' }">
				<h2
					class="font-bold text-big text-green"
					v-if="blok.title">
					{{ blok.title }}
				</h2>
				<p v-if="blok.description">{{ blok.description }}</p>
			</div>
			<div
				class="md:w-[50%] m-auto"
				v-if="blok.cover.filename !== ''">
				<NuxtImg
					provider="storyblok"
					format="avif"
					placeholder
					class="rounded-[--border-radius] md:w-[80%] md:m-auto h-auto"
					:src="blok.cover.filename"
					v-if="blok.cover" />
			</div>
		</section>
		<!-- storyblok moreSections render -->
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
				<NuxtImg
					provider="storyblok"
					format="avif"
					placeholder
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
							<NuxtImg
								provider="storyblok"
								format="avif"
								placeholder
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
							<NuxtImg
								provider="storyblok"
								format="avif"
								placeholder
								quality="10"
								class="rounded-[--border-radius] w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover"
								:src="image.image"
								:alt="image.alt" />
						</Slide>
					</Carousel>
				</div>
			</div>
		</section>
		<div class="text-center my-[5rem]">
			<p class="font-bold text-green">
				Geschichten, wie wir Kamerun erleben.
			</p>
			<h1 class="text-big text-orange">Storys</h1>
			<br />
			<button class="btn bg-orange text-white">
				Zurück zur Übersicht
			</button>
		</div>
	</article>
</template>
