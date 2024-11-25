<template>
	<div>
		<article class="px-[1rem]">
			<div class="py-[1rem] md:p-[3rem]">
				<TemplatesHeroSectionTemplate
					title="Über Kamerun"
					description="Wie wir Kamerun als Gäste erleben">
					<SvgsIconsKamerun />
				</TemplatesHeroSectionTemplate>
			</div>
			<p
				class="max-w-[--max-width] m-auto text-highlight mt-[5rem] md:mt-[10rem]">
				Kamerun ist wunderschön. Das Land gilt als Afrika im
				Kleinformat. Tatsächlich findet man dort alle für den
				afrikanischen Kontinent typischen Landschaftsformen: der
				Norden ist wüstenartig und sehr trocken. Durch den Süden
				fließen große Flüsse, das Land ist grün. Im Westen und im
				Südosten gibt es sogar tropischen Regenwald.
			</p>
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
			<div
				class="flex flex-col md:flex-row gap-[2rem] xl:gap-[10rem] max-w-[--max-width] m-auto py-[5rem]">
				<p class="md:w-[50%]">
					Wir sind mit unseren Projekten ausschließlich im Süden
					aktiv. Der Norden gilt für Europäer als gefährlich. Oft
					schon haben Boko Haram oder andere Terrorgruppen dort
					Menschen entführt. Auch der Westen ist inzwischen unsicher.
					Grund dafür sind die anhaltenden Konflikte der
					französisch-geprägten Regierung und Verwaltung mit dem
					englischsprachigen Westen, insbesondere mit
					Separatistengruppen.
				</p>
				<p class="md:w-[50%]">
					Wie gesagt: der Süden ist grün und es gibt große Flüsse
					dort. Trotzdem haben die Menschen dort oft keinen Zugang zu
					sauberem Trinkwasser. Es gibt Wasser in geringer Bodentiefe,
					aber für die Menschen ist es unerreichbar. Sie nutzen
					stattdessen alte Wasserstellen und defekte Brunnen. Es fehlt
					staatliche Hilfe, um sie zu erneuern. Staatliche Gelder
					fließen in die großen Städte, in Prestigeobjekte oder – noch
					häufiger – direkt an korrupte Politiker, Beamte oder
					Unternehmer.
				</p>
			</div>
			<div
				class="flex flex-col md:flex-row gap-[2rem] xl:gap-[10rem] items-center max-w-[--max-width] m-auto py-[5rem]">
				<p class="md:w-[50%]">
					Trotz der einfachen Lebensverhältnisse sind die Menschen
					gerade auf dem Land lebensfroh, offen und fröhlich. Es ist
					schön, sie zu treffen – überall wird man herzlich empfangen.
					Ein Gottesdienst ist jedes Mal ein Erlebnis. Die Leute
					machen sich schick, die Frauen tragen schöne bunte Kleider.
					Es wird gefeiert und wunderschön gesungen.
				</p>
				<div class="md:w-[50%]">
					<div
						class="border rounded-[--border-radius] aspect-[3/4] w-full md:w-[80%]"></div>
				</div>
			</div>
			<div
				class="flex flex-col md:flex-row gap-[2rem] xl:gap-[10rem] items-center max-w-[--max-width] m-auto py-[5rem]">
				<div class="md:w-[50%] flex flex-col-reverse md:block">
					<p>
						Auch die Einweihung eines Brunnens mit den Dorfbewohnern
						ist toll. Oder der Besuch einer Schule. In den Pausen
						herrscht meist ein fröhliches und buntes Treiben. Die
						Kinder spielen kreativ mit allen, was sie finden können.
						Die Klassen allerdings sind groß, die Lehrmittel einfach,
						die Lehrerinnen und Lehrer schlecht bezahlt. Das Niveau
						des Unterrichts ist auf dem Land entsprechend niedrig. Die
						größte Hürde ist allerdings, dass Schule Geld kostet. So
						gehen bei weitem nicht alle Kinder regelmäßig zur Schule.
						Besonders benachteiligt sind die Mädchen, die noch mehr
						als die Jungen Arbeiten zu Hause zu erledigen haben.
						Außerdem bleiben sie während der Periode wegen fehlender
						Toiletten und Rückzugsräumen vollständig dem Unterricht
						fern.
					</p>
					<br />
					<br />
					<SvgsContentCountry />
				</div>
				<div class="md:w-[50%]">
					<div
						class="border rounded-[--border-radius] w-full aspect-[3/4] md:w-[80%]"></div>
				</div>
			</div>
			<div
				class="flex flex-col md:flex-row gap-[2rem] xl:gap-[10rem] max-w-[--max-width] m-auto">
				<p class="md:w-[50%]">
					So erfahren wir vor Ort ständig die Gegensätze zwischen den
					fröhlichen Menschen und den schwierigen Rahmenbedingungen,
					die sie in ihrer Entwicklung bremsen. Ganz besonders zu
					nennen ist die schlechte Infrastruktur auf dem Land.
				</p>
				<p class="md:w-[50%]">
					Trotzdem – oder vielleicht gerade deshalb - ist es eine
					großartige Erfahrung, dort zu Gast sein und die Menschen ein
					wenig zu unterstützen.
				</p>
			</div>
		</article>
		<Donate />
		<TemplatesExploreMoreTemplate :page="{ title: 'Kamerun' }">
			<LinkCardsKamerunInfrastruktur />
		</TemplatesExploreMoreTemplate>
	</div>
</template>
