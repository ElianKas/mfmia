<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'news/aktuelles',
		is_startpage: false,
	});
	const props = defineProps({ blok: Object });
	const descriptionContent = computed(() => {
		if (props.blok.description.type === 'doc') {
			return renderRichText(props.blok.description);
		} else {
			return props.blok.description;
		}
	});
	const sortedData = ref(null);
	const moreSectionContent = ref([]);
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

	function findIndexLastNext() {
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
	}

	function sortData() {
		sortedData.value = data.stories.sort((a, b) => {
			const dateA = new Date(a.content.date);
			const dateB = new Date(b.content.date);
			return dateB - dateA;
		});
	}

	onMounted(() => {
		sortData();
		checkSectionContent();
		findIndexLastNext();
	});
</script>
<template>
	<article
		class="min-h-[100vh] max-w-[--max-width] m-auto px-[1rem] md:px-[3rem] mb-[10rem]">
		<section class="pb-[1.5rem]">
			<div
				v-if="!blok.cover || !blok.cover.filename"
				class="my-[1rem] md:my-[3rem] pt-[2rem] text-center">
				<p class="font-bold text-green">News</p>
				<p class="text-big text-orange font-bold">Aktuelles</p>
			</div>
			<div
				v-if="blok.cover && blok.cover.filename"
				class="text-center my-[1rem] md:my-[3rem] relative h-[500px] bg-[#000] rounded-[--border-radius]">
				<div class="z-[9] relative pt-[2rem]">
					<p class="font-bold text-white">News</p>
					<p class="text-big text-white font-bold">Aktuelles</p>
				</div>
				<StoryblokImage
					v-if="blok.cover && blok.cover.filename"
					:src="blok.cover.filename"
					class="absolute inset-0 w-full h-full object-cover opacity-80" />
			</div>
			<div class="max-w-[800px] m-auto">
				<h1
					class="font-bold text-big text-green mb-[1rem]"
					v-if="blok.title">
					{{ blok.title }}
				</h1>
				<div
					v-if="blok.description"
					v-html="descriptionContent"></div>
			</div>
		</section>
		<!-- storyblok moreSections render -->
		<TemplatesDynamicSection
			v-for="section in moreSectionContent"
			:key="section"
			v-if="moreSectionContent.length > 0"
			:section="section" />
		<!-- story navigation last/next -->
		<nav class="flex flex-col md:flex-row gap-[1rem] py-[5rem]">
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
			<p class="font-bold text-green">News</p>
			<h1 class="text-big text-orange font-bold">Aktuelles</h1>
			<br />
			<NuxtLink to="/news/aktuelles">
				<button class="btn bg-orange text-white">
					Zurück zur Übersicht
				</button>
			</NuxtLink>
		</div>
	</article>
</template>
