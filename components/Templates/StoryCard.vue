<script setup>
	const props = defineProps({
		story: Object,
	});
	onMounted(() => {
		console.log(props.story);
	});
</script>
<template>
	<NuxtLink
		:to="story.full_slug"
		class="h-[500px] w-full rounded-[--border-radius] relative">
		<NuxtImg
			provider="storyblok"
			format="avif"
			placeholder
			class="rounded-[--border-radius] absolute inset-0 w-full h-full object-cover"
			:src="story.content.cover.filename"
			:alt="story.content.title" />
		<div
			class="backdrop-blur h-[150px] p-[1rem] absolute text-white bottom-0 w-full rounded-b-[--border-radius] flex flex-col justify-between">
			<p>
				{{ story.content.title }}
			</p>
			<div class="self-end"><SvgsNavigationShortArrow /></div>
		</div>
	</NuxtLink>
</template>
