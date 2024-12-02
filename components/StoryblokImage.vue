<script setup>
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
	const baseLink = 'https://a.storyblok.com/f/311834/';
	const optimizedSrc = ref('');

	function optimize() {
		let resolution = 900;
		if (window.innerWidth >= 768) {
			resolution = 1200;
		}
		const image = props.src.replace(baseLink, '');
		const part = image.slice(0, image.indexOf('/'));
		const [x, y] = part.split('x');
		if (x > y) {
			optimizedSrc.value = props.src + '/m/' + `${resolution}x0`;
		} else {
			optimizedSrc.value = props.src + '/m/' + `0x${resolution}`;
		}
	}

	onMounted(() => {
		optimize();
	});
</script>
<template>
	<NuxtImg
		class="rounded-[--border-radius]"
		v-if="optimizedSrc !== ''"
		:src="optimizedSrc" />
</template>
