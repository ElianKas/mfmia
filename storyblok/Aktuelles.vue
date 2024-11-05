<script setup>
	const props = defineProps({ blok: Object });
	onMounted(() => {
		console.log(props.blok);
	});
</script>
<template>
	<main>{{ blok.title }}</main>
</template>
