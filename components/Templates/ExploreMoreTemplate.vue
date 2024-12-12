<script setup>
	const props = defineProps({
		page: {
			type: Object,
			required: true,
		},
	});
</script>
<template>
	<aside
		class="px-[1rem] md:px-[3rem] md:flex md:gap-[8rem] font-bold m-auto max-w-[1800px] py-[2rem] md:py-[4rem]">
		<div class="mb-[2rem] self-center max-w-[290px]">
			<h2 class="text-big text-green">{{ page.title }}</h2>
			<br />
			<p class="text-green">Du willst mehr wissen?</p>
			<br />
			<NuxtLink
				v-if="page.link"
				:to="page.link"
				class="border-b inline">
				<SvgsNavigationLongArrowBack
					class="w-[20px] h-auto inline mb-[5px]" />
				<div class="inline ml-[10px]">Übersicht {{ page.title }}</div>
			</NuxtLink>
		</div>
		<nav>
			<ul class="flex flex-col md:flex-row md:flex-wrap gap-[4rem]">
				<slot></slot>
			</ul>
		</nav>
	</aside>
</template>
