<template>
	<div>
		<article>
			<TemplatesFirstParagraphProjects>
				<template #title>Vorgehen</template>
				<template #subtitle
					>So gehen wir beim Brunnenbau vor</template
				>
				<template #description>
					Wir bauen Brunnen in ländlichen Regionen Kameruns,
					insbesondere in der Region Obala. Der Ort Obala liegt etwa
					50 km nördlich von Yaoundé, der Hauptstadt Kameruns. Obwohl
					dies nahe klingt, gibt es dort keine Infrastruktur zur
					Wasserversorgung. In der Region leben überwiegend bäuerliche
					Familien, die sich von der eigenen Landwirtschaft ernähren.
				</template>
				<template #logo>
					<SvgsIconsBrunnenbauVorgehen class="shrink-0" />
				</template>
			</TemplatesFirstParagraphProjects>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsLeftRight>
					<template #left>
						<SvgsContentCircles />
						<br />
						<br />
						<p>
							Weitere Brunnen wollen wir im Gebiet um das Dorf
							LengTombo bauen. Das liegt rund 150 km östlich von
							Yaoundé. Die Menschen dort sind in der Regel
							wirtschaftlich noch schlechter gestellt als im Raum
							Obala, da Leng-Tombo durch schlechte Straßen nur schwer
							erreichbar ist.
						</p>
					</template>
					<template #right>
						<div
							class="border rounded-[--border-radius] aspect-[3/4] w-full md:w-[80%]"></div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsHighlighted>
					<span class="text-orange font-bold">So gehen wir vor</span>
					<br />
					<br />
					Wir wählen die Dörfer und Standorte, an denen wir Brunnen
					bauen, sorgfältig aus. Dazu besuchen wir die Dörfer
					gemeinsam mit unserer Partnerorganisation ANDES, sprechen
					mit den Bewohnern und sehen uns die alten Wasserstellen an.
				</TemplatesParagraphsHighlighted>
				<TemplatesParagraphsHighlighted>
					<div class="py-[5rem] grid place-items-center">
						<SvgsContentHouses />
					</div>
				</TemplatesParagraphsHighlighted>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<p>
							Nach der Standortauswahl führt ANDES im Dorf mehrere
							Schulungen über den Umgang mit den Brunnen durch. Die
							Dorfgemeinschaft wählt ein Brunnenkomitee, das
							langfristig Verantwortung übernimmt und sich um den
							Brunnen kümmert. Auch sammelt das Komitee von den
							Dorfbewohnern jährlich eine geringe Nutzungsgebühr ein,
							um Wartungsarbeiten am Brunnen zu finanzieren.
						</p>
					</template>
					<template #right>
						<p>
							Unsere Brunnen bestehen aus einem Schacht mit gut einem
							Meter Durchmesser, der mit Betonringen ausgekleidet
							wird. Die Betonringe werden vor Ort in speziellen Formen
							gegossen. Der Schacht wird mit einer Betonplatte
							verschlossen, in die eine Handpumpe eingesetzt wird. Um
							den Brunnen besser sauber halten zu können, wird er mit
							einer Mauer eingefasst. Die Pumpe und sämtliche
							Ersatzteile kann man vor Ort in Kamerun kaufen, so dass
							wir keine Materialien ins Land einführen müssen.
						</p>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsImageBanner>
				</TemplatesParagraphsImageBanner>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<p>
							Die Dorfbewohner werden in den Bau des Brunnens
							einbezogen. Sie helfen bei den einfachen Arbeiten und
							müssen die Brunnenbauer während der Bauzeit beherbergen.
							So übernehmen die Dorfbewohner von Anfang an
							Verantwortung für IHREN Brunnen. Ist der Brunnen fertig,
							wird er offiziell den Dorfbewohnern übergeben. Das
							Brunnenkomitee übernimmt von da an die Verantwortung für
							den Brunnen.
						</p>
					</template>
					<template #right>
						<p>
							Als Hilfestellung besichtigt unsere Partnerorganisation
							ANDES die Brunnen regelmäßig und hält Kontakt zu den
							Brunnenkomitees sowie den Dorfbewohnern. Sollten
							Wartungsarbeiten am Brunnen notwendig sein, werden diese
							zügig nach Beauftragung durch das Brunnenkomitee
							durchgeführt.
						</p>
					</template>
				</TemplatesParagraphsLeftRight>
				<LazyTemplatesExploreMoreTemplate
					:page="{
						title: 'Brunnenbau',
						link: '/projekte/brunnenbau',
					}">
					<LinkCardsBrunnenbauMotivation />
					<LinkCardsBrunnenbauStandorte />
				</LazyTemplatesExploreMoreTemplate>
			</div>
		</article>
	</div>
</template>
