<script setup>
	useSeoMeta({
		title: 'Die Geschichte',
		description:
			'Wer wir sind und was uns antreibt: Ein Porträt unseres Vereins.',
	});
</script>
<template>
	<div>
		<article class="px-[1rem] md:px-[3rem] pt-[1rem]">
			<section>
				<div
					class="h-[500px] bg-[#000] grid place-items-center rounded-[--border-radius] relative">
					<h1 class="text-white text-big font-bold z-[9]">
						Die Geschichte
					</h1>
					<StoryblokImage
						class="object-cover h-full w-full absolute inset-0 opacity-50"
						src="https://a.storyblok.com/f/311834/6000x4000/99b0bf6464/sebastian-mani_img_6097.JPG" />
				</div>
			</section>
			<TemplatesParagraphsHighlighted>
				Im Sommer 2010 lernten wir den kamerunischen Pfarrer Sébastien
				Mani in Kassel kennen, welcher zu dieser Zeit bereits seit
				vier Jahren in Deutschland lebte. Er berichtete uns unter
				anderem von der schlechten Trinkwassersituation und den
				gesundheitlichen Folgen für die Menschen seines Heimatdorfes
				Zoatoupsi in Kamerun. Wir beschlossen, ihn bei seinen
				vielfältigen Aktivitäten zur Verbesserung der Lebenssituation
				von Menschen in Kamerun zu unterstützen.
			</TemplatesParagraphsHighlighted>
			<div class="max-w-[--max-width-small] m-auto">
				<TemplatesParagraphsLeftRight>
					<template #left>
						<p>
							Um unsere Hilfe besser organisieren zu können, haben wir
							im Februar 2013 den gemeinnützigen Verein “Miteinander –
							für Menschen in Afrika e. V.“ gegründet. Seitdem richten
							wir gezielte Hilfe nach Kamerun. Pfarrer Sébastien Mani
							lebt wieder in Kamerun und hat vor Ort den Verein
							“Association ensemble pour le Cameroun“ – kurz ENCAMER -
							gegründet, indem mittlerweile zahlreiche Mitglieder
							aktiv sind. ENCAMER ist einer unserer
							Partnerorganisationen vor Ort.
							<br /><br />
							Mit dem Bau von Brunnen hat es also begonnen. Im Laufe
							der Jahre sind zahlreiche Aktivitäten und Projekte dazu
							gekommen: Patenschaften für Schülerinnen und Schüler,
							Aufbau von Plantagen, Renovierung von Schulen,
							Schulpartnerschaften, ein Solarlampenprojekt sowie der
							Bau von Toilettenhäusern. Seit 2018 arbeiten wir
							außerdem mit ANDES als weitere Partnerorganisation
							zusammen.
							<br /><br />
							Durch die Partnerorganisationen und vor allem durch
							unsere persönlichen Kontakte zu den Menschen vor Ort
							können wir sehr zielgerichtet und nachhaltig
							unterstützen. Die regelmäßigen Reisen von
							Vereinsmitgliedern nach Kamerun sind eine wichtige
							Voraussetzung dafür. Unsere Reisen finanzieren wir
							übrigens vollständig privat, damit die Spendengelder
							vollständig in die Projekte fließen können.
						</p>
					</template>
					<template #right>
						<div class="h-full">
							<SvgsHumansGroup class="w-full md:mt-[20%]" />
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
			</div>
		</article>
		<LazyTemplatesExploreMoreTemplate
			:page="{
				title: 'Unser Verein',
				link: '/verein',
			}">
			<LinkCardsVereinAktivWerden />
			<LinkCardsVereinTeam />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
