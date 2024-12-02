<template>
	<div>
		<article>
			<TemplatesFirstParagraphProjects>
				<template #title>Vorgehen </template>
				<template #subtitle
					>So gehen wir beim Toilettenbau vor
				</template>
				<template #description>
					Wir sorgen dafür, dass Orte mit dringendem Bedarf an
					Toiletten (wie beispielsweise Schulen, Gemeinden) ein
					Toilettenhaus bekommen. Der Bau eines Toilettenhauses kostet
					umgerechnet ca. 6.000 Euro. Das Toilettenhaus wird
					anschließend der Schule bzw. der Gemeinde übergeben, die es
					eigenverantwortlich und nachhaltig betreibt.
				</template>
				<template #logo>
					<SvgsIconsHygieneVorgehen class="shrink-0" />
				</template>
				<template #image>
					<StoryblokImage
						class="object-cover w-full h-full"
						src="https://a.storyblok.com/f/311834/3024x4032/643cb640ad/img_8708_nwanmt.jpg" />
				</template>
			</TemplatesFirstParagraphProjects>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsLeftRight>
					<template #left>
						<h2 class="text-highlight font-bold">So gehen wir vor</h2>
						<br />
						<p>
							Wir wählen die Orte für Toilettenhäuser gemeinsam mit
							unseren Partnerorganisationen vor Ort aus. In der Regel
							sehen wir die Bedarfe im Zusammenhang mit anderen
							Projekten wie Schulpartnerschaften, Brunnenbauten usw.,
							so dass wir bereits Kontakte im Dorf haben.
							<br /><br />
							Der Bau der Toilettenhäuser wird durch unsere
							Partnerorganisationen vor Ort – oft unter Beteiligung
							der Dorfbewohner – durchgeführt. Die Gebäude umfassen
							meist drei Räume mit Komposttoiletten und einen
							Wartungsraum (für Putzmittel, Fass für Regenwasser
							etc.). Sie werden in Massivbauweise errichtet, also
							gemauert mit Blechdach. Unter dem Gebäude befindet sich
							eine etwa 10 Meter tiefe Grube, welche die Fäkalien über
							mehr als 10 Jahre aufnehmen kann. Für jedes
							Toilettenhaus wird eine Gruppe festgelegt, die sich um
							die Sauberkeit und die Wartung kümmern. Einmal im Jahr
							findet eine Sammlung statt, um das Geld für Putzmittel,
							Kompostierungsmittel usw. zusammen zu bekommen.
							<br /><br />
							Die Toilettenhäuser werden durch die verantwortliche
							Gruppe regelmäßig besichtigt und der Zustand
							dokumentiert. So werden die Menschen aktiv beteiligt und
							die Nachhaltigkeit sichergestellt.
						</p>
					</template>
					<template #right>
						<div
							class="flex flex-col md:flex-row gap-[2rem] items-center md:mt-[8rem]">
							<div
								class="rounded-[--border-radius] aspect-[3/4] w-full">
								<StoryblokImage
									class="object-cover w-full h-full"
									src="https://a.storyblok.com/f/311834/4032x3024/7fc3ec3cfb/img_8823_tzlrth.jpg" />
							</div>
							<div
								class="rounded-[--border-radius] aspect-[3/4] w-full md:mt-[-8rem]">
								<StoryblokImage
									class="object-cover w-full h-full object-[20%_50%]"
									src="https://a.storyblok.com/f/311834/6000x4000/2e0e14591e/img_5514_ylubim.jpg" />
							</div>
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
			</div>
		</article>
		<LazyTemplatesExploreMoreTemplate
			:page="{
				title: 'Toilettenhäuser',
			}">
			<LinkCardsHygieneToilettenhäuser />
			<LinkCardsHygieneStandorte />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
