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
		isDynamic: {
			type: Boolean,
			required: false,
			default: false,
		},
	});
	const baseLink = 'https://a.storyblok.com/f/311834/';
	const optimizedSrc = ref('');
	const isUpright = ref(false);

	function optimize() {
		let resolution = 800;
		if (window.innerWidth >= 768) {
			resolution = 1200;
		}
		const image = props.src.replace(baseLink, '');
		const part = image.slice(0, image.indexOf('/'));
		const [x, y] = part.split('x');
		console.log(x, y);
		if (x.parseInt() > y.parseInt()) {
			optimizedSrc.value = props.src + '/m/' + `${resolution}x0`;
			console.log('horizontal');
		} else {
			optimizedSrc.value = props.src + '/m/' + `0x${resolution}`;
			console.log('upright');
			if (props.isDynamic) {
				isUpright.value = true;
			}
		}
	}

	onMounted(() => {
		optimize();
	});
</script>
<template>
	<NuxtImg
		class="rounded-[--border-radius]"
		:class="{ 'max-w-[350px]': isUpright, 'm-auto': isUpright }"
		v-if="optimizedSrc !== ''"
		:src="optimizedSrc" />
</template>
