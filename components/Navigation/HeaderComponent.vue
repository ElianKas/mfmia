<script setup>
	const activeDesktop = ref(false);
	const activeMobile = ref(false);
	const currentFolder = ref(null);

	const routes = [
		{
			name: 'Projekte',
			pages: [
				{
					name: 'Bildung',
					pages: [
						'Übersicht',
						'Herausforderungen',
						'Schulsystem',
						'Patenschaften',
						'Schulpartnerschaften',
						'Schulenbau',
					],
				},
				{
					name: 'Brunnenbau',
					pages: ['Übersicht', 'Motivation', 'Vorgehen', 'Standorte'],
				},
				{
					name: 'Hilfe zur Selbsthilfe',
					pages: [
						'Übersicht',
						'Solar Light',
						'Plastik Recycling',
						'Plantagen',
					],
				},
				{
					name: 'Hygiene & Gesundheit',
					pages: [
						'Übersicht',
						'Toilettenhäuser',
						'Vorgehen',
						'Standorte',
					],
				},
				{
					name: 'Kamerun',
					pages: ['Übersicht', 'Infrastruktur'],
				},
			],
		},
		{
			name: 'Storys',
			pages: [
				{
					name: 'Übersicht',
					pages: [],
				},
			],
		},
	];

	function toggleDesktop(page) {
		activeDesktop.value = !activeDesktop.value;

		if (page) {
			currentFolder.value = routes.find(
				(route) => route.name === page
			);
			console.log(currentFolder.value);
		}
	}

	function toggleMobile() {
		activeMobile.value = !activeMobile.value;
	}
</script>
<template>
	<div>
		<header class="z-[9]">
			<nav class="relative">
				<div class="h-[80px]">
					<div
						class="h-[70px] max-w-[--max-width-big] m-auto flex justify-between items-center px-[1rem] md:px-[3rem] transition-all duration-300">
						<NuxtLink to="/">
							<SvgsLogoSmall />
						</NuxtLink>
						<div
							class="max-xl:hidden w-[700px] font-bold bg-white absolute top-0 left-[50%] translate-x-[-50%] overflow-hidden"
							:style="{ height: activeDesktop ? '500px' : '70px' }">
							<div class="grid grid-cols-5 items-center h-[70px]">
								<div class="flex flex-col gap-[5rem]">
									<div
										@mouseover="toggleDesktop('Projekte')"
										@mouseleave="toggleDesktop()">
										Projekte
									</div>
								</div>
								<div class="flex flex-col gap-[5rem]">
									<div
										@mouseover="toggleDesktop('Storys')"
										@mouseleave="toggleDesktop()">
										Storys
									</div>
								</div>
								<div class="flex flex-col gap-[5rem]">
									<div
										@mouseover="toggleDesktop('Unser Verein')"
										@mouseleave="toggleDesktop()">
										Unser Verein
									</div>
								</div>
								<div class="flex flex-col gap-[5rem]">
									<div
										@mouseover="toggleDesktop('News')"
										@mouseleave="toggleDesktop()">
										News
									</div>
								</div>
								<div class="flex flex-col gap-[5rem]">
									<div
										@mouseover="toggleDesktop('Kontakt')"
										@mouseleave="toggleDesktop()">
										Kontakt
									</div>
								</div>
							</div>
							<div class="grid grid-cols-5 h-full">
								<div
									v-if="currentFolder"
									class="col-span-2">
									{{ currentFolder.name }}
								</div>
								<div v-if="currentFolder">
									{{ currentFolder.name }}
								</div>
								<div v-if="currentFolder">
									{{ currentFolder.name }}
								</div>
								<div v-if="currentFolder">
									{{ currentFolder.name }}
								</div>
							</div>
						</div>
						<div
							class="max-xl:hidden font-bold text-orange cursor-pointer">
							Jetzt spenden
						</div>
						<!-- burger icon -->
						<div
							class="xl:hidden w-[30px] h-[18px] flex flex-col justify-between cursor-pointer"
							@click="toggleMobile()">
							<div class="h-[2px] bg-orange rounded-full"></div>
							<div class="h-[2px] bg-orange rounded-full"></div>
							<div class="h-[2px] bg-orange rounded-full"></div>
						</div>
					</div>
					<div class="h-[10px] bg-[#000]"></div>
				</div>
				<!-- full menu mobile -->
				<div
					class="h-[100vh] fixed top-0 right-0 w-[85%] bg-white pl-[3rem] pr-[1rem] md:pr-[3rem] flex flex-col gap-[1rem]"
					:class="{ hidden: !activeMobile }">
					<div class="self-end h-[70px] shrink-0 flex items-center">
						<div
							class="w-[30px] aspect-square relative cursor-pointer"
							@click="toggleMobile">
							<div
								class="h-[2px] rounded-full w-full bg-[#000] rotate-45 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"></div>
							<div
								class="h-[2px] rounded-full w-full bg-[#000] -rotate-45 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"></div>
						</div>
					</div>
					<ul class="mobileNavList overflow-scroll pb-[5rem]">
						<div class="py-[1rem]">PROJEKTE</div>
						<div class="pl-[1rem]">
							<li class="py-[1rem]">Übersicht</li>
							<!-- akkordeon item -->
							<div class="collapse collapse-arrow">
								<input
									type="radio"
									name="my-accordion-2" />
								<li class="collapse-title px-0">Bildung</li>
								<!--  content -->
								<div class="collapse-content pl-[1rem]">
									<li>Übersicht</li>
									<li class="mt-[1rem]">Herausforderungen</li>
									<li class="mt-[1rem]">Schulsystem</li>
									<li class="mt-[1rem]">Patenschaften</li>
									<li class="mt-[1rem]">Schulpartnerschaften</li>
									<li class="mt-[1rem]">Schulenbau</li>
								</div>
							</div>
							<!-- akkordeon item -->
							<div class="collapse collapse-arrow">
								<input
									type="radio"
									name="my-accordion-2" />
								<li class="collapse-title px-0">Brunnenbau</li>
								<!--  content -->
								<div class="collapse-content pl-[1rem]">
									<li>Übersicht</li>
									<li class="mt-[1rem]">Motivation</li>
									<li class="mt-[1rem]">Vorgehen</li>
									<li class="mt-[1rem]">Standorte</li>
								</div>
							</div>
							<!-- akkordeon item -->
							<div class="collapse collapse-arrow">
								<input
									type="radio"
									name="my-accordion-2" />
								<li class="collapse-title px-0">
									Hilfe zur Selbsthilfe
								</li>
								<!--  content -->
								<div class="collapse-content pl-[1rem]">
									<li>Übersicht</li>
									<li class="mt-[1rem]">Solar Light</li>
									<li class="mt-[1rem]">Plastik Recycling</li>
									<li class="mt-[1rem]">Plantagen</li>
								</div>
							</div>
							<!-- akkordeon item -->
							<div class="collapse collapse-arrow">
								<input
									type="radio"
									name="my-accordion-2" />
								<li class="collapse-title px-0">
									Hygiene & Gesundheit
								</li>
								<!--  content -->
								<div class="collapse-content pl-[1rem]">
									<li>Übersicht</li>
									<li class="mt-[1rem]">Toilettenhäuser</li>
									<li class="mt-[1rem]">Vorgehen</li>
									<li class="mt-[1rem]">Standorte</li>
								</div>
							</div>
							<!-- akkordeon item -->
							<div class="collapse collapse-arrow">
								<input
									type="radio"
									name="my-accordion-2" />
								<li class="collapse-title px-0">Kamerun</li>
								<!--  content -->
								<div class="collapse-content pl-[1rem]">
									<li>Übersicht</li>
									<li class="mt-[1rem]">Infrastruktur</li>
								</div>
							</div>
						</div>
						<div class="py-[1rem]">STORYS</div>
						<div class="py-[1rem]">UNSER VEREIN</div>
						<!-- akkordeon item -->
						<div class="collapse collapse-arrow">
							<input
								type="radio"
								name="my-accordion-2" />
							<li class="collapse-title px-0">NEWS</li>
							<!--  content -->
							<div class="collapse-content pl-[1rem]">
								<li>Übersicht</li>
								<li class="mt-[1rem]">Aktuelles</li>
								<li class="mt-[1rem]">Presse</li>
							</div>
						</div>
						<div class="py-[1rem]">KONTAKT</div>
						<div class="py-[1rem]">JETZT SPENDEN</div>
					</ul>
				</div>
			</nav>
		</header>
	</div>
</template>
<style scoped>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.mobileNavList::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.mobileNavList {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
