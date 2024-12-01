<template>
	<div>
		<article>
			<TemplatesHeroSectionTemplate>
				<template #title> Bildung </template>
				<template #description
					>Die Grundlage schaffen für ein selbstbestimmtes Leben
				</template>
				<template #logo>
					<SvgsIconsBildung />
				</template>
				<template #image>
					<StoryblokImage
						class="w-full h-full object-cover"
						src="https://a.storyblok.com/f/311834/6000x4000/7976ff7f8d/img_3554_kvdd4f.jpg" />
				</template>
			</TemplatesHeroSectionTemplate>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsHighlighted>
					Bildung vermittelt Grundfertigkeiten wie Lesen, Schreiben
					und Rechnen. Sie befähigt zum Weiterlernen und fördert
					problemlösendes Denken. Bildung ist eine zentrale
					Voraussetzung zur Überwindung von Armut. Und sie ist das
					Fundament einer Demokratie.
				</TemplatesParagraphsHighlighted>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<div class="flex items-center justify-end h-full">
							<div
								class="rounded-[--border-radius] aspect-[4/3] w-full">
								<StoryblokImage
									class="w-full h-full object-cover"
									src="https://a.storyblok.com/f/311834/6000x4000/0f05dd16eb/img_3529_y4dlkz.jpg" />
							</div>
						</div>
					</template>
					<template #right>
						<div
							class="rounded-[--border-radius] aspect-[3/4] w-full md:w-[80%]">
							<StoryblokImage
								class="w-full h-full object-cover"
								src="https://a.storyblok.com/f/311834/6000x4000/b3bf1df3f5/img_3595_aoudaa.jpg" />
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsLeftRight>
					<template #left>
						Die Agenda 2030 der Vereinten Nationen unterstreicht all
						dies mit Ziel 4: die Sicherstellung inklusiver,
						gleichberechtigter und hochwertiger Bildung sowie die
						Förderung lebenslangen Lernens für alle. <br />
						<br />
						<span class="text-highlight">
							Doch die Realität für viele Kinder in Kamerun sieht
							anders aus. Sie stehen vor einer Vielzahl von Barrieren,
							die von fehlendem Geld zur Zahlung von Schulgeld bis zu
							völlig desolaten Schulgebäuden ohne brauchbare
							Lehrmaterialien reichen.
						</span>
					</template>
					<template #right>
						<div
							class="rounded-[--border-radius] aspect-[3/4] w-full md:w-[80%]">
							<StoryblokImage
								class="w-full h-full object-cover"
								src="https://a.storyblok.com/f/311834/6000x4000/47386e634a/img_3611_d9sqye.jpg" />
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<div class="flex h-full items-center">
							Wir engagieren uns gezielt für einzelne Schulen, indem
							wir Schulgebäude und -toiletten renovieren und für
							fehlende Lehrmaterialien Spenden sammeln. Wir vermitteln
							Partnerschaften zwischen deutschen und kamerunischen
							Schulen. Und wir unterstützen mittellose Kinder und
							Jugendliche, indem wir mithilfe von Paten in Deutschland
							einen kontinuierlichen Schulbesuch ermöglichen.
						</div>
					</template>
					<template #right>
						<div
							class="rounded-[--border-radius] aspect-[4/3] w-full">
							<StoryblokImage
								class="w-full h-full object-cover"
								src="https://a.storyblok.com/f/311834/6000x4000/8bf486e0ae/img_3512_cjgtf4.jpg" />
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesLineUp>
					<template #1
						>Mit ca. 6.000 € kann ein Toilettenhaus an einer Schule
						gebaut werden.
					</template>
					<template #2
						>Der Schulbesuch eines Kindes wird schon mit 35 € pro
						Monat ermöglicht.
					</template>
					<template #3
						>Kleinere Beträge helfen für Schul- & Lehrmaterialien.
					</template>
				</TemplatesLineUp>
			</div>
			<LazyDonate />
			<LazyTemplatesExploreMoreTemplate :page="{ title: 'Bildung' }">
				<LinkCardsBildungHerausforderungen />
				<LinkCardsBildungSchulsystem />
				<LinkCardsBildungPatenschaften />
				<LinkCardsBildungSchulpartnerschaften />
				<LinkCardsBildungSchulenbau />
			</LazyTemplatesExploreMoreTemplate>
		</article>
	</div>
</template>
