<template>
	<div>
		<article>
			<TemplatesFirstParagraphProjects>
				<template #title>Plastik Recycling </template>
				<template #subtitle
					>Nachhaltigkeit und Wirtschaftswachstum</template
				>
				<template #description>
					Seit zwei Jahren organisiert CNEDD in Kamerun
					gemeinschaftliche Aufräumaktionen, um die Umwelt zu schützen
					und das Bewusstsein für die Notwendigkeit der Müllentsorgung
					zu schärfen. Nun gehen wir einen Schritt weiter und
					beteiligen uns an einem innovativen
					Plastik-Recycling-Projekt in Zusammenarbeit mit CNEDD,
					unserer Partnerorganisation mit Sitz in Yaoundé.
				</template>
				<template #logo>
					<SvgsIconsHilfeZurSelbsthilfePlastikRecycling
						class="shrink-0" />
				</template>
			</TemplatesFirstParagraphProjects>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsLeftRight>
					<template #left>
						<h2 class="text-highlight font-bold">
							Aufbau einer Recycling-Station und Produktionsstätte für
							recycelte Produkte
						</h2>
						<br />
						<p>
							Unser Ziel ist es, eine eigene Plastik-Recycling-Station
							in Yaoundé aufzubauen, die neue Möglichkeiten für die
							Bevölkerung eröffnet. Diese Station wird nicht nur die
							Menge an Plastikmüll reduzieren, sondern auch als
							Zentrum für Kreativität und Innovation dienen. Hier
							sollen recycelte Produkte hergestellt werden, die den
							Menschen vor Ort neue Einkommensquellen und
							Jobmöglichkeiten bieten.
						</p>
					</template>
					<template #right
						><h2 class="text-highlight font-bold">
							Verbesserung der Lebensbedingungen durch Recycling
						</h2>
						<p>?</p>
					</template>
				</TemplatesParagraphsLeftRight>
				<div
					class="justify-between items-center my-[8rem] gap-[3rem] hidden md:flex">
					<div
						class="aspect-[3/4] w-[300px] mb-[-6rem] border rounded-[--border-radius]"></div>
					<div
						class="aspect-[3/4] w-[420px] mb-[-6rem] border rounded-[--border-radius]"></div>
					<div
						class="aspect-[3/4] w-[350px] mt-[-6rem] border rounded-[--border-radius]"></div>
					<div
						class="aspect-[3/4] w-[400px] mb-[-6rem] border rounded-[--border-radius]"></div>
				</div>
				<TemplatesParagraphsHighlighted>
					<b>Förderung eines Start-ups</b> <br /><br />
					Die Initiative zielt darauf ab, lokale Partnerschaften
					auszubauen und ein nachhaltiges Wirtschaftswachstum in
					Kamerun zu fördern. Ein Start-up, das in den Bereichen
					Recycling und Kreislaufwirtschaft tätig ist, erhält
					Unterstützung, um innovative Lösungen zu entwickeln und
					umzusetzen. Dies trägt zur Etablierung einer nachhaltigen
					wirtschaftlichen Struktur bei, die auf Wiederverwertung und
					Ressourcenschonung setzt.
				</TemplatesParagraphsHighlighted>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<h2 class="text-highlight font-bold">
							Eine nachhaltige und wohlhabende Zukunft für Kamerun
						</h2>
						<br />
						<p>
							Letztendlich strebt CNEDD mit dieser Initiative ein
							Win-Win-Ergebnis an: die Reduzierung und
							Wiederverwendung von Plastikmüll bei gleichzeitiger
							Förderung des Wirtschaftswachstums. Die Unterstützung
							von Recycling-Start-ups ist ein entscheidender Schritt
							in Richtung einer nachhaltigen und wohlhabenden Zukunft
							für Kamerun.
							<br /><br />
							Miteinander - für Menschen in Afrika e.V. ist stolz
							darauf, sich an diesem wichtigen Projekt zu beteiligen
							und unsere Expertise und Ressourcen einzubringen, um die
							Umsetzung vor Ort zu unterstützen. Gemeinsam mit CNEDD
							arbeiten wir daran, das Bewusstsein für Umweltschutz zu
							schärfen, wirtschaftliche Möglichkeiten zu schaffen und
							die Lebensqualität der Menschen in Kamerun nachhaltig zu
							verbessern.
						</p>
					</template>
					<template #right>
						<div
							class="flex flex-col md:flex-row gap-[2rem] items-center">
							<div
								class="border rounded-[--border-radius] aspect-[3/4] w-full"></div>
							<div
								class="border rounded-[--border-radius] aspect-[3/4] w-full md:mt-[-8rem]"></div>
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
			</div>
		</article>
		<LazyTemplatesExploreMoreTemplate
			:page="{
				title: 'Eigenständigkeit und Selbsthilfe stärken',
				link: '/projekte/hilfe-zur-selbsthilfe',
			}">
			<LinkCardsHilfeZurSelbsthilfeSolarlight />
			<LinkCardsHilfeZurSelbsthilfePlantagen />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
