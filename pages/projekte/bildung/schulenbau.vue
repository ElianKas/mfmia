<template>
	<div>
		<article>
			<TemplatesFirstParagraphProjects>
				<template #logo>
					<SvgsIconsBildungSchulenbau class="shrink-0"
				/></template>
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
				<template #image
					><StoryblokImage
						class="w-full h-full object-cover"
						src="https://a.storyblok.com/f/311834/6000x4000/642d1b7db4/img_4766_mhu8sa.jpg" />
				</template>
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
							class="rounded-[--border-radius] aspect-[4/3] w-full">
							<StoryblokImage
								src="https://a.storyblok.com/f/311834/4032x3024/a8945005af/img_8690_im32li.jpg"
								class="object-cover w-full h-full" />
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
