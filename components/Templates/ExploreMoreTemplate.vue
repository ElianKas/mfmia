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
	<aside>
		<div class="text-center">
			<h3>{{ page }}</h3>
			<p>Du willst mehr wissen?</p>
			<div>Übersicht {{ page }}</div>
		</div>
		<nav>
			<ul>
				<li v-for="element in content">
					<NuxtLink :to="element.link">
						<!-- SVG Component -->
						<h3>{{ element.title }}</h3>
						<p>{{ element.subtitle }}</p>
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</aside>
</template>
