<template>
	<div>
		<article>
			<TemplatesFirstParagraphProjects>
				<template #title>Motivation </template>
				<template #subtitle>Viele Menschen ohne Toilette </template>
				<template #description>
					In den ländlichen Gebieten Kameruns mangelt es nicht nur an
					der Versorgung mit sauberem Trinkwasser. Ein mindestens
					genauso großes Risiko für die Gesundheit der Menschen ist
					die mangelnde Hygiene durch fehlende Toiletten!
				</template>
				<template #logo>
					<SvgsIconsHygieneToilettenhäuser class="shrink-0" />
				</template>
			</TemplatesFirstParagraphProjects>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsLeftRight>
					<template #left>
						<div class="h-full flex items-center">
							<p>
								So auch in der Großgemeinde Leng-Tombo, in der wir
								seit vielen Jahren aktiv sind. Gerade dort, wo sich
								Menschen treffen, fehlen Toiletten: an den Schulen, an
								Gemeindehäusern, an Kirchen, an Dorf- oder
								Marktplätzen. Die notwendigen Bedürfnisse werden in
								der Regel im Gebüsch erledigt. Das ist entwürdigend
								und unsicher. Und ohne Chance, sich anschließend die
								Hände zu waschen! Krankheitserreger werden so
								unkontrolliert weitergetragen.
							</p>
						</div>
					</template>
					<template #right>
						<div
							class="border rounded-[--border-radius] aspect-[4/3] w-full"></div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<p class="text-highlight">
							Besonders schwierig sind fehlende Toilettenhäuser für
							Mädchen und Frauen, die damit während der Menstruation
							keinen geschützten Raum finden können. Viele Mädchen
							gehen vorübergehend nicht zur Schule und nehmen nur
							eingeschränkt am öffentlichen Leben teil.
						</p>
					</template>
					<template #right>
						<div
							class="border rounded-[--border-radius] aspect-[4/3] w-full"></div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<div class="h-full flex items-center">
							<p>
								Trifft man auf Toilettenhäuser, so sind diese oft in
								einem katastrophalen Zustand. Ein Beispiel: In
								Mbalmayo – nahe der Hauptstadt Yaoundé – haben wir
								2016 neben der Schule auch das Toilettenhaus
								renoviert. Dort war ein Schüler kurz zuvor durch den
								maroden Boden der Toiletten gebrochen und beinahe in
								die Fäkalien gestürzt!
							</p>
						</div>
					</template>
					<template #right>
						<div
							class="border rounded-[--border-radius] aspect-[4/3] w-full"></div>
					</template>
				</TemplatesParagraphsLeftRight>
			</div>
		</article>
		<LazyTemplatesExploreMoreTemplate
			:page="{
				title: 'Toilettenhäuser',
			}">
			<LinkCardsHygieneVorgehen />
			<LinkCardsHygieneStandorte />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
