<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'news/aktuelles',
		is_startpage: false,
	});
	const props = defineProps({ blok: Object });
	const sortedData = ref(null);
	const moreSectionContent = ref([]);
	const currentSlide = ref(0);
	const indexLast = ref(-1);
	const indexNext = ref(-1);

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
		checkSectionContent();
		sortedData.value = data.stories.sort((a, b) => {
			const dateA = new Date(a.content.date);
			const dateB = new Date(b.content.date);
			return dateB - dateA;
		});
		indexLast.value =
			sortedData.value.findIndex(
				(story) => story.content._uid === props.blok._uid
			) - 1;
		indexNext.value =
			sortedData.value.findIndex(
				(story) => story.content._uid === props.blok._uid
			) + 1;
		if (indexLast.value < 0) {
			indexLast.value = -1;
		}
		if (indexNext.value >= sortedData.value.length) {
			indexNext.value = -1;
		}
	});
</script>
<template>
	<article
		class="min-h-[100vh] max-w-[--max-width] m-auto px-[2rem] mb-[10rem]">
		<div class="text-center my-[5rem]">
			<p class="font-bold text-green">
				Geschichten, wie wir Kamerun erleben.
			</p>
			<h1 class="text-big text-orange font-bold">Storys</h1>
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
								quality="10"
								class="rounded-[--border-radius] w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover"
								:src="image.image"
								:alt="image.alt" />
						</Slide>
					</Carousel>
				</div>
			</div>
		</section>
		<!-- story navigation last/next -->
		<nav class="flex flex-col md:flex-row gap-[1rem] py-[2rem]">
			<NuxtLink
				v-if="indexLast !== -1"
				:to="sortedData[indexLast].slug"
				class="px-[2rem] py-[1rem] bg-[#F7F7F7] w-full rounded-[--border-radius] flex gap-[2rem] items-center">
				<SvgsNavigationDoubleArrow class="rotate-180" />
				<div>
					<p class="font-bold">
						<span class="text-orange">Aktuelles </span>
						{{
							new Date(
								sortedData[indexLast].content.date
							).toLocaleDateString('de-DE', {
								day: '2-digit',
								month: '2-digit',
								year: 'numeric',
							})
						}}
					</p>
					<p class="font-bold">
						{{ sortedData[indexLast].content.title }}
					</p>
				</div>
			</NuxtLink>
			<div
				class="w-full"
				v-if="indexLast === -1 || indexNext === -1"></div>
			<NuxtLink
				v-if="indexNext !== -1"
				:to="sortedData[indexNext].slug"
				class="px-[2rem] py-[1rem] bg-[#F7F7F7] w-full rounded-[--border-radius] flex justify-between gap-[2rem] items-center">
				<div>
					<p class="font-bold">
						<span class="text-orange">Aktuelles </span>
						{{
							new Date(
								sortedData[indexNext].content.date
							).toLocaleDateString('de-DE', {
								day: '2-digit',
								month: '2-digit',
								year: 'numeric',
							})
						}}
					</p>
					<p class="font-bold">
						{{ sortedData[indexNext].content.title }}
					</p>
				</div>
				<SvgsNavigationDoubleArrow />
			</NuxtLink>
		</nav>
		<div class="text-center my-[5rem]">
			<p class="font-bold text-green">
				Geschichten, wie wir Kamerun erleben.
			</p>
			<h1 class="text-big text-orange font-bold">Storys</h1>
			<br />
			<NuxtLink to="/news/aktuelles">
				<button class="btn bg-orange text-white">
					Zurück zur Übersicht
				</button>
			</NuxtLink>
		</div>
	</article>
</template>
