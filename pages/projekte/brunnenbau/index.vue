<template>
	<div>
		<article>
			<TemplatesHeroSectionTemplate>
				<template #title> Brunnenbau </template>
				<template #description
					>Wasser ist Leben – Verändern Sie die Welt, Tropfen für
					Tropfen
				</template>
				<template #logo>
					<SvgsIconsBrunnenbau />
				</template>
				<template #image>
					<StoryblokImage
						class="w-full h-full object-cover"
						src="https://a.storyblok.com/f/311834/6000x4000/013c3d6298/img_8154_wasser_usks9x.jpg" />
				</template>
			</TemplatesHeroSectionTemplate>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsHighlighted>
					In ländlichen Regionen Kameruns ist sauberes Wasser eine
					seltene Ressource. Dabei ist es die Basis für Gesundheit,
					Bildung und nachhaltige Entwicklung. Verändern Sie mit Ihrer
					Unterstützung für einen neuen Brunnen das Leben einer ganzen
					Gemeinde!
				</TemplatesParagraphsHighlighted>
				<div
					class="justify-between items-center my-[8rem] gap-[3rem] hidden md:flex">
					<div
						class="aspect-[3/4] w-[300px] mb-[-6rem] rounded-[--border-radius]">
						<StoryblokImage
							class="w-full h-full object-cover"
							src="https://a.storyblok.com/f/311834/6000x4000/e1341cf849/img_8102_wasser_auf_hochkant_zuschneiden_lhijqj.jpg" />
					</div>
					<div
						class="aspect-[3/4] w-[420px] mb-[-6rem] rounded-[--border-radius]">
						<StoryblokImage
							class="w-full h-full object-cover"
							src="https://a.storyblok.com/f/311834/6000x4000/8214453ef6/img_3877_zuschneiden_wqv9to.jpg" />
					</div>
					<div
						class="aspect-[3/4] w-[350px] mt-[-6rem] rounded-[--border-radius]">
						<StoryblokImage
							class="w-full h-full object-cover"
							src="https://a.storyblok.com/f/311834/6000x4000/918dc47c10/img_8124_kinder_am_brunnen_dirshz.jpg" />
					</div>
					<div
						class="aspect-[3/4] w-[400px] mb-[-6rem] rounded-[--border-radius]">
						<StoryblokImage
							class="w-full h-full object-cover"
							src="https://a.storyblok.com/f/311834/6000x4000/82dce2aec3/img_2511_zuschneiden_wasser_trageaktion_nhdwcq.jpg" />
					</div>
				</div>
				<TemplatesParagraphsHighlighted>
					Ein Brunnen bietet einer Gemeinde die Möglichkeit,
					Krankheiten wie Typhus und Cholera effektiv vorzubeugen. Er
					sorgt dafür, dass Kinder Wasser in ihrer Nähe finden. So
					sparen sie Zeit und können sich besser auf die Schule
					konzentrieren. Für Frauen eröffnet sich die Chance, mehr
					Zeit mit ihren Familien zu verbringen und ihre
					landwirtschaftlichen Tätigkeiten zu erweitern.
				</TemplatesParagraphsHighlighted>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<div
							class="flex flex-col justify-center items-start h-full">
							<SvgsHumansGroup class="h-[100px] w-auto" />
							<br />
							<br />
							<br />
							<p>
								Wir stehen nicht allein in diesem Vorhaben. Gemeinsam
								mit unserer Partnerorganisation ANDES stellen wir
								sicher, dass jeder neu gebaute Brunnen eine
								nachhaltige Ressource für die Dorfgemeinschaft ist.
								Gemeinsam mit den Einwohnern schaffen wir Strukturen,
								die den Betrieb und die Wartung der Brunnen sichern –
								für eine Zukunft, in der sauberes Wasser keine
								Seltenheit mehr ist.
							</p>
						</div>
					</template>
					<template #right
						><div
							class="rounded-[--border-radius] aspect-[3/4] w-full md:w-[80%]">
							<StoryblokImage
								class="w-full h-full object-cover"
								src="https://a.storyblok.com/f/311834/6000x4000/f28430c729/schulung_img_3803_yruhzp.jpg" /></div
					></template>
				</TemplatesParagraphsLeftRight>
				<TemplatesLineUp>
					<template #1
						>Mit 12.000 Euro ermöglichen Sie den Bau eines kompletten
						Brunnens inklusive der Vorbereitungen und Schulungen.
					</template>
					<template #2
						>Mit einer Spende von 380 Euro können wir eine robuste
						Handpumpe anschaffen.
					</template>
					<template #3
						>Kleinere Beträge summieren sich Tropfen für Tropfen, bis
						das Wasser fließt.
					</template>
				</TemplatesLineUp>
			</div>
			<LazyDonate />
			<LazyTemplatesExploreMoreTemplate
				:page="{ title: 'Brunnenbau' }">
				<LinkCardsBrunnenbauMotivation />
				<LinkCardsBrunnenbauVorgehen />
				<LinkCardsBrunnenbauStandorte />
			</LazyTemplatesExploreMoreTemplate>
		</article>
	</div>
</template>
