<script setup>
	const projects = [
		{
			title: 'Brunnenbau',
			link: '/projekte/brunnenbau',
			subpages: [
				{
					title: 'übersicht',
					link: '/projekte/brunnenbau',
				},
			],
		},
		{
			title: 'Brunnenbau',
			link: '/projekte/brunnenbau',
			subpages: [
				{
					title: 'übersicht',
					link: '/projekte/brunnenbau',
				},
			],
		},
		{
			title: 'Brunnenbau',
			link: '/projekte/brunnenbau',
			subpages: [
				{
					title: 'übersicht',
					link: '/projekte/brunnenbau',
				},
			],
		},
		{
			title: 'Brunnenbau',
			link: '/projekte/brunnenbau',
			subpages: [
				{
					title: 'übersicht',
					link: '/projekte/brunnenbau',
				},
			],
		},
	];
</script>
<template>
	<article>
		<section class="px-[1rem]">
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
									class="flex items-center justify-between cursor-pointer">
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
								to="project.link"
								class="flex items-center justify-between cursor-pointer w-full p-[1.5rem]">
								<div class="text-white font-bold">kamerun</div>
								<div>
									<SvgsNavigationDoubleArrowWhite
										class="w-[20px] h-auto" />
								</div>
							</NuxtLink>
						</div>
						<br />
						<div class="pr-[1.5rem]">
							<NuxtLink
								to="subpage.link"
								class="flex items-center justify-between cursor-pointer">
								<div>kamerun</div>
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
		<Newsletter />
	</article>
</template>
