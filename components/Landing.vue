<script setup>
	const gallery = ref(0);
	let galleryInterval;
	const img2Src = ref('');
	const img3Src = ref('');
	const counter = ref(0);

	function checkState() {
		if (counter.value === 2) {
			galleryInterval = setInterval(() => {
				if (gallery.value < 2) {
					gallery.value++;
				} else {
					gallery.value = 0;
				}
			}, 5000);
		}
	}

	onMounted(() => {
		nextTick(() => {
			const image2 = document.images[1];
			const image3 = document.images[2];
			img2Src.value =
				'https://res.cloudinary.com/dxizsaymj/image/upload/v1731083487/IMG_3529_y4dlkz.jpg';
			img3Src.value =
				'https://res.cloudinary.com/dxizsaymj/image/upload/v1731083454/IMG_3611_d9sqye.jpg';
			image2.onload = () => {
				counter.value++;
				checkState();
			};
			image3.onload = () => {
				counter.value++;
				checkState();
			};
		});
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
				:src="img2Src"
				class="landing1 absolute inset-0 w-full h-full object-cover rounded-[--border-radius]"
				:class="{ hidden: gallery !== 1 }" />
			<NuxtImg
				provider="cloudinary"
				format="avif"
				:src="img3Src"
				class="landing2 absolute inset-0 w-full h-full object-cover rounded-[--border-radius]"
				:class="{ hidden: gallery !== 2 }" />
		</div>
		<br />
		<SvgsLogoNormal class="w-full h-auto mb-[5rem]" />
	</section>
</template>
