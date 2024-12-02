<template>
	<footer>
		<section
			class="px-[1rem] h-[350px] bg-[#000] grid place-items-center text-white px-[1rem] md:px-[3rem] relative">
			<StoryblokImage
				class="absolute inset-0 w-full h-full object-cover opacity-50"
				src="https://a.storyblok.com/f/311834/1927x1067/bb90be64ba/rechteck-139.png" />
			<div class="text-center z-[9]">
				<p class="md:max-w-[400px] m-auto">
					Helfen Sie mit Ihrer Spende, Projekte zu realisieren, die
					den Menschen in Kamerun ein unabhängiges und
					selbstbestimmtes Leben ermöglichen.
				</p>
				<br />
				<button class="btn bg-orange text-white border-none">
					Jetzt spenden
				</button>
				<br />
				<br />
				<p>
					<NuxtLink to="/spenden"><u>Zur Spendenseite</u></NuxtLink>
				</p>
			</div>
		</section>
		<section
			class="min-h-[350px] bg-[#2C1200] text-white px-[1rem] md:px-[3rem] py-[2rem] flex items-center">
			<div
				class="max-w-[--max-width] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] md:gap-[5rem] md:gap-y-[2rem]">
				<div class="md:min-h-[200px]">
					<h3 class="text-orange font-bold pb[.5rem]">
						Miteinander - für Menschen in Afrika e.V.
					</h3>
					<p>
						Wir sind ein gemeinnütziger Verein, der sich seit 2013 in
						Kamerun für Bildung, Gesundheit und Hilfe zur Selbsthilfe
						einsetzt, um die Lebensbedingungen und Zukunftschancen der
						lokalen Gemeinschaften nachhaltig zu stärken.
					</p>
				</div>
				<div class="md:min-h-[200px]">
					<h3 class="text-orange font-bold pb[.5rem]">
						Spendenkonto
					</h3>
					<p>
						Miteinander - für Menschen in Afrika e.V. <br />
						Evangelische Bank <br />
						BIC: GENODEF1EK1 <br />
						IBAN: DE02 5206 0410 0000 8044 87 <br />
					</p>
				</div>
				<div class="md:min-h-[200px]">
					<h3 class="text-orange font-bold pb[.5rem]">Kontakt</h3>
					<p>
						Kölnische Straße 55 <br />
						D-34117 Kassel <br />
						Telefon: +49 561-15470 <br />
						E-Mail: miteinander-fuer-afrika@t-online.de <br />
					</p>
				</div>
			</div>
		</section>
		<section
			class="h-[350px] p-[2rem] bg-[#000] flex flex-col items-center justify-between relative">
			<StoryblokImage
				class="absolute inset-0 w-full h-full object-cover opacity-50"
				src="https://a.storyblok.com/f/311834/1927x1067/bb90be64ba/rechteck-139.png" />
			<SvgsLogoEmblem class="z-[9]" />
			<nav
				class="flex gap-[1rem] md:gap-[5rem] text-white max-md:w-full justify-between z-[9]">
				<NuxtLink to="/impressum">Impressum</NuxtLink>
				<NuxtLink to="/datenschutz">Datenschutz</NuxtLink>
				<NuxtLink to="/sitemap">Sitemap</NuxtLink>
			</nav>
		</section>
	</footer>
</template>
