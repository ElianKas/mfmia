<script setup>
	const gallery = ref(0);
	let galleryInterval;

	/* function handleHover() {
		clearInterval(galleryInterval);
	}

	function handleLeave() {
		galleryInterval = setInterval(() => {
			if (gallery.value < 2) {
				gallery.value++;
			} else {
				gallery.value = 0;
			}
		}, 3000);
	} */

	onMounted(() => {
		galleryInterval = setInterval(() => {
			if (gallery.value < 2) {
				gallery.value++;
			} else {
				gallery.value = 0;
			}
		}, 3000);
	});
	onBeforeUnmount(() => {
		clearInterval(galleryInterval);
	});
</script>
<template>
	<section
		class="p-[1rem] max-w-[500px] min-h-[calc(100vh-80px)] m-auto flex flex-col">
		<div class="w-full grow relative z-[-99]">
			<NuxtImg
				provider="cloudinary"
				format="avif"
				src="https://res.cloudinary.com/dxizsaymj/image/upload/v1731083483/IMG_3554_kvdd4f.jpg"
				class="landing0 absolute inset-0 w-full h-full object-cover rounded-[--border-radius]"
				:class="{ hidden: gallery !== 0 }" />
			<NuxtImg
				provider="cloudinary"
				format="avif"
				loading="lazy"
				src="https://res.cloudinary.com/dxizsaymj/image/upload/v1731083487/IMG_3529_y4dlkz.jpg"
				class="landing1 absolute inset-0 w-full h-full object-cover rounded-[--border-radius]"
				:class="{ hidden: gallery !== 1 }" />
			<NuxtImg
				provider="cloudinary"
				format="avif"
				loading="lazy"
				src="https://res.cloudinary.com/dxizsaymj/image/upload/v1731083454/IMG_3611_d9sqye.jpg"
				class="landing2 absolute inset-0 w-full h-full object-cover rounded-[--border-radius]"
				:class="{ hidden: gallery !== 2 }" />
		</div>
		<br />
		<SvgsLogoNormal class="w-full h-auto mb-[5rem]" />
	</section>
</template>
