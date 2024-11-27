<template>
	<div>
		<article>
			<TemplatesFirstParagraphProjects>
				<template #logo> <SvgsIconsBildungPatenschaften /></template>
				<template #title>Patenschaften</template>
				<template #subtitle>Durch Bildung Zukunft schenken </template>
				<template #description
					>Um jungen Menschen eine bessere Zukunft zu ermöglichen,
					vermitteln und betreuen wir zusammen mit unserem
					Partnerverein in Kamerun (Association ensemble pour le
					Cameroun ENCAMER) seit Sommer 2015 ausgewählte Patenkinder.
					Sie alle stammen aus Familien, die aus den verschiedensten
					Gründen nicht in der Lage sind, eine Schulausbildung zu
					finanzieren. Ziel ist es, diesen Kindern über eine
					langfristige Patenschaft einen individuellen Schulabschluss
					und gegebenenfalls auch ein anschließendes Studium oder eine
					Berufsausbildung zu ermöglichen.
				</template>
				<template #image> </template>
			</TemplatesFirstParagraphProjects>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsLeftRight>
					<template #left>
						<p>
							<span class="font-bold text-big">
								Bisher haben wir 26 Kinder in unsere Versorgung
								aufgenommen.
							</span>
							<br />
							<br />
							Dabei wurde in jedem Einzelfall über eine Förderung
							entschieden. Alle Kinder sind persönlich bekannt und
							werden regelmäßig von Mitgliedern unseres kamerunischen
							Partnervereins besucht. Einige dieser Kinder haben
							inzwischen die Schule oder sogar ein Studium erfolgreich
							beendet!
						</p>
					</template>
					<template #right>
						<div
							class="border rounded-[--border-radius] aspect-[3/4] w-full md:w-[80%]"></div>
					</template>
				</TemplatesParagraphsLeftRight>
			</div>
		</article>
		<LazyTemplatesExploreMoreTemplate
			:page="{ title: 'Bildung', link: '/projekte/bildung' }">
			<LinkCardsBildungHerausforderungen />
			<LinkCardsBildungSchulsystem />
			<LinkCardsBildungSchulpartnerschaften />
			<LinkCardsBildungSchulenbau />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
