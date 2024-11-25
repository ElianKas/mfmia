<template>
	<div>
		<article class="p-[3rem]">
			<TemplatesHeroSectionTemplate
				title="Über Kamerun"
				description="Wie wir Kamerun als Gäste erleben">
				<SvgsIconsKamerun />
			</TemplatesHeroSectionTemplate>
		</article>
		<Donate />
		<TemplatesExploreMoreTemplate :page="{ title: 'Kamerun' }">
			<LinkCardsKamerunInfrastruktur />
		</TemplatesExploreMoreTemplate>
	</div>
</template>
