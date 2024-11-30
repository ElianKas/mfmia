<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'storys',
		is_startpage: false,
	});
	const props = defineProps({ blok: Object });
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
		class="min-h-[100vh] max-w-[--max-width] m-auto px-[1rem] md:px-[3rem] mb-[10rem]">
		<div class="text-center my-[5rem]">
			<p class="font-bold text-green">
				Geschichten, wie wir Kamerun erleben.
			</p>
			<h1 class="text-big text-orange font-bold">Storys</h1>
		</div>
		<section
			class="flex flex-col md:flex-row-reverse gap-[2rem] lg:gap-[4rem] xl:gap-[6rem]">
			<div class="md:w-[50%]">
				<h2
					class="font-bold text-big text-green"
					v-if="blok.title">
					{{ blok.title }}
				</h2>
				<p v-if="blok.description">{{ blok.description }}</p>
			</div>
			<div class="md:w-[50%] m-auto">
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
		<TemplatesDynamicSection
			:moreSectionContent="moreSectionContent" />
		<!-- story navigation last/next -->
		<nav class="flex flex-col md:flex-row gap-[1rem] py-[2rem]">
			<NuxtLink
				v-if="indexLast !== -1"
				:to="sortedData[indexLast].slug"
				class="px-[2rem] py-[1rem] bg-[#F7F7F7] w-full rounded-[--border-radius] flex gap-[2rem] items-center">
				<SvgsNavigationDoubleArrow class="rotate-180" />
				<div>
					<p class="text-green font-bold">Story</p>
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
					<p class="text-green font-bold">Story</p>
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
			<NuxtLink to="/storys">
				<button class="btn bg-orange text-white">
					Zurück zur Übersicht
				</button>
			</NuxtLink>
		</div>
	</article>
</template>
