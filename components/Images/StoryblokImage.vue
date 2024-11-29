<script setup>
	const size = ref(null);
	const baseLink = 'https://a.storyblok.com/f/311834/';
	const props = defineProps({
		src: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: false,
		},
		loading: {
			type: String,
			required: false,
		},
	});

	function calcSize() {
		const image = props.src.replace(baseLink, '');
		const part = image.slice(0, image.indexOf('/'));
		const [x, y] = part.split('x');
		size.value = x * y;
	}

	onMounted(() => {
		calcSize();
	});
</script>
<template>
	<!-- quality="80" === original -->
	<NuxtImg
		provider="storyblok"
		:src="props.src"
		format="webp"
		loading="lazy"
		:alt="props.alt"
		v-if="size && size < 1000000" />
	<NuxtImg
		provider="storyblok"
		:src="props.src"
		format="webp"
		quality="60"
		loading="lazy"
		:alt="props.alt"
		v-if="size && size > 5000000 && size < 10000000" />
	<NuxtImg
		provider="storyblok"
		:src="props.src"
		format="webp"
		loading="lazy"
		:alt="props.alt"
		v-if="size && size > 10000001 && size < 15000000"
		quality="30" />
	<NuxtImg
		provider="storyblok"
		:src="props.src"
		format="webp"
		loading="lazy"
		:alt="props.alt"
		v-if="size && size > 15000001 && size < 20000000"
		quality="15" />
	<NuxtImg
		provider="storyblok"
		:src="props.src"
		format="webp"
		:loading="props.loading"
		:alt="props.alt"
		v-if="size && size > 20000001"
		quality="5" />
</template>
