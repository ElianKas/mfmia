<template>
	<div>
		<article>
			<TemplatesHeroSectionTemplate>
				<template #title> Über Kamerun </template>
				<template #description
					>Wie wir Kamerun als Gäste erleben</template
				>
				<template #logo>
					<SvgsIconsKamerun />
				</template>
			</TemplatesHeroSectionTemplate>
			<div class="px-[1rem] md:px-[3rem]">
				<TemplatesParagraphsHighlighted>
					Kamerun ist wunderschön. Das Land gilt als Afrika im
					Kleinformat. Tatsächlich findet man dort alle für den
					afrikanischen Kontinent typischen Landschaftsformen: der
					Norden ist wüstenartig und sehr trocken. Durch den Süden
					fließen große Flüsse, das Land ist grün. Im Westen und im
					Südosten gibt es sogar tropischen Regenwald.
				</TemplatesParagraphsHighlighted>
				<div
					class="justify-between items-center my-[8rem] gap-[3rem] hidden md:flex">
					<div
						class="aspect-[3/4] w-[300px] mb-[-6rem] border rounded-[--border-radius]"></div>
					<div
						class="aspect-[3/4] w-[420px] mb-[-6rem] border rounded-[--border-radius]"></div>
					<div
						class="aspect-[3/4] w-[350px] mt-[-6rem] border rounded-[--border-radius]"></div>
					<div
						class="aspect-[3/4] w-[400px] mb-[-6rem] border rounded-[--border-radius]"></div>
				</div>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<p>
							Wir sind mit unseren Projekten ausschließlich im Süden
							aktiv. Der Norden gilt für Europäer als gefährlich. Oft
							schon haben Boko Haram oder andere Terrorgruppen dort
							Menschen entführt. Auch der Westen ist inzwischen
							unsicher. Grund dafür sind die anhaltenden Konflikte der
							französisch-geprägten Regierung und Verwaltung mit dem
							englischsprachigen Westen, insbesondere mit
							Separatistengruppen.
						</p>
					</template>
					<template #right
						><p>
							Wie gesagt: der Süden ist grün und es gibt große Flüsse
							dort. Trotzdem haben die Menschen dort oft keinen Zugang
							zu sauberem Trinkwasser. Es gibt Wasser in geringer
							Bodentiefe, aber für die Menschen ist es unerreichbar.
							Sie nutzen stattdessen alte Wasserstellen und defekte
							Brunnen. Es fehlt staatliche Hilfe, um sie zu erneuern.
							Staatliche Gelder fließen in die großen Städte, in
							Prestigeobjekte oder – noch häufiger – direkt an
							korrupte Politiker, Beamte oder Unternehmer.
						</p>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<div class="flex h-full items-center">
							<p>
								Trotz der einfachen Lebensverhältnisse sind die
								Menschen gerade auf dem Land lebensfroh, offen und
								fröhlich. Es ist schön, sie zu treffen – überall wird
								man herzlich empfangen. Ein Gottesdienst ist jedes Mal
								ein Erlebnis. Die Leute machen sich schick, die Frauen
								tragen schöne bunte Kleider. Es wird gefeiert und
								wunderschön gesungen.
							</p>
						</div>
					</template>
					<template #right>
						<div
							class="border rounded-[--border-radius] aspect-[3/4] w-full md:w-[80%]"></div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<div class="flex flex-col-reverse md:block">
							<p>
								Auch die Einweihung eines Brunnens mit den
								Dorfbewohnern ist toll. Oder der Besuch einer Schule.
								In den Pausen herrscht meist ein fröhliches und buntes
								Treiben. Die Kinder spielen kreativ mit allen, was sie
								finden können. Die Klassen allerdings sind groß, die
								Lehrmittel einfach, die Lehrerinnen und Lehrer
								schlecht bezahlt. Das Niveau des Unterrichts ist auf
								dem Land entsprechend niedrig. Die größte Hürde ist
								allerdings, dass Schule Geld kostet. So gehen bei
								weitem nicht alle Kinder regelmäßig zur Schule.
								Besonders benachteiligt sind die Mädchen, die noch
								mehr als die Jungen Arbeiten zu Hause zu erledigen
								haben. Außerdem bleiben sie während der Periode wegen
								fehlender Toiletten und Rückzugsräumen vollständig dem
								Unterricht fern.
							</p>
							<br />
							<br />
							<SvgsContentCountry />
						</div>
					</template>
					<template #right>
						<div
							class="border rounded-[--border-radius] w-full aspect-[3/4] md:w-[80%]"></div>
					</template>
				</TemplatesParagraphsLeftRight>
				<TemplatesParagraphsLeftRight>
					<template #left>
						<p>
							So erfahren wir vor Ort ständig die Gegensätze zwischen
							den fröhlichen Menschen und den schwierigen
							Rahmenbedingungen, die sie in ihrer Entwicklung bremsen.
							Ganz besonders zu nennen ist die schlechte Infrastruktur
							auf dem Land.
						</p>
					</template>
					<template #right>
						<p>
							Trotzdem – oder vielleicht gerade deshalb - ist es eine
							großartige Erfahrung, dort zu Gast sein und die Menschen
							ein wenig zu unterstützen.
						</p>
					</template>
				</TemplatesParagraphsLeftRight>
			</div>
		</article>
		<LazyDonate />
		<LazyTemplatesExploreMoreTemplate :page="{ title: 'Kamerun' }">
			<LinkCardsKamerunInfrastruktur />
		</LazyTemplatesExploreMoreTemplate>
		<aside class="max-w-[--max-width] m-auto px-[1rem] mb-[5rem]">
			<h2 class="font-bold">Weiterführende Links</h2>
			<div class="h-[1px] border-b"></div>
			<br />
			<p class="font-bold">
				Bundesministerium für wirtschaftliche Zusammenarbeit und
				Entwicklung
				<br />
				<NuxtLink
					class="text-orange font-normal"
					to="https://www.bmz.de/de/laender/kamerun"
					target="_blank"
					><u>https://www.bmz.de/de/laender/kamerun</u></NuxtLink
				>
			</p>
			<br />
			<br />
			<p class="font-bold">
				Zusammenarbeit mit der Deutschen Gesellschaft für
				Internationale Zusammenarbeit (GIZ)
				<br />
				<span class="font-normal">Kamerun</span>
				<br />
				<NuxtLink
					class="text-orange font-normal"
					to="https://www.giz.de/de/weltweit/345.html"
					target="_blank"
					><u>https://www.giz.de/de/weltweit/345.html</u></NuxtLink
				>
			</p>
			<br />
			<br />
			<p class="font-bold">
				afrika-junior.de
				<br />
				<span class="font-normal"
					>Einblicke für Jugendliche - sicheres Surfen für Kinder von
					6 - 12 Jahren</span
				>
				<br />
				<NuxtLink
					class="text-orange font-normal"
					to="https://www.afrika-junior.de/inhalt/kontinent/kamerun/schulen-und-bildung.html"
					target="_blank"
					><u
						>https://www.afrika-junior.de/inhalt/kontinent/kamerun/schulen-und-bildung.html</u
					></NuxtLink
				>
			</p>
			<br />
		</aside>
	</div>
</template>
