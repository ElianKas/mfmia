<script setup>
	const props = defineProps({ blok: Object });
	const moreSectionContent = ref([]);

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
		console.log(moreSectionContent.value);
	}

	onMounted(() => {
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
			<div class="md:w-[50%]">
				<h2
					class="font-bold text-big text-green"
					v-if="blok.title">
					{{ blok.title }}
				</h2>
				<p v-if="blok.description">{{ blok.description }}</p>
			</div>
			<div class="md:w-[50%]">
				<NuxtImg
					class="rounded-[--border-radius] md:w-[80%] md:m-auto h-auto"
					:src="blok.cover.filename"
					v-if="blok.cover" />
			</div>
		</section>
		<section
			class="my-[3rem]"
			v-if="moreSectionContent.length > 0"
			v-for="section in moreSectionContent">
			<h3
				class="font-bold text-big text-green"
				v-if="section.title">
				{{ section.title }}
			</h3>
			<p v-if="section.description">{{ section.description }}</p>
		</section>
	</article>
</template>
