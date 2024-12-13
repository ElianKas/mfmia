<script setup>
	useSeoMeta({
		title: 'Was den Schulbesuch erschwert',
		description:
			'Die aktuellen Herausforderungen im Bildungssektor Kameruns und wie unsere Projekte dazu beitragen, diese zu überwinden.',
	});
</script>
<template>
	<div>
		<article>
			<TemplatesFirstParagraphProjects>
				<template #logo>
					<SvgsIconsBildungHerausforderungen class="shrink-0"
				/></template>
				<template #title>Herausforderungen</template>
				<template #subtitle>Was den Schulbesuch erschwert </template>
				<template #description
					>Zur Schule zu gehen ist in Kamerun nicht
					selbstverständlich. Es gibt keine funktionierende
					Schulpflicht und die Familien stehen vor einer Vielzahl von
					Hürden. Manche Eltern haben kein Geld für das erforderliche
					Schulgeld oder sehen im schlimmsten Fall keine
					Notwendigkeit, die Kinder zur Schule zu schicken. Denn
					zuhause haben die Kinder viele Aufgaben, die zum Überleben
					der Familie wichtig sind. Da scheint es oft einfacher, die
					Kinder zu Hause arbeiten zu lassen, statt sie zur Schule zu
					schicken.
				</template>
				<template #image
					><StoryblokImage
						class="w-full h-full object-cover"
						src="https://a.storyblok.com/f/311834/6000x4000/d6552a757c/img_3588_pitjdp.jpg" />
				</template>
			</TemplatesFirstParagraphProjects>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsLeftRight class="pt-[6rem]">
					<template #left>
						<div class="flex items-center h-full">
							<p>
								Oft leben die Kinder bei Pflege- oder Großeltern, wenn
								ihre Eltern weit entfernt arbeiten müssen oder gar
								verstorben sind. Auch dann ist in der Regel kein Geld
								für Schulgeld vorhanden. Manche Kinder haben
								Lernschwierigkeiten, die nicht erkannt werden.
								Sehprobleme beispielsweise führen dazu, dass ein Kind
								im Unterricht nicht mitkommt, bei den Prüfungen
								scheitert und die Schule abbricht. Eine augenärztliche
								Untersuchung und eine Brille können die Familien aber
								oft nicht bezahlen.
							</p>
						</div>
					</template>
					<template #right>
						<div
							class="flex flex-col md:flex-row gap-[2rem] items-center">
							<div
								class="rounded-[--border-radius] aspect-[3/4] w-full">
								<StoryblokImage
									class="w-full h-full object-cover"
									src="https://a.storyblok.com/f/311834/1606x2089/220abf5f09/kamerunischer-junge-mit-kopfhaut-krankheit.png" />
							</div>
							<div
								class="rounded-[--border-radius] aspect-[3/4] w-full md:mt-[-8rem]">
								<StoryblokImage
									src="https://a.storyblok.com/f/311834/6000x4000/9804152e52/img_4551_ximolt.jpg"
									class="w-full h-full object-cover" />
							</div>
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsHighlighted>
					Die Schulgebäude sind häufig in einem desolaten Zustand. In
					der Regenzeit tropft es durch undichte Dächer. Die Wände
					zwischen den Klassenräumen sind kaputt, so dass die sowieso
					schon überfüllten Klassen mit bis zu 60 Schülerinnen und
					Schülern sich gegenseitig stören.
				</TemplatesParagraphsHighlighted>
				<TemplatesParagraphsImageBanner>
					<StoryblokImage
						src="https://a.storyblok.com/f/311834/6000x4000/6ebec57681/img_3645_ydxwde.jpg"
						class="w-full h-full object-cover object-[50%_80%]" />
				</TemplatesParagraphsImageBanner>
				<TemplatesParagraphsHighlighted>
					Besonders für Mädchen sind die oft unzureichenden oder
					fehlenden Sanitäranlagen schlimm. Während der Menstruation
					bleiben sie regelmäßig dem Unterricht fern, was wiederum
					ihre Leistung beeinträchtigt und manchmal zum Schulabbruch
					führt.
				</TemplatesParagraphsHighlighted>
			</div>
		</article>
		<LazyTemplatesExploreMoreTemplate
			:page="{ title: 'Bildung', link: '/projekte/bildung' }">
			<LinkCardsBildungSchulsystem />
			<LinkCardsBildungPatenschaften />
			<LinkCardsBildungSchulpartnerschaften />
			<LinkCardsBildungSchulenbau />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
