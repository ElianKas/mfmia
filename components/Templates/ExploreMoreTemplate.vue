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
		class="px-[1rem] md:px-[3rem] md:flex md:gap-[4rem] my-[6rem]">
		<div class="text-center mb-[4rem]">
			<h3>{{ page }}</h3>
			<p>Du willst mehr wissen?</p>
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
						class="flex gap-[1rem]">
						<div class="w-[50%] border">{{ element.title }} logo</div>
						<div class="w-[50%] border">
							<h3>{{ element.title }}</h3>
							<p>{{ element.subtitle }}</p>
							<SvgsNavigationLongArrow class="w-[20px]" />
						</div>
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</aside>
</template>
