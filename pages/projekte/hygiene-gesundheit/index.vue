<script setup>
	useSeoMeta({
		title: 'Gesundheitsförderung in	Kamerun',
		description:
			'Bau von Toilettenhäusern, Menstruationshygiene und mehr. Erfahren Sie, wie wir die Hygiene- und Gesundheitsbedingungen verbessern.',
	});
</script>
<template>
	<div>
		<article>
			<TemplatesHeroSectionTemplate>
				<template #title>Hygiene & Gesundheit </template>
				<template #description
					>Die Grundvoraussetzung für ein gesundes Leben schaffen
				</template>
				<template #logo><SvgsIconsHygiene /> </template>
				<template #image>
					<StoryblokImage
						class="object-cover w-full h-full"
						src="https://a.storyblok.com/f/311834/6000x4000/6d9047773b/img_5523_pzsznc.jpg" />
				</template>
			</TemplatesHeroSectionTemplate>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsLeftRight>
					<template #left>
						<div class="h-full flex flex-col justify-between">
							<p>
								Ziel 6 der Agenda 2030 der Vereinten Nationen lautet:
								Die Verfügbarkeit und nachhaltige Bewirtschaftung von
								Wasser und Sanitärversorgung für alle gewährleisten.
							</p>
							<br />
							<p class="text-highlight">
								Wir unterstützen dieses Ziel aktiv, indem wir die
								Wasserversorgung und die Hygiene in den ländlichen
								Regionen Kameruns durch den Bau von Brunnen und
								Sanitäreinrichtungen verbessern.
							</p>
						</div>
					</template>
					<template #right
						><div
							class="rounded-[--border-radius] aspect-[3/4] w-full md:w-[80%]">
							<StoryblokImage
								class="object-cover w-full h-full"
								src="https://a.storyblok.com/f/311834/6000x4000/d3644ac0ef/img_5512_frih56.jpg" /></div
					></template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<div class="h-full flex flex-col justify-between">
							<p>
								Die Agenda 2030 der Vereinten Nationen mit ihren 17
								Zielen für nachhaltige Entwicklung ist ein globaler
								Plan zur Förderung nachhaltigen Friedens und
								Wohlstands und zum Schutz unseres Planeten.
								<br /><br />
								Im Ziel 6 heißt es im Einzelnen:
								<br />
								„Sauberes, zugängliches Wasser für alle ist ein
								wesentlicher Teil der Welt, in der wir leben wollen,
								und es gibt genügend Süßwasser auf dem Planeten, um
								dies zu erreichen. Aufgrund schlechter
								Wasserwirtschaft oder schlechter Infrastruktur sterben
								jedoch jedes Jahr Millionen von Menschen an
								Krankheiten, die mit einer unzureichenden
								Wasserversorgung, Abwasserentsorgung und Hygiene
								verbunden sind.
								<br /><br />
								Wasserknappheit, schlechte Wasserqualität und
								unzureichende sanitäre Einrichtungen beeinträchtigen
								die Ernährungssicherheit, die Lebensgrundlage und die
								Bildungsmöglichkeiten armer Familien auf der ganzen
								Welt.“
							</p>
						</div>
					</template>
					<template #right
						><div
							class="rounded-[--border-radius] aspect-[3/4] w-full md:w-[80%]">
							<StoryblokImage
								class="object-cover w-full h-full object-[80%_50%]"
								src="https://a.storyblok.com/f/311834/4032x3024/0655f37db1/img_8819_ip51zu.jpg" /></div
					></template>
				</TemplatesParagraphsLeftRight>
			</div>
		</article>
		<LazyDonate paypalID="VMSUEGABWYZY6" />
		<LazyTemplatesExploreMoreTemplate
			:page="{
				title: 'Hygiene & Gesundheit',
			}">
			<LinkCardsHygieneToilettenhäuser />
			<LinkCardsHygienePeriodenPower />
			<LinkCardsHygieneVorgehen />
			<LinkCardsHygieneStandorte />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
