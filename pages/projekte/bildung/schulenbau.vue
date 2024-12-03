<script setup>
	const currentSlide = ref(0);
	const slides1 = [
		{
			src: 'https://a.storyblok.com/f/311834/1293x1682/883917c466/be84f7d9-c6e8-4daf-8a71-b21bd3348643.png',
		},
		{
			src: 'https://a.storyblok.com/f/311834/6000x4000/3731f9da89/img_4465_uydcuy.jpg',
		},
		{
			src: 'https://a.storyblok.com/f/311834/4032x3024/e1653a962d/img_8687_gvh49r.jpg',
		},
		{
			src: 'https://a.storyblok.com/f/311834/6000x4000/601998b3ac/img_4575_vemf5d.jpg',
		},
		{
			src: 'https://a.storyblok.com/f/311834/2353x1683/18c1bfebbb/2020-10-fertige-schule.png',
		},
	];
	const slides2 = [
		{
			src: 'https://a.storyblok.com/f/311834/1293x1682/82d8c6dba4/aktrenschuleleng_renovierungsarbeiten_web.png',
		},
		{
			src: 'https://a.storyblok.com/f/311834/2352x1682/b9c863232f/aktrenschuleleng_schulgebaude_web.png',
		},
		{
			src: 'https://a.storyblok.com/f/311834/1293x1682/859062b99e/bau_img_1223.png',
		},
		{
			src: 'https://a.storyblok.com/f/311834/2352x1682/5410008349/aktrenschuleleng_verstarkung-des-fundaments_web.png',
		},
		{
			src: 'https://a.storyblok.com/f/311834/2353x1682/a87a844b9a/bau_4e8c8a1c-78b6-430b-b5b6-a0102f957d3c.png',
		},
	];
	const slides3 = [
		{
			src: 'https://a.storyblok.com/f/311834/2353x1682/741b78b72f/mbalmayo-gruppenfoto-600x450.png',
		},
		{
			src: 'https://a.storyblok.com/f/311834/2352x1682/cff1859513/schule_nach_renovierung.png',
		},
		{
			src: 'https://a.storyblok.com/f/311834/2353x1682/f4a466a766/mbalmayo-decke-600x450.png',
		},
		{
			src: 'https://a.storyblok.com/f/311834/2352x1682/6fd71a67af/schueler_auf_schulhof.png',
		},
	];

	function slideTo(index) {
		currentSlide.value = index;
	}
</script>
<template>
	<div>
		<article>
			<TemplatesFirstParagraphProjects>
				<template #logo>
					<SvgsIconsBildungSchulenbau class="shrink-0"
				/></template>
				<template #title>Schulenbau</template>
				<template #subtitle>Unsere Schulprojekte </template>
				<template #description
					>Durch unsere engen Kontakte nach Kamerun stoßen wir immer
					wieder auf Schulen, die sich in einem sehr schlechten
					Zustand befinden. So schlecht, dass guter Unterricht für
					Lehrer und Schüler unmöglich ist. In der Folge melden viele
					Eltern ihre Kinder nicht mehr an diesen Schulen an. Weniger
					Schüler bedeuten weniger Einnahmen für die Schule. Die kann
					gute Lehrer und Unterrichtsmaterial dann nicht mehr
					bezahlen.
					<br />
					<br />
					Wir wollen diesen Teufelskreis durchbrechen, indem wir
					einzelne Schulen gezielt durch eine Renovierung
					unterstützen. Bei Bedarf spenden wir auch Mittel für
					Unterrichtsmaterial. Beides motiviert die Lehrer und der
					Unterrichtsbesuch wird für Eltern und Kinder wieder
					attraktiver. Die Schülerzahlen steigen und damit stehen
					wieder mehr Mittel für guten Unterricht zur Verfügung.
				</template>
				<template #image
					><StoryblokImage
						class="w-full h-full object-cover"
						src="https://a.storyblok.com/f/311834/6000x4000/642d1b7db4/img_4766_mhu8sa.jpg" />
				</template>
			</TemplatesFirstParagraphProjects>
			<div class="px-[1rem] md:px-[3rem]">
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
					</template>
					<template #right>
						<div
							class="rounded-[--border-radius] aspect-[4/3] w-full">
							<StoryblokImage
								src="https://a.storyblok.com/f/311834/4032x3024/a8945005af/img_8690_im32li.jpg"
								class="object-cover w-full h-full" />
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
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
					</template>
					<template #right>
						<Carousel v-model="currentSlide">
							<Slide
								v-for="slide in slides1"
								:key="slide">
								<StoryblokImage
									:src="slide.src"
									class="object-cover w-full h-full" />
							</Slide>
						</Carousel>
						<br />
						<Carousel
							v-model="currentSlide"
							:items-to-show="3"
							:wrap-around="true">
							<Slide
								@click="slideTo(index)"
								v-for="(slide, index) in slides1"
								:key="slide"
								class="cursor-pointer">
								<StoryblokImage
									class="rounded-[--border-radius] w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover"
									:src="slide.src" />
							</Slide>
						</Carousel>
					</template>
				</TemplatesParagraphsLeftRight>
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
					</template>
					<template #right>
						<Carousel v-model="currentSlide">
							<Slide
								v-for="slide in slides2"
								:key="slide">
								<StoryblokImage
									:src="slide.src"
									class="object-cover w-full h-full" />
							</Slide>
						</Carousel>
						<br />
						<Carousel
							v-model="currentSlide"
							:items-to-show="3"
							:wrap-around="true">
							<Slide
								@click="slideTo(index)"
								v-for="(slide, index) in slides2"
								:key="slide"
								class="cursor-pointer">
								<StoryblokImage
									class="rounded-[--border-radius] w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover"
									:src="slide.src" />
							</Slide>
						</Carousel>
					</template>
				</TemplatesParagraphsLeftRight>
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
					</template>
					<template #right>
						<Carousel v-model="currentSlide">
							<Slide
								v-for="slide in slides3"
								:key="slide">
								<StoryblokImage
									:src="slide.src"
									class="object-cover w-full h-full" />
							</Slide>
						</Carousel>
						<br />
						<Carousel
							v-model="currentSlide"
							:items-to-show="3"
							:wrap-around="true">
							<Slide
								@click="slideTo(index)"
								v-for="(slide, index) in slides3"
								:key="slide"
								class="cursor-pointer">
								<StoryblokImage
									class="rounded-[--border-radius] w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover"
									:src="slide.src" />
							</Slide>
						</Carousel>
					</template>
				</TemplatesParagraphsLeftRight>
			</div>
		</article>
		<LazyTemplatesExploreMoreTemplate
			:page="{ title: 'Bildung', link: '/projekte/bildung' }">
			<LinkCardsBildungHerausforderungen />
			<LinkCardsBildungSchulsystem />
			<LinkCardsBildungPatenschaften />
			<LinkCardsBildungSchulpartnerschaften />
		</LazyTemplatesExploreMoreTemplate>
	</div>
</template>
