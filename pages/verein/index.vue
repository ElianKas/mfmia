<template>
	<div>
		<article class="px-[1rem] md:px-[3rem] pt-[1rem]">
			<section>
				<div
					class="h-[500px] bg-[#000] grid place-items-center rounded-[--border-radius] relative">
					<h1 class="text-white text-big font-bold z-[9]">
						Unser Verein
					</h1>
					<StoryblokImage
						class="object-cover h-full w-full absolute inset-0 opacity-50"
						src="https://a.storyblok.com/f/311834/1832x550/17ec30b2f5/themenbild_wir_unserverein.png" />
				</div>
			</section>
			<TemplatesParagraphsHighlighted>
				“Miteinander - für Menschen in Afrika e.V.” ist ein
				gemeinnütziger Verein, der sich seit Februar 2013 vor allem in
				den südlichen Regionen Kameruns für bessere Lebensbedingungen
				der Menschen einsetzt. Unsere Schwerpunkte sind Projekte für
				die Trinkwasserversorgung und Hygiene sowie im Bereich
				Bildung. Unsere Projekte begleiten wir durch unsere
				persönlichen Kontakte und durch regelmäßige Reisen vor Ort
				sehr eng.
			</TemplatesParagraphsHighlighted>
			<div class="max-w-[--max-width-small] m-auto md:py-[2rem]">
				<TemplatesParagraphsLeftRight>
					<template #left>
						<p>
							Unsere Projekte begleiten wir durch unsere persönlichen
							Kontakte und durch regelmäßige Reisen nach Kamerun sehr
							eng. Die von uns unterstützten Schulkinder, Dörfer oder
							Gruppen sind uns persönlich bekannt und bleiben
							dauerhaft mit uns in Kontakt. So sorgen wir dafür, dass
							unsere und Eure Unterstützung nachhaltig ist. Übrigens:
							Alle Reisen finanzieren wir zu 100 % privat, damit wir
							die Spenden vollständig für die Projekte verwenden
							können.
							<br /><br />
							Vor Ort arbeiten wir mit den beiden
							Partnerorganisationen ENCAMER und ANDES zusammen. Beide
							setzen die Projekte mit lokalen Arbeitskräften und mit
							vor Ort verfügbaren Materialien um.
						</p>
					</template>
					<template #right>
						<div class="h-full grid place-items-center">
							<SvgsLogoNormal class="w-[300px]" />
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
			</div>
			<section class="max-w-[--max-width] m-auto py-[2rem]">
				<h2 class="text-big">Unsere Vereinswerte</h2>
				<br />
				<div
					class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] md:gap-[5rem]">
					<div>
						<h3 class="font-bold pb-[.5rem]">Partnerschaftlich</h3>
						<p>
							Wir begegnen den Menschen in Kamerun auf Augenhöhe,
							entwickeln die Projekte gemeinsam und helfen ohne
							Bevormundung. Der persönliche Kontakt, durch viele
							Reisen entstanden, ist uns deshalb sehr wichtig.
						</p>
					</div>
					<div>
						<h3 class="font-bold pb-[.5rem]">Nachhaltig</h3>
						<p>
							Unsere Projekte sollen für viele Jahre Wirkung zeigen,
							z.B. werden die Brunnen nicht nur gebaut, sondern über
							ein Brunnenkomitee betrieben und gewartet, und wir
							bleiben dauerhaft in Kontakt zueinander.
						</p>
					</div>
					<div>
						<h3 class="font-bold pb-[.5rem]">Effektiv</h3>
						<p>
							Wir wollen, dass jede Spende zu 100% bei den Projekten
							ankommt. Alle Reisen, die wir antreten, finanzieren wir
							zu 100% privat. Unvermeidliche Kosten wie Bankgebühren
							versuchen wir so niedrig wie möglich zu halten.
						</p>
					</div>
				</div>
			</section>
		</article>
		<LazyTemplatesExploreMoreTemplate
			:page="{
				title: 'Unser Verein',
			}">
			<LinkCardsVereinGeschichte />
			<LinkCardsVereinAktivWerden />
			<LinkCardsVereinTeam />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
