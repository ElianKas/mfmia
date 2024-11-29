<script setup>
	const props = defineProps({
		story: Object,
		prev: Object,
		next: Object,
	});
	/* const seeAlsoStories = useState('seeAlsoStories', () => {
		const prev = props.prev ? props.prev.content : null;
		const next = props.next ? props.next.content : null;
		return {
			prev,
			next,
		};
	}); */

	/* onMounted(() => {
		if (props.prev) console.log('prev', props.prev.content.date);
		console.log('current', props.story.content.date);
		if (props.next) console.log('next', props.next.content.date);
	}); */
</script>
<template>
	<NuxtLink
		v-if="story"
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
			<p class="font-bold">
				{{ story.content.title }}
			</p>
			<div class="self-end"><SvgsNavigationShortArrow /></div>
		</div>
	</NuxtLink>
</template>
