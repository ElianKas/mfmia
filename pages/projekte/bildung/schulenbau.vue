<script setup>
	const currentSlide = ref(0);
	const currentSlide2 = ref(0);
	const currentSlide3 = ref(0);
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
						<h2 class="text-big font-bold text-orange">
							2020: Erweiterung der Grundschule in Leng-Tombo
						</h2>
						<br />
						<p>
							Die Schülerzahlen sind nach der Renovierung der Schule
							so stark angestiegen, dass die Klassenräume schon im
							Herbst 2019 aus allen Nähten platzten. Fast 130
							Schülerinnen und Schüler drängten sich in den drei
							kleinen Klassenräumen. So entschieden wir, die Schule
							durch ein zweites Gebäude zu erweitern. Das neue Haus
							sollte direkt neben dem alten entstehen und zwei
							Klassenräume sowie ein kleines Lehrerzimmer umfassen.
							<br /><br />
							Schon im März des darauffolgenden Jahres ging es mit dem
							Bau los. Das Gebäude sollte bis zum Beginn des
							Schuljahres im September 2020 fertig werden. Leider kam
							die Corona-Pandemie dazwischen. Die Bauarbeiten wurden
							mehrfach unterbrochen. Ende März 2021 war dann aber
							alles fertig.
							<br /><br />
							So besteht die Grundschule St. Jean Baptiste in
							Leng-Tombo jetzt aus 4 Klassen mit entsprechend vielen
							Lehrern, auch eine Vorschulklasse konnte eingerichtet
							werden. Wir freuen uns sehr, damit vielen weiteren
							Schülerinnen und Schülern des Dorfes und der Umgebung
							die Möglichkeit zu geben, die Schule zu besuchen.
							<br /><br />
							<i>
								2023: Kaum zu glauben, ein drittes Schulgebäude ist
								bei unserer Reise im Februar 2023 schon fast fertig!
								Jetzt wird es 8 Klassenräume und 4 Lehrer und
								Lehrerinnen geben, plus der Vorschulklasse.
								<br />
								Wer hat das finanziert? Ein ehemaliger Schüler aus
								Leng-Tombo, der inzwischen reich geworden ist, ist so
								stolz auf die „neue“ Schule, dass er das Geld dafür
								gespendet hat.
							</i>
						</p>
					</template>
					<template #right>
						<div>
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
									@click="currentSlide = index"
									v-for="(slide, index) in slides1"
									:key="slide"
									class="cursor-pointer">
									<StoryblokImage
										class="rounded-[--border-radius] w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover"
										:src="slide.src" />
								</Slide>
							</Carousel>
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<h2 class="text-big font-bold text-orange">
							2018: Renovierung der Grundschule St. Jean Baptiste in
							Leng-Tombo
						</h2>
						<br />
						<p>
							Diese kleine zu einer katholischen Gemeinde gehörende
							Grundschule haben wir Anfang 2018 kennen gelernt. Die
							beiden engagierten Lehrer führten zwei Klassen mit nur
							wenigen Schülern. Auch hier lag der Grund im schlechten
							Zustand der Schule. Dringend erforderlich waren neue
							Türen, eine Reparatur des Daches und verschiedene
							Sanierungsarbeiten am Fundament und an den Außenwänden.
							<br /><br />
							Nach den Vorplanungen wurde die Schule in den
							Sommerferien 2018 renoviert. Dabei finanzierten wir die
							Materialien und auch Kosten für Facharbeiter. Darüber
							hinaus haben Mitglieder der Gemeinde tatkräftig durch
							Eigenleistungen unterstützt.
							<br /><br />
							Die Schule sieht nun wieder tiptop aus. Die
							Anmeldezahlen für neue Schüler waren im September 2018
							so hoch, dass ein neuer Lehrer eingestellt wurde.
						</p>
					</template>
					<template #right>
						<div>
							<Carousel v-model="currentSlide2">
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
								v-model="currentSlide2"
								:items-to-show="3"
								:wrap-around="true">
								<Slide
									@click="currentSlide2 = index"
									v-for="(slide, index) in slides2"
									:key="slide"
									class="cursor-pointer">
									<StoryblokImage
										class="rounded-[--border-radius] w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover"
										:src="slide.src" />
								</Slide>
							</Carousel>
						</div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<h2 class="text-big font-bold text-orange">
							2016: Renovierung der Grundschule Sacré Coeur in
							Mbalmayo
						</h2>
						<br />
						<p>
							Dort fanden wir bei unserem Besuch im Februar 2016 einen
							desolaten Zustand des Schulgebäudes vor: Löcher in den
							Innenwänden, ein undichtes Dach und ein unsicheres
							Toilettenhaus. All diese Mängel hatten in den letzten
							Jahren zu immer weniger Schülern geführt. Die Lehrer
							konnten nicht mehr bezahlt werden. Die hatten die
							letzten Monate ohne Gehalt gearbeitet. Bereits vor Ort
							haben wir spontan geholfen. Vorerst konnten wir den
							Lehrern ein Monatshonorar übergeben. Zurück in
							Deutschland entschlossen wir uns, die Renovierung mit
							einer Spende über rund 2.500 Euro zu unterstützen. Mit
							dem Geld wurde in den Sommerferien 2016 das Dach der
							Schule und auch das Toilettenhäuschen renoviert.
							Außerdem wurde das Gebäude neu gestrichen.
							<br /><br />
							Bereits im darauffolgenden Schuljahr sind die
							Anmeldungen von bisher 90 auf 180 Schüler gestiegen. Mit
							diesem Anstieg können nun auch die vollen Lehrergehälter
							gewährleistet werden. Endlich kann der Schulbetrieb
							wieder stabil laufen.
						</p>
					</template>
					<template #right>
						<div>
							<Carousel v-model="currentSlide3">
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
								v-model="currentSlide3"
								:items-to-show="3"
								:wrap-around="true">
								<Slide
									@click="currentSlide3 = index"
									v-for="(slide, index) in slides3"
									:key="slide"
									class="cursor-pointer">
									<StoryblokImage
										class="rounded-[--border-radius] w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover"
										:src="slide.src" />
								</Slide>
							</Carousel>
						</div>
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
