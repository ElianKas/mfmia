<template>
	<div>
		<article>
			<TemplatesFirstParagraphProjects>
				<template #logo> <SvgsIconsBildungSchulsystem /></template>
				<template #title>Schulsystem</template>
				<template #subtitle>Bildungssystem in Kamerun </template>
				<template #description
					>In Kamerun gibt es zwei vorherrschende Schulsysteme.
					Angelehnt an die sprachliche Teilung, die durch die
					verschiedenen Kolonialmächte bedingt ist, wird zu 80 % nach
					dem französischen und zu 20 % nach dem englischen
					Schulsystem unterrichtet. Eine Schulpflicht besteht in
					Kamerun aber nicht. Der Anteil der Analphabeten liegt noch
					über 25 Prozent.
				</template>
				<template #image> </template>
			</TemplatesFirstParagraphProjects>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsLeftRight>
					<template #left>
						<div class="flex items-center h-full">
							<p>
								Wir erläutern hier das Schulsystem im
								französischsprachigen Gebiet, wo wir als Verein tätig
								sind.
								<br /><br />
								Im Alter von ca. 6 Jahren beginnen die Kinder mit der
								Grundschule (école primaire). Dort lernen sie etwa bis
								zum 11ten Lebensjahr und machen ihren ersten
								Abschluss, das CEPE (Certificat de fin d‘étu-des
								primaires élémentaires). Danach beginnt die
								Sekundarschule.
								<br /><br />
								An den Gymnasien, an denen die Schülerinnen und
								Schüler nach 4 Jahren eine staatliche Zwischenprüfung,
								das BEPC (brevet d‘études du premier cycle), bestehen
								müssen, sind verschiedene Abschlüsse erreichbar.
								<br /><br />
								Nach dem sechsten Schuljahr auf einem Gymnasium kann
								das Probatoire (niveau Première) abgelegt werden und
								als höchster Abschluss nach insgesamt 13 Schuljahren
								(Grund- und Sekundarschule) steht das Baccalauréat
								(niveau terminale), welches den Zugang zur Universität
								ermöglicht.
								<br /><br />
								Alternativ kann auch für 4 Jahre ein Technik-Kolleg
								oder eine Sekundarstufe mit berufspraktischer
								Ausbildung besucht werden, auch diese Stufe wird mit
								dem BEPC abgeschlossen.
							</p>
						</div>
					</template>
					<template #right>
						<div class="flex items-center h-full">
							<div
								class="border rounded-[--border-radius] aspect-[4/3] w-full"></div>
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsHighlighted>
					Für alle Schulformen gibt es staatliche und private
					Institute. Dabei steht ein staatliches Schulangebot nicht
					für kostenfreie Bildung. Die finanzielle Unterstützung des
					Staates reicht in der Regel nicht aus, so dass Eltern
					regelmäßig Kosten für Schulausstattung und -instandhaltung
					übernehmen müssen. Zum Teil fallen Beiträge für sogenannte
					Elternvereine an, die zusätzliche Lehrer finanzieren.
				</TemplatesParagraphsHighlighted>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<div class="flex items-center h-full">
							<p>
								Die Einschulungsquote beträgt 79 % und ist für
								afrikanische Verhältnisse hoch, jedoch besteht ein
								starkes Süd-Nord-Gefälle. Der Primarschulbesuch an den
								staatlichen Schulen ist kostenlos. Privatschulen
								erheben Gebühren. Schulmaterial, Uniformen und
								Pausenverpflegung müssen von den Eltern getragen
								werden, was in den südlichen Provinzen die
								Einschulungsrate senkt. In den nördlichen Provinzen
								ist die Einschulungsrate auch aus kulturellen Gründen
								noch niedriger.
							</p>
						</div>
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
			:page="{ title: 'Bildung', link: '/projekte/bildung' }">
			<LinkCardsBildungHerausforderungen />
			<LinkCardsBildungPatenschaften />
			<LinkCardsBildungSchulpartnerschaften />
			<LinkCardsBildungSchulenbau />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
