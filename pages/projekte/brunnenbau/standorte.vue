<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'standorte',
		filter_query: { type: { in: 'well' } },
		is_startpage: false,
	});
</script>
<template>
	<div>
		<article class="max-w-[--max-width-big] m-auto">
			<TemplatesFirstParagraphProjects>
				<template #logo><SvgsIconsBrunnenbauStandorte /></template>
				<template #title>Standorte</template>
				<template #subtitle>Wo wir Brunnen bauen</template>
				<template #description
					>Wir bauen Brunnen in ländlichen Regionen Kameruns,
					insbesondere in der Region um Obala herum. Der Ort Obala
					liegt etwa 50 km nördlich von Yaoundé, der Hauptstadt
					Kameruns.
					<br />
					<br />
					Weitere Brunnen werden wir in der Region Leng-Tombo, ca. 150
					km östlich von Yaoundé, bauen, wo wir auch Toilettenhäuser
					errichten und eine Schule unterstützen.</template
				>
				<template #image
					><MapsMap
						:data="data"
						:start-coords="[3.848, 11.5021]"
				/></template>
			</TemplatesFirstParagraphProjects>
			<TemplatesLocationList :data="data">
				<template #name> Brunnenbau </template>
			</TemplatesLocationList>
		</article>
		<TemplatesExploreMoreTemplate
			:page="{
				title: 'Brunnenbau',
				link: '/projekte/brunnenbau',
			}">
			<LinkCardsBrunnenbauMotivation />
			<LinkCardsBrunnenbauVorgehen />
		</TemplatesExploreMoreTemplate>
	</div>
</template>
