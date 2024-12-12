<script setup>
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories', {
		version: useRoute().query._storyblok ? 'draft' : 'published',
		starts_with: 'standorte',
		filter_query: { type: { in: 'toilet' } },
		is_startpage: false,
	});
</script>
<template>
	<div>
		<TemplatesFirstParagraphProjects>
			<template #logo><SvgsIconsHygieneStandorte /></template>
			<template #title>Standorte</template>
			<template #subtitle
				>Wo der Verein Toilettenhäuser baut
			</template>
			<template #description
				>Wir bauen Toilettenhäuser in ländlichen Regionen Kameruns,
				insbesondere in der Region Leng-Tombo. Der Ort Leng-Tombo
				liegt etwa 150 km östlich von Yaoundé, der Hauptstadt
				Kameruns.
				<br />
				<br />
				Weitere Toilettenhäuser werden wir im Gebiet Obala, ca. 50 km
				nördlich von Yaoundé, bauen, wo wir auch Brunnen errichten und
				eine Schule unterstützen.
			</template>
			<template #image
				><MapsMap
					:data="data"
					:start-coords="[4.06519444, 12.75086111]"
			/></template>
		</TemplatesFirstParagraphProjects>
		<TemplatesLocationList :data="data">
			<template #name> Toilettenhäuser </template>
		</TemplatesLocationList>
		<LazyTemplatesExploreMoreTemplate
			:page="{
				title: 'Toilettenhäuser',
				link: '/projekte/hygiene-gesundheit',
			}">
			<LinkCardsHygieneToilettenhäuser />
			<LinkCardsHygieneVorgehen />
		</LazyTemplatesExploreMoreTemplate>
		<LazyTemplatesExploreMoreTemplate
			:page="{
				title: 'Perioden.Power',
				link: '/projekte/hygiene-gesundheit',
			}">
			<LinkCardsHygienePeriodenPower />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
