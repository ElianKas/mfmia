<script setup>
	useSeoMeta({
		title: 'Austausch zwischen Schulen fördern',
		description:
			'Fördern Sie den interkulturellen Austausch durch Schulpartnerschaften zwischen Deutschland und Kamerun.',
	});
</script>
<template>
	<div>
		<article>
			<TemplatesFirstParagraphProjects>
				<template #logo>
					<SvgsIconsBildungSchulpartnerschaften class="shrink-0"
				/></template>
				<template #title>Schulpartnerschaften</template>
				<template #subtitle
					>Austausch zwischen Schulen fördern
				</template>
				<template #description
					>Um langanhaltende Unterstützung für Schulen zu
					gewährleisten, haben wir die Initiative ergriffen,
					Partnerschaften zwischen Schulen in der Region Kassel und in
					Kamerun zu fördern. Bislang konnten bereits zwei
					Partnerschaften realisiert werden: Zwischen der Reformschule
					Kassel und der öffentlichen Schule Nkomotou III nördlich von
					Yaoundé sowie zwischen der Grundschule Ahnatal/Heckershausen
					und der katholischen Grundschule Saint-Jean-Baptiste in
					Leng-Tombo.
				</template>
				<template #image
					><StoryblokImage
						class="w-full h-full object-cover"
						src="https://a.storyblok.com/f/311834/6000x4000/a72a3107a5/img_3401_wmahxd.jpg" />
				</template>
			</TemplatesFirstParagraphProjects>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsHighlighted>
					Das Ziel dieser Partnerschaften ist es, einen direkten
					Austausch zwischen den Schulgemeinschaften zu ermöglichen,
					der es ihnen erlaubt, in die unterschiedlichen Lebenswelten
					und Kulturen einzutauchen. Es soll ein Raum für die
					Entwicklung von gegenseitigem Verständnis und Empathie unter
					allen Beteiligten – Schülerkindern, Lehrerkräften und Eltern
					– geschaffen werden. Gemeinsam möchten wir das Bewusstsein
					für Weltoffenheit und Toleranz stärken und die Ziele der
					Vereinten Nationen für eine nachhaltige Entwicklung
					unterstützen, um so globales Denken und Lernen zu fördern.
				</TemplatesParagraphsHighlighted>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<p>
							Die Schulen haben auch die Möglichkeit, Spenden für die
							Bedürfnisse ihrer Partner-Schulen in Kamerun zu sammeln,
							wodurch sie unmittelbar die Auswirkungen ihres
							Engagements sehen können. Wir übernehmen die Abwicklung
							der Überweisungen und die Überprüfung der Belege.
							<br /><br />
							Inzwischen gab es schon viele schöne Bilder und kurze
							Videos, die per WhatsApp zwischen Deutschland und
							Kamerun ausgetauscht wurden und spannende Einblicke in
							den Schulalltag ermöglichten. Und es werden an den
							Kameruner Schulen konkrete Verbesserungen möglich, die
							ohne die Schulgemeinschaften in Kassel nicht zustande
							gekommen wären!
						</p>
						<div class="text-orange my-[1rem]">
							<NuxtLink
								to="https://reformschule.de/spendenaktion-sehr-erfolgreich/"
								target="_blank">
								<p>
									Artikel auf der Homepage der Reformschule von Juni
									2024
								</p>
							</NuxtLink>
							<br />
							<NuxtLink
								to="https://miteinander-fuer-afrika.de/news/aktuelles/2024-10-11-buch-fuer-schulkinder"
								target="_blank">
								<p>Artikel auf unserer Homepage vom Oktober 2024</p>
							</NuxtLink>
						</div>
					</template>
					<template #right>
						<div
							class="flex flex-col md:flex-row gap-[2rem] items-center h-full">
							<div class="h-full w-full">
								<div
									class="rounded-[--border-radius] aspect-[3/4] w-full mb-[2rem]">
									<StoryblokImage
										class="object-cover w-full h-full"
										src="https://a.storyblok.com/f/311834/6000x4000/5f8f383232/img_3431_zwlopi.jpg" />
								</div>
								<div
									class="rounded-[--border-radius] aspect-[3/4] w-full">
									<StoryblokImage
										class="object-cover w-full h-full"
										src="https://a.storyblok.com/f/311834/6000x4000/5489b7e95d/img_3653_ame10q.jpg" />
								</div>
							</div>
							<div
								class="rounded-[--border-radius] aspect-[3/4] w-full">
								<StoryblokImage
									class="object-cover w-full h-full object-[80%_50%]"
									src="https://a.storyblok.com/f/311834/6000x4000/4f657dc150/img_3407_xdgwtk.jpg" />
							</div>
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsImageBanner>
					<StoryblokImage
						class="w-full h-full object-cover"
						src="https://a.storyblok.com/f/311834/4968x1699/84adbca6a6/gruppenbild-reformschule.png" />
				</TemplatesParagraphsImageBanner>
			</div>
		</article>
		<LazyTemplatesExploreMoreTemplate
			:page="{ title: 'Bildung', link: '/projekte/bildung' }">
			<LinkCardsBildungHerausforderungen />
			<LinkCardsBildungSchulsystem />
			<LinkCardsBildungPatenschaften />
			<LinkCardsBildungSchulenbau />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
