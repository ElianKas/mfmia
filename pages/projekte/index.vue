<script setup>
	const projects = [
		{
			title: 'Bildung',
			link: '/projekte/bildung',
			subpages: [
				{
					title: 'Übersicht',
					link: '/projekte/bildung',
				},
				{
					title: 'Herausforderungen',
					link: '/projekte/bildung/herausforderungen',
				},
				{
					title: 'Schulsystem',
					link: '/projekte/bildung/schulsystem',
				},
				{
					title: 'Patenschaften',
					link: '/projekte/bildung/patenschaften',
				},
				{
					title: 'Schulpartnerschaften',
					link: '/projekte/bildung/schulpartnerschaften',
				},
				{
					title: 'Schulenbau',
					link: '/projekte/bildung/schulenbau',
				},
			],
		},
		{
			title: 'Brunnenbau',
			link: '/projekte/brunnenbau',
			subpages: [
				{
					title: 'Übersicht',
					link: '/projekte/brunnenbau',
				},
				{
					title: 'Motivation',
					link: '/projekte/brunnenbau/motivation',
				},
				{
					title: 'Vorgehen',
					link: '/projekte/brunnenbau/vorgehen',
				},
				{
					title: 'Standorte',
					link: '/projekte/brunnenbau/standorte',
				},
			],
		},
		{
			title: 'Hilfe zur Selbsthilfe',
			link: '/projekte/hilfe-zur-selbsthilfe',
			subpages: [
				{
					title: 'Übersicht',
					link: '/projekte/hilfe-zur-selbsthilfe',
				},
				{
					title: 'Solar Light',
					link: '/projekte/hilfe-zur-selbsthilfe/solar-light',
				},
				{
					title: 'Plastik Recycling',
					link: '/projekte/hilfe-zur-selbsthilfe/plastik-recycling',
				},
				{
					title: 'Plantagen',
					link: '/projekte/hilfe-zur-selbsthilfe/plantagen',
				},
			],
		},
		{
			title: 'Hygiene & Gesundheit',
			link: '/projekte/hygiene-gesundheit',
			subpages: [
				{
					title: 'Übersicht',
					link: '/projekte/hygiene-gesundheit',
				},
				{
					title: 'Toilettenhäuser',
					link: '/projekte/hygiene-gesundheit/toilettenhaeuser',
				},
				{
					title: 'Vorgehen',
					link: '/projekte/hygiene-gesundheit/vorgehen',
				},
				{
					title: 'Standorte',
					link: '/projekte/hygiene-gesundheit/standorte',
				},
			],
		},
	];
</script>
<template>
	<article>
		<section class="px-[1rem] md:px-[3rem]">
			<h1
				class="font-bold text-orange text-big text-center mt-[5rem]">
				Lerne unsere Projekte kennen
			</h1>
			<nav class="my-[4rem] max-w-[--max-width] m-auto">
				<ul>
					<div
						class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[1rem] gap-y-[4rem]">
						<li v-for="project in projects">
							<div
								class="bg-[#000] aspect-square flex items-end rounded-[--border-radius]">
								<NuxtLink
									:to="project.link"
									class="flex items-center justify-between cursor-pointer w-full p-[1.5rem]">
									<div class="text-white font-bold">
										{{ project.title }}
									</div>
									<div>
										<SvgsNavigationDoubleArrowWhite
											class="w-[20px] h-auto" />
									</div>
								</NuxtLink>
							</div>
							<br />
							<div class="pr-[1.5rem]">
								<NuxtLink
									v-for="subpage in project.subpages"
									:to="subpage.link"
									class="flex items-center justify-between cursor-pointer mt-[.5rem]">
									<div>{{ subpage.title }}</div>
									<div>
										<SvgsNavigationDoubleArrow
											class="w-[20px] h-auto" />
									</div>
								</NuxtLink>
							</div>
						</li>
					</div>
				</ul>
				<div
					class="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-3 gap-x-[1rem] gap-y-[4rem] mt-[5rem]">
					<h2 class="text-big font-bold text-orange">
						Willst du mehr über Kamerun erfahren?
					</h2>
					<div class="hidden md:block"></div>
					<div>
						<div
							class="bg-[#000] aspect-square flex items-end rounded-[--border-radius]">
							<NuxtLink
								to="/projekte/kamerun"
								class="flex items-center justify-between cursor-pointer w-full p-[1.5rem]">
								<div class="text-white font-bold">Kamerun</div>
								<div>
									<SvgsNavigationDoubleArrowWhite
										class="w-[20px] h-auto" />
								</div>
							</NuxtLink>
						</div>
						<br />
						<div class="pr-[1.5rem]">
							<NuxtLink
								to="/projekte/kamerun"
								class="flex items-center justify-between cursor-pointer">
								<div>Übersicht</div>
								<div>
									<SvgsNavigationDoubleArrow
										class="w-[20px] h-auto" />
								</div>
							</NuxtLink>
							<NuxtLink
								to="/projekte/kamerun/infrastruktur"
								class="flex items-center justify-between cursor-pointer mt-[1rem]">
								<div>Infrastruktur</div>
								<div>
									<SvgsNavigationDoubleArrow
										class="w-[20px] h-auto" />
								</div>
							</NuxtLink>
						</div>
					</div>
				</div>
			</nav>
		</section>
		<LazyMilestones />
		<LazyNewsletter />
	</article>
</template>
