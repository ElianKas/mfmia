<script setup>
	const props = defineProps({ blok: Object });
	onMounted(() => {
		console.log(props.blok);
	});
</script>
<template>
	<main>
		<div>
			{{ blok.title }}
		</div>
		<div>
			{{ blok.description }}
		</div>
		<div>
			{{ blok.date }}
		</div>
		<div>
			<NuxtImg :src="blok.cover.filename" />
		</div>
		<div v-for="section in blok.moreSections">
			<div v-if="section.title">
				{{ section.title }}
			</div>
			<div v-if="section.description">
				{{ section.description }}
			</div>
			<!-- <div
				v-if="section.gallery"
				v-for="image in section.gallery">
				<NuxtImg :src="image.filename" />
			</div> -->
		</div>
	</main>
</template>
