<script setup>
	const props = defineProps({
		title: String,
		description: String,
		image: String,
	});
</script>
<template>
	<section
		class="w-full bg-[#000] p-[2rem] flex items-end justify-end min-h-[calc(100vh-80px-6rem)] relative rounded-[--border-radius]">
		<div></div>
		<h1
			class="text-big text-white font-bold absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
			{{ props.title }}
		</h1>
		<div class="flex max-w-[450px] gap-[2rem]">
			<p class="font-bold text-white text-right">
				{{ props.description }}
			</p>
			<slot></slot>
		</div>
	</section>
</template>
