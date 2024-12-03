<script setup>
	const props = defineProps({
		story: Object,
	});
</script>
<template>
	<NuxtLink
		v-if="story"
		:to="story.full_slug"
		class="h-[500px] w-full rounded-[--border-radius] relative flex items-end">
		<StoryblokImage
			class="rounded-[--border-radius] absolute inset-0 w-full h-full object-cover"
			:src="story.content.cover.filename"
			:alt="story.content.title" />
		<div
			class="backdrop-blur h-[180px] p-[1rem] relative text-white w-full rounded-b-[--border-radius] flex flex-col justify-between">
			<p class="font-bold">
				{{ story.content.title }}
			</p>
			<div class="absolute bottom-[1rem] right-[1rem]">
				<SvgsNavigationShortArrow />
			</div>
		</div>
	</NuxtLink>
</template>
