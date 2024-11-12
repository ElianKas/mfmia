<script setup>
	const props = defineProps({
		content: {
			type: Array,
			required: true,
		},
		page: {
			type: String,
			required: true,
		},
	});
</script>
<template>
	<aside
		class="px-[1rem] md:px-[3rem] md:flex md:gap-[4rem] my-[6rem] lg:mt-[10rem] font-bold">
		<div class="text-center mb-[4rem]">
			<h2 class="text-big text-green">{{ page }}</h2>
			<p class="text-green">Du willst mehr wissen?</p>
			<br />
			<div class="border-b inline">
				<SvgsNavigationLongArrowBack
					class="w-[20px] h-auto inline mb-[5px]" />
				<div class="inline ml-[10px]">Übersicht {{ page }}</div>
			</div>
		</div>
		<nav>
			<ul class="flex flex-col md:flex-row md:flex-wrap gap-[4rem]">
				<li v-for="element in content">
					<NuxtLink
						:to="element.link"
						class="flex gap-[1.5rem]">
						<div class="w-[50%] border">{{ element.title }} logo</div>
						<div class="w-[50%]">
							<h3 class="text-green">{{ element.title }}</h3>
							<p class="font-normal">{{ element.subtitle }}</p>
							<SvgsNavigationLongArrow class="w-[20px]" />
						</div>
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</aside>
</template>
