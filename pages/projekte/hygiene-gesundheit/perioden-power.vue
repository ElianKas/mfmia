<template>
	<div>
		<article>
			<TemplatesFirstParagraphProjects>
				<template #title>Perioden.Power </template>
				<template #subtitle
					>Ein wichtiger Schritt für Frauen
				</template>
				<template #description>
					Wenn in Kamerun ein junges Mädchen die erste Periode
					bekommt, weiß es nichts über Menstruation. Die junge Frau
					hat keine Kenntnis über den weiblichen Zyklus. Über diese
					Themen wird oft kein Wort gesprochen, sie wird damit allein
					gelassen. Sie hat Angst, schweigt und isoliert sich in
					dieser Zeit. Im öffentlichen Raum, auch in den Schulen, gibt
					es oft keine Toiletten. Oder sie sind in einem völlig
					unzureichenden hygienischen Zustand. Da auch keine
					Hygieneartikel zur Verfügung stehen, bleiben viele während
					der Menstruation zu Hause. Und so fehlen die Mädchen jeden
					Monat für ca. eine Woche in der Schule. Sie sind von der
					Teilhabe ausgeschlossen, still und versteckt.
				</template>
				<template #logo>
					<SvgsIconsHygienePeriodenPower class="shrink-0" />
				</template>
				<template #image>
					<StoryblokImage
						class="object-cover w-full h-full"
						src="https://a.storyblok.com/f/311834/4032x3024/668abf5ff0/img_4690.jpeg" />
				</template>
			</TemplatesFirstParagraphProjects>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsHighlighted>
					Die prekären hygienischen Bedingungen führen schließlich zum
					Schulabbruch, und damit haben sie keine Möglichkeit eine
					Ausbildung zu absolvieren und eigenes Einkommen zu
					erwirtschaften.
				</TemplatesParagraphsHighlighted>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<p>
							Die Unkenntnis über den eigenen Zyklus führt auch zu
							ungewollten, frühen Schwangerschaften. Die jungen Mütter
							werden dann oftmals allein gelassen und haben ohne
							Ausbildung keine Chance mehr auf ein selbstbestimmtes
							Leben.
							<br /><br />
							Mit unserer Partnerorganisation ANDES wollen wir ein
							Projekt in der Region Obala starten, das folgende Ziele
							hat:
						</p>
						<ul class="list-disc pl-[1rem]">
							<li>
								Bildungsmaßnahmen zum weiblichen Zyklus für Mädchen
								und jungen Frauen
							</li>
							<li>Aufklärung auch für Jungen</li>
							<li>
								Allgemeine Enttabuisierung in der Öffentlichkeit
							</li>
							<li>Quote von weiblichen Schulabbrechern senken</li>
							<li>
								Zugang zu langlebigen und umweltfreundlichen
								Hygieneprodukten
							</li>
						</ul>
					</template>
					<template #right>
						<div
							class="rounded-[--border-radius] aspect-[4/3] w-full">
							<StoryblokImage
								class="object-cover w-full h-full"
								src="https://a.storyblok.com/f/311834/6000x4000/5caa763cf7/img_5254.JPG" />
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsLeftRight>
					<template #left
						><div
							class="rounded-[--border-radius] aspect-[3/4] w-full md:w-[80%] justify-self-end">
							<StoryblokImage
								class="w-full h-full object-cover"
								src="https://a.storyblok.com/f/311834/3024x4032/2bd157deb5/img_4693.jpeg" /></div
					></template>
					<template #right
						><div
							class="bg-orange text-white rounded-[--border-radius] aspect-[3/4] w-full md:w-[80%] p-[1rem] grid place-items-center md:p-[2rem]">
							<p>
								<b>An einem Lycée/Gymnasium beginnen wir:</b> <br />
								Es gibt Aufklärungsunterricht für Mädchen wie für
								Jungen. Einige Nähmaschinen werden gekauft, an denen
								die Mädchen lernen, sich selber gutsitzende und
								waschbare Binden herzustellen. Mit selbstaufgefädelten
								Menstruationsarmbändern lernen sie, ihren eigenen
								Zyklus zu verfolgen. Das Schultoilettenhaus wird
								saniert und ausgestattet mit Hygieneboxen und
								Reinigungsmittel.
							</p>
						</div></template
					>
				</TemplatesParagraphsLeftRight>
				<TemplatesLineUp>
					<template #title
						>Dafür sammeln wir dringend Spenden!</template
					>
					<template #1>
						Für 200 Euro kann eine Nähmaschine gekauft werden, mit der
						die Schülerinnen sich waschbare und hygienische
						Monatsbinden nähen können.</template
					>
					<template #2>
						Für 50 Euro können Stoffe für diese Binden finanziert
						werden.
					</template>
					<template #3
						>Für 20 Euro können Perlen für die Menstruationsarmbänder
						gekauft werden.</template
					>
				</TemplatesLineUp>
			</div>
		</article>
		<LazyDonate />
		<LazyTemplatesExploreMoreTemplate
			:page="{
				title: 'Toilettenhäuser',
			}">
			<LinkCardsHygieneToilettenhäuser />
			<LinkCardsHygieneVorgehen />
			<LinkCardsHygieneStandorte />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
