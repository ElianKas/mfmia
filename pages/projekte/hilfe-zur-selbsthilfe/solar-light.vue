<template>
	<div>
		<article>
			<TemplatesFirstParagraphProjects>
				<template #title>Solar Light</template>
				<template #subtitle>Licht und Zukunftsperspektiven </template>
				<template #description>
					Kann man sich das vorstellen, einen Alltag ohne Licht?
					Sobald die Sonne in Kamerun gegen 18.30 Uhr untergeht, wird
					es dunkel in den Dörfern. Und zwar richtig dunkel! Die Zeit
					bis zum Schlafen gehen kann nicht mehr sinnvoll genutzt
					werden. Es gibt keinen Lichtschalter, den man anschalten
					kann. Alternativ greifen die Leute auf Petroleumlampen
					zurück. Die sind aber nicht sehr hell. Unfälle sind nicht
					ausgeschlossen und auch die Nachhaltigkeit und Effizienz ist
					bedenklich. Das gleiche gilt für Benzin-betriebene
					Generatoren, die sich einige wenige leisten können.
				</template>
				<template #logo>
					<SvgsIconsHilfeZurSelbsthilfeSolarlight class="shrink-0" />
				</template>
			</TemplatesFirstParagraphProjects>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsLeftRight>
					<template #left>
						<div class="h-full flex flex-col justify-center">
							<p class="text-highlight">
								Durch unser Solar Light-Projekt wollen wir zum einen
								mehr Sicherheit schaffen. Vor allem aber schaffen wir
								die Möglichkeit, den Abend besser zu nutzen.
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
						<div class="h-full flex flex-col justify-center">
							<h2 class="text-big font-bold">
								Stromversorgung durch Sonne
							</h2>
							<br />
							<p>
								In den letzten Jahren haben wir 350 Solar-Lampen-Kits
								des Non-Profit-Unternehmens Village-Boom nach Kamerun
								gebracht, um das Leben der ländlichen Bevölkerung
								entscheidend zu verbessern. Diese Kits, bestehend aus
								einer Lampe mit drei Helligkeitsstufen, einem
								Solar-Panel und einem Kabel mit verschiedenen
								Anschlussmöglichkeiten zum Laden von Handys, sind weit
								mehr als nur eine Lichtquelle.
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
						<h2 class="text-big font-bold">
							Darum ist Licht so wichtig
						</h2>
						<br />
						<p>
							Der frühe Einbruch der Dunkelheit stellt besonders für
							Schulkinder ein großes Problem dar. Viele müssen
							tagsüber bei der Arbeit im Haus oder auf den Feldern
							helfen. Ohne Licht im Haus haben sie abends keine
							Möglichkeit, ihre Hausaufgaben zu machen oder für
							Prüfungen zu lernen. <br /><br />
							Für Erwachsene bedeutet der Mangel an Licht eine
							Einschränkung ihrer wirtschaftlichen Aktivitäten.
							Handwerkliche Tätigkeiten können nicht in den
							Abendstunden fortgesetzt werden, was die Produktivität
							erheblich mindert. <br /><br />
							Mit den neuen Solar-Lampen-Kits haben die Bewohner die
							Möglichkeit, ihre Arbeit in den Abendstunden
							fortzusetzen und so ihre wirtschaftliche Leistung zu
							steigern. Das zusätzliche Licht bringt nicht nur
							Sicherheit, sondern auch mehr wirtschaftliche Stabilität
							in die Haushalte.
						</p>
					</template>
					<template #right>
						<h2 class="text-big font-bold">
							Sehr positive Erfahrungen
						</h2>
						<br />
						<p>
							Das Feedback aus den Haushalten, die die Kits erhalten
							haben, ist durchweg positiv. Besonders geschätzt wird
							die Mobilität der Lampen. Dank des praktischen
							Tragegriffs können sie leicht transportiert und überall
							dort eingesetzt werden, wo sie benötigt werden. Dies ist
							ein großer Vorteil, da es den Nutzern ermöglicht, das
							Licht flexibel und bedarfsgerecht zu nutzen.
							<br /><br />
							Neben den genannten Vorteilen gibt es weitere positive
							Auswirkungen auf die ländliche Bevölkerung. Die
							Reduzierung der Abhängigkeit von Petroleumlampen
							verbessert die Luftqualität in den Häusern und
							verringert das Risiko von Bränden. Darüber hinaus trägt
							die Nutzung von Solarenergie zur Umweltfreundlichkeit
							bei und fördert die Nachhaltigkeit. Die Lebensqualität
							der Menschen wird erheblich verbessert
						</p>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<h2 class="text-big font-bold">
							Wir wollen weiter machen
						</h2>
						<br />
						<p>
							Bisher haben wir die Solarlight-Kits über das deutsche
							Non-Profit-Unternehmen Village-Boom bezogen, welches die
							Lampen und die Panels in China produzieren lässt. Unser
							Ziel ist es, zumindest die Lampengehäuse künftig in
							Kamerun herstellen zu lassen. Woraus? Aus recyceltem
							Kunststoff. Mehr dazu unter
						</p>
					</template>
					<template #right>
						<ul class="list-none">
							<LinkCardsHilfeZurSelbsthilfePlastikRecycling />
						</ul>
					</template>
				</TemplatesParagraphsLeftRight>
			</div>
		</article>
		<LazyTemplatesExploreMoreTemplate
			:page="{
				title: 'Eigenständigkeit und Selbsthilfe stärken',
				link: '/projekte/hilfe-zur-selbsthilfe',
			}">
			<LinkCardsHilfeZurSelbsthilfePlastikRecycling />
			<LinkCardsHilfeZurSelbsthilfePlantagen />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
