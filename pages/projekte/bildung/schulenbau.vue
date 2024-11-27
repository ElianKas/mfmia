<template>
	<div>
		<article>
			<TemplatesFirstParagraphProjects>
				<template #logo> <SvgsIconsBildungSchulenbau /></template>
				<template #title>Schulenbau</template>
				<template #subtitle>Unsere Schulprojekte </template>
				<template #description
					>Durch unsere engen Kontakte nach Kamerun stoßen wir immer
					wieder auf Schulen, die sich in einem sehr schlechten
					Zustand befinden. So schlecht, dass guter Unterricht für
					Lehrer und Schüler unmöglich ist. In der Folge melden viele
					Eltern ihre Kinder nicht mehr an diesen Schulen an. Weniger
					Schüler bedeuten weniger Einnahmen für die Schule. Die kann
					gute Lehrer und Unterrichtsmaterial dann nicht mehr
					bezahlen.
					<br />
					<br />
					Wir wollen diesen Teufelskreis durchbrechen, indem wir
					einzelne Schulen gezielt durch eine Renovierung
					unterstützen. Bei Bedarf spenden wir auch Mittel für
					Unterrichtsmaterial. Beides motiviert die Lehrer und der
					Unterrichtsbesuch wird für Eltern und Kinder wieder
					attraktiver. Die Schülerzahlen steigen und damit stehen
					wieder mehr Mittel für guten Unterricht zur Verfügung.
				</template>
				<template #image> </template>
			</TemplatesFirstParagraphProjects>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsLeftRight>
					<template #left>
						<p>
							Die Schulen haben auch die Möglichkeit, Spenden für die
							Bedürfnisse ihrer Partner-Schulen in Kamerun zu sammeln,
							wodurch sie unmittelbar die Auswirkungen ihres
							Engagements sehen können. Wir übernehmen die Abwicklung
							der Überweisungen und die Überprüfung der Belege.
							<br /><br />
							Inzwischen gab es schon viele schöne Bilder und kurze
							Videos, die per WhatsApp zwischen Deutschland und
							Kamerun ausgetauscht wurden und spannende Einblicke in
							den Schulalltag ermöglichten. Und es werden an den
							Kameruner Schulen konkrete Verbesserungen möglich, die
							ohne die Schulgemeinschaften in Kassel nicht zustande
							gekommen wären!
						</p>
					</template>
					<template #right>
						<div
							class="flex flex-col md:flex-row gap-[2rem] items-center h-full">
							<div class="h-full w-full">
								<div
									class="border rounded-[--border-radius] aspect-[3/4] w-full mb-[2rem]"></div>
								<div
									class="border rounded-[--border-radius] aspect-[3/4] w-full"></div>
							</div>
							<div
								class="border rounded-[--border-radius] aspect-[3/4] w-full"></div>
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
			</div>
		</article>
		<LazyTemplatesExploreMoreTemplate
			:page="{ title: 'Bildung', link: '/projekte/bildung' }">
			<LinkCardsBildungHerausforderungen />
			<LinkCardsBildungSchulsystem />
			<LinkCardsBildungPatenschaften />
			<LinkCardsBildungSchulpartnerschaften />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
