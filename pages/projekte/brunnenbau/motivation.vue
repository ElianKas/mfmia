<script setup>
	useSeoMeta({
		title: 'Deshalb bauen wir Brunnen',
		description:
			'Die Beweggründe hinter unseren Brunnenbauprojekten und deren Bedeutung für die Gemeinden.',
	});
</script>
<template>
	<div>
		<article>
			<TemplatesFirstParagraphProjects>
				<template #title>Motivation</template>
				<template #subtitle>Deshalb bauen wir Brunnen</template>
				<template #description>
					Wie in zahlreichen Ländern Afrikas ist die
					Trinkwasserversorgung insbesondere in den ländlichen
					Regionen Kameruns ungenügend. Zentral-Kamerun verfügt zwar
					über ausreichende Wasservorräte, die Qualität des für die
					Menschen zur Verfügung stehenden Wassers ist in der Regel
					aber sehr schlecht.
					<b>
						Im Ergebnis haben nur rund 40 % der Bevölkerung Zugang zu
						sauberem Wasser.
					</b>
				</template>
				<template #logo>
					<SvgsIconsBrunnenbauMotivation class="shrink-0" />
				</template>
				<template #image>
					<StoryblokImage
						class="w-full h-full object-cover"
						src="https://a.storyblok.com/f/311834/5360x5360/baf3e1289b/2013-09-05-andreas-229_im_brunnen.png" />
				</template>
			</TemplatesFirstParagraphProjects>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsLeftRight>
					<template #left>
						<div class="h-full flex flex-col justify-center">
							<p>
								Auf dem Land wird das Trinkwasser traditionell
								natürlichen Quellen entnommen, die sich aus
								oberflächennahem, keimhaltigem Wasser speisen. Die
								Quellen sind kaum oder mangelhaft eingefasst. Außerdem
								wird das Wasser durch die Blätter nahestehender Bäume
								und Pflanzen zusätzlich verschmutzt. Die Quellen
								werden zudem häufig auch zur Körperpflege und zum
								Waschen von Kleidung benutzt.
							</p>
							<br />
							<p class="text-highlight">
								Erschwert wird der Zugang zu Wasser durch die meist
								großen Entfernungen der Quellen zu den Dörfern.
							</p>
							<br />
							<div class="flex justify-center">
								<SvgsHumansFeet class="w-[80px] h-auto" />
							</div>
						</div>
					</template>
					<template #right>
						<div
							class="rounded-[--border-radius] aspect-[3/4] w-full md:w-[80%]">
							<StoryblokImage
								class="w-full h-full object-cover"
								src="https://a.storyblok.com/f/311834/3325x4327/11314290cf/frau_mit_wassereimer_8583.png" />
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<div>
							<h2 class="text-big text-orange font-bold">
								Alte Wasserstellen machen krank
							</h2>
							<br />
							<p>
								Die Menschen holen ihr Wasser aus alten Schöpfstellen.
								Traditionell ist dies die Aufgabe der Frauen und
								Kinder, die das Wasser in Eimern und Kanistern auf dem
								Kopf nach Hause tragen. Der Weg ist oft unwegsam und
								mehrere Kilometer lang. Auf dieser Strecke sind sie
								täglich mehrfach unterwegs. Das kostet sehr viel Zeit,
								welche den Kindern oft für einen kontinuierlichen
								Schulbesuch und den Frauen für die Versorgung der
								Familie und für landwirtschaftliche Tätigkeiten fehlt.
							</p>
						</div>
					</template>
					<template #right>
						<div
							class="rounded-[--border-radius] aspect-[3/4] w-full md:w-[80%]">
							<StoryblokImage
								class="w-full h-full object-cover"
								src="https://a.storyblok.com/f/311834/3325x4326/13507f7527/wasserloch_00001.png" />
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsHighlighted>
					Die alten Wasserstellen spenden oft sehr schlechtes Wasser.
					Typhus, Cholera, Bilharziose und andere Krankheiten können
					sich dadurch rasant ausbreiten und das Leben der Menschen
					bedrohen. Besonders Kinder und alte Menschen werden oft
					krank oder sterben mangels medizinischer Versorgung daran.
				</TemplatesParagraphsHighlighted>
				<TemplatesParagraphsLeftRight>
					<template #left
						><div
							class="rounded-[--border-radius] aspect-[3/4] w-full md:w-[80%] justify-self-end">
							<StoryblokImage
								class="w-full h-full object-cover"
								src="https://a.storyblok.com/f/311834/6000x4000/0b3d487f75/img_2300.JPG" /></div
					></template>
					<template #right
						><div
							class="bg-orange text-white rounded-[--border-radius] aspect-[3/4] w-full md:w-[80%] p-[1rem] grid place-items-center md:p-[2rem]">
							<p>
								<b>Das ist uns wichtig!</b> <br />
								Wir sorgen dafür, dass Dörfer mit besonders schlechter
								Wasserversorgung einen Brunnen bekommen. Der Brunnen
								wird anschließend der Dorfgemeinschaft übergeben, die
								den Brunnen eigenverantwortlich und nachhaltig
								betreibt. Dafür schaffen wir die notwendigen
								Strukturen und bilden die Dorfbewohner entsprechend
								aus.
							</p>
						</div></template
					>
				</TemplatesParagraphsLeftRight>
				<LazyTemplatesExploreMoreTemplate
					:page="{
						title: 'Brunnenbau',
						link: '/projekte/brunnenbau',
					}">
					<LinkCardsBrunnenbauVorgehen />
					<LinkCardsBrunnenbauStandorte />
				</LazyTemplatesExploreMoreTemplate>
			</div>
		</article>
	</div>
</template>
