<script setup>
	let gallery;
</script>
<template>
	<section
		class="p-[1rem] max-w-[500px] min-h-[calc(100vh-80px)] m-auto flex flex-col">
		<div class="w-full grow relative">
			<NuxtImg
				provider="cloudinary"
				format="avif"
				preload
				fit="cover"
				src="https://res.cloudinary.com/dxizsaymj/image/upload/v1731083483/IMG_3554_kvdd4f.jpg"
				class="absolute inset-0 w-full h-full object-cover rounded-[--border-radius]" />
		</div>
		<br />
		<SvgsLogoNormal class="w-full h-auto mb-[5rem]" />
	</section>
</template>
