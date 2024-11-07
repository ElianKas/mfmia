<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'projekte/brunnenbau',
		is_startpage: false,
	});

	onMounted(() => {
		data.stories.forEach((story) => {
			console.log(story.content.coordinates);
		});
	});
</script>
<template>
	<LMap
		style="height: 350px"
		:zoom="13"
		:center="[4.184692, 11.581174]"
		:use-global-leaflet="false">
		<LTileLayer
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
			layer-type="base"
			name="OpenStreetMap" />
	</LMap>
</template>
