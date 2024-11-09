<script setup>
	const props = defineProps({
		data: Object,
	});
	const { $gsap } = useNuxtApp();
	let mm = $gsap.matchMedia();
	const coordinates = ref([]);

	function convertDMSToDD(degrees, minutes, seconds, direction) {
		var dd =
			parseFloat(degrees) +
			parseFloat(minutes) / 60 +
			parseFloat(seconds) / (60 * 60);
		if (direction == 'S' || direction == 'W') {
			dd = dd * -1;
		} // Don't do anything for N or E
		return dd;
	}

	onMounted(() => {
		props.data.stories.forEach((story) => {
			if (story.content.coordinates.includes(',')) {
				const [lat, lon] = story.content.coordinates.split(',');
				coordinates.value.push({
					lat: parseFloat(lat),
					lon: parseFloat(lon),
				});
			} else {
				const [lat, lon] = story.content.coordinates.split(' ');
				const [latDir, latDeg, latMin, latSec] = lat
					.match(/([NSEW])(\d+)[^\d]+(\d+)[^\d]+(\d+(\.\d+)?)/)
					.slice(1);
				const [lonDir, lonDeg, lonMin, lonSec] = lon
					.match(/([NSEW])(\d+)[^\d]+(\d+)[^\d]+(\d+(\.\d+)?)/)
					.slice(1);
				coordinates.value.push({
					lat: convertDMSToDD(latDeg, latMin, latSec, latDir),
					lon: convertDMSToDD(lonDeg, lonMin, lonSec, lonDir),
				});
			}
		});

		mm.add('(min-width: 768px)', () => {
			return () => {};
		});
	});
</script>
<template>
	<LMap
		style="height: 500px"
		:zoom="9"
		:center="[3.848, 11.5021]"
		:use-global-leaflet="false">
		<LTileLayer
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
			layer-type="base"
			name="OpenStreetMap" />
		<LMarker
			v-for="(coord, index) in coordinates"
			:key="index"
			:lat-lng="[coord.lat, coord.lon]"
			><LPopup>
				{{ data.stories[index].content.location }}
			</LPopup></LMarker
		>
	</LMap>
</template>
