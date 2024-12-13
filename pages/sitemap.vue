<script setup>
	useSeoMeta({
		title: 'Sitemap',
	});

	const pages = [
		{ name: 'Home', link: 'https://mfmia.vercel.app/' },
		{
			name: 'Datenschutz',
			link: 'https://mfmia.vercel.app/datenschutz',
		},
		{
			name: 'Disclaimer',
			link: 'https://mfmia.vercel.app/disclaimer',
		},
		{ name: 'Impressum', link: 'https://mfmia.vercel.app/impressum' },
		{ name: 'Kontakt', link: 'https://mfmia.vercel.app/kontakt' },
		{ name: 'News', link: 'https://mfmia.vercel.app/news' },
		{ name: 'Projekte', link: 'https://mfmia.vercel.app/projekte' },
		{ name: 'Sitemap', link: 'https://mfmia.vercel.app/sitemap' },
		{ name: 'Spenden', link: 'https://mfmia.vercel.app/spenden' },
		{ name: 'Storys', link: 'https://mfmia.vercel.app/storys' },
		{ name: 'Verein', link: 'https://mfmia.vercel.app/verein' },
		{
			name: 'Aktuelles',
			link: 'https://mfmia.vercel.app/news/aktuelles',
		},
		{
			name: 'Newsletter',
			link: 'https://mfmia.vercel.app/news/newsletter',
		},
		{ name: 'Presse', link: 'https://mfmia.vercel.app/news/presse' },
		{
			name: 'Bildung',
			link: 'https://mfmia.vercel.app/projekte/bildung',
		},
		{
			name: 'Brunnenbau',
			link: 'https://mfmia.vercel.app/projekte/brunnenbau',
		},
		{
			name: 'Hilfe zur Selbsthilfe',
			link: 'https://mfmia.vercel.app/projekte/hilfe-zur-selbsthilfe',
		},
		{
			name: 'Hygiene Gesundheit',
			link: 'https://mfmia.vercel.app/projekte/hygiene-gesundheit',
		},
		{
			name: 'Kamerun',
			link: 'https://mfmia.vercel.app/projekte/kamerun',
		},
		{
			name: 'Aktiv Werden',
			link: 'https://mfmia.vercel.app/verein/aktiv-werden',
		},
		{
			name: 'Geschichte',
			link: 'https://mfmia.vercel.app/verein/geschichte',
		},
		{ name: 'Team', link: 'https://mfmia.vercel.app/verein/team' },
		{
			name: 'Herausforderungen',
			link: 'https://mfmia.vercel.app/projekte/bildung/herausforderungen',
		},
		{
			name: 'Patenschaften',
			link: 'https://mfmia.vercel.app/projekte/bildung/patenschaften',
		},
		{
			name: 'Schulenbau',
			link: 'https://mfmia.vercel.app/projekte/bildung/schulenbau',
		},
		{
			name: 'Schulpartnerschaften',
			link: 'https://mfmia.vercel.app/projekte/bildung/schulpartnerschaften',
		},
		{
			name: 'Schulsystem',
			link: 'https://mfmia.vercel.app/projekte/bildung/schulsystem',
		},
		{
			name: 'Motivation',
			link: 'https://mfmia.vercel.app/projekte/brunnenbau/motivation',
		},
		{
			name: 'Standorte',
			link: 'https://mfmia.vercel.app/projekte/brunnenbau/standorte',
		},
		{
			name: 'Vorgehen',
			link: 'https://mfmia.vercel.app/projekte/brunnenbau/vorgehen',
		},
		{
			name: 'Plantagen',
			link: 'https://mfmia.vercel.app/projekte/hilfe-zur-selbsthilfe/plantagen',
		},
		{
			name: 'Plastik Recycling',
			link: 'https://mfmia.vercel.app/projekte/hilfe-zur-selbsthilfe/plastik-recycling',
		},
		{
			name: 'Solar Light',
			link: 'https://mfmia.vercel.app/projekte/hilfe-zur-selbsthilfe/solar-light',
		},
		{
			name: 'Perioden Power',
			link: 'https://mfmia.vercel.app/projekte/hygiene-gesundheit/perioden-power',
		},
		{
			name: 'Standorte',
			link: 'https://mfmia.vercel.app/projekte/hygiene-gesundheit/standorte',
		},
		{
			name: 'Toilettenhäuser',
			link: 'https://mfmia.vercel.app/projekte/hygiene-gesundheit/toilettenhaeuser',
		},
		{
			name: 'Vorgehen',
			link: 'https://mfmia.vercel.app/projekte/hygiene-gesundheit/vorgehen',
		},
		{
			name: 'Infrastruktur',
			link: 'https://mfmia.vercel.app/projekte/kamerun/infrastruktur',
		},
	];
</script>
<template>
	<div>
		<article
			class="min-h-[100vh] px-[1rem] md:px-[3rem] max-w-[--max-width] m-auto py-[5rem]">
			<h1 class="text-big font-bold text-green pb-[2rem]">Sitemap</h1>
			<div
				class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1rem]">
				<div
					v-for="page in pages"
					:key="page.name">
					<h2>
						<NuxtLink :to="page.link">{{ page.name }}</NuxtLink>
					</h2>
				</div>
			</div>
		</article>
	</div>
</template>
