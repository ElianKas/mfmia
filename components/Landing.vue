<script setup>
	const gallery = ref(0);
	let galleryInterval;

	onMounted(() => {
		galleryInterval = setInterval(() => {
			if (gallery.value < 2) {
				gallery.value++;
			} else {
				gallery.value = 0;
			}
		}, 5000);
	});
	onBeforeUnmount(() => {
		clearInterval(galleryInterval);
	});
</script>
<template>
	<section
		class="p-[1rem] max-w-[500px] min-h-[calc(100vh-80px)] m-auto flex flex-col justify-center">
		<div
			class="w-full grow max-h-[500px] relative bg-orange rounded-[--border-radius]">
			<StoryblokImage
				:class="{ hidden: gallery !== 0 }"
				src="https://a.storyblok.com/f/311834/1219x1200/cc4f38bb40/bildung-ubersicht.png"
				class="landing0 absolute inset-0 w-full h-full object-cover rounded-[--border-radius]" />
			<StoryblokImage
				:class="{ hidden: gallery !== 1 }"
				src="https://a.storyblok.com/f/311834/6000x4000/a72a3107a5/img_3401_wmahxd.jpg"
				class="landing1 absolute inset-0 w-full h-full object-cover rounded-[--border-radius]" />
			<StoryblokImage
				:class="{ hidden: gallery !== 2 }"
				src="https://a.storyblok.com/f/311834/6000x4000/9da897f2f7/img_3611_1_n9iqtc.jpg"
				class="landing2 absolute inset-0 w-full h-full object-cover rounded-[--border-radius]" />
		</div>
		<br />
		<SvgsLogoNormal class="w-full h-auto mb-[5rem]" />
	</section>
</template>
