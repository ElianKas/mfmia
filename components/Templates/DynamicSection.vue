<script setup>
const props = defineProps({ section: Object });
const currentIndex = ref(0);
const thumbnail = ref(null);

function checkFormat(src) {
	const isVideo = src.includes('.mp4') || src.includes('.mov');
	return isVideo;
}

function pauseVideos() {
	const videos = document.querySelectorAll('.video');
	videos.forEach((video) => {
		video.pause();
	});
}
</script>
<template>
	<section class="py-[1.5rem]">
		<StoryblokImage v-if="section.gallery.length === 1" :isDynamic="true" :src="section.gallery[0].image"
			:alt="section.gallery[0].alt" class="w-full mb-[1.5rem] max-h-[500px] object-cover" />
		<div v-if="section.gallery.length > 1" class="mb-[1.5rem]">
			<div v-for="(image, index) in section.gallery" :key="image" :class="{ hidden: index !== currentIndex }"
				class="flex items-center justify-center max-h-[500px] w-full overflow-hidden rounded-[--border-radius]">
				<StoryblokImage v-if="!checkFormat(image.image)" :isDynamic="true" :src="image.image" :alt="image.alt"
					class="w-full h-full object-cover" />
				<video controls playsinline controlsList="nodownload" disablePictureInPicture
					@contextmenu.prevent="() => { return false }" v-if="checkFormat(image.image)"
					:src="image.image + '#t=0.1'" class="video max-h-[500px] rounded-[--border-radius]"></video>
			</div>
			<div class="py-[.25rem]"></div>
			<div class="w-full flex sm:justify-center flex-wrap gap-[.5rem]">
				<div v-for="(image, index) in section.gallery" :key="image">
					<StoryblokImage v-if="!checkFormat(image.image)" :src="image.image" :alt="image.alt" @click="
						() => {
							pauseVideos();
							currentIndex = index;
						}
					" class="w-[100px] aspect-[3/2] object-cover cursor-pointer pointer-events-auto"
						@contextmenu.prevent="() => { return false }" />
					<div class="w-[100px] aspect-[3/2] object-cover cursor-pointer relative" v-if="checkFormat(image.image)"
						@click="
							() => {
								pauseVideos();
								currentIndex = index;
							}
						">
						<SvgsUIPlay class="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-[#000] scale-[1.1]" />
						<SvgsUIPlay class="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-white" />
						<video playsinline :src="image.image + '#t=0.1'" class="rounded-[--border-radius] object-cover w-full h-full"
							@contextmenu.prevent="() => { return false }"></video>
					</div>
				</div>
			</div>
		</div>
		<div class="max-w-[800px] m-auto">
			<h2 class="font-bold text-big text-green mb-[1rem]" v-if="props.section.title">
				{{ props.section.title }}
			</h2>
			<div class="sb-richtext">
				<StoryblokRichText v-if="props.section.description" :doc="props.section.description">
				</StoryblokRichText>
			</div>
		</div>
	</section>
</template>
