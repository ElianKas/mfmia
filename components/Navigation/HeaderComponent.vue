<script setup>
	const activeDesktop = ref(false);
	const activeMobile = ref(false);
	const currentFolder = ref(null);
	const subpageIndex = ref(null);

	function toggleDesktop(page) {
		activeDesktop.value = true;

		if (page === 'Projekte') {
			currentFolder.value = {
				name: 'Projekte',
				items: [
					{
						name: 'Bildung',
						items: [
							{ name: 'Übersicht', link: '/projekte/bildung' },
							{
								name: 'Herausforderungen',
								link: '/projekte/bildung/herausforderungen',
							},
							{
								name: 'Schulsystem',
								link: '/projekte/bildung/schulsystem',
							},
							{
								name: 'Patenschaften',
								link: '/projekte/bildung/patenschaften',
							},
							{
								name: 'Schulpartnerschaften',
								link: '/projekte/bildung/schulpartnerschaften',
							},
							{
								name: 'Schulenbau',
								link: '/projekte/bildung/schulenbau',
							},
						],
					},
					{
						name: 'Brunnenbau',
						items: [
							{ name: 'Übersicht', link: '/projekte/brunnenbau' },
							{
								name: 'Motivation',
								link: '/projekte/brunnenbau/motivation',
							},
							{
								name: 'Vorgehen',
								link: '/projekte/brunnenbau/vorgehen',
							},
							{
								name: 'Standorte',
								link: '/projekte/brunnenbau/standorte',
							},
						],
					},
					{
						name: 'Hilfe zur Selbsthilfe',
						items: [
							{
								name: 'Übersicht',
								link: '/projekte/hilfe-zur-selbsthilfe',
							},
							{
								name: 'Solar Light',
								link: '/projekte/hilfe-zur-selbsthilfe/solar-light',
							},
							{
								name: 'Plastik Recycling',
								link: '/projekte/hilfe-zur-selbsthilfe/plastik-recycling',
							},
							{
								name: 'Plantagen',
								link: '/projekte/hilfe-zur-selbsthilfe/plantagen',
							},
						],
					},
					{
						name: 'Hygiene & Gesundheit',
						items: [
							{
								name: 'Übersicht',
								link: '/projekte/hygiene-gesundheit',
							},
							{
								name: 'Toilettenhäuser',
								link: '/projekte/hygiene-gesundheit/toilettenhaeuser',
							},
							{
								name: 'Vorgehen',
								link: '/projekte/hygiene-gesundheit/vorgehen',
							},
							{
								name: 'Standorte',
								link: '/projekte/hygiene-gesundheit/standorte',
							},
						],
					},
					{
						name: 'Kamerun',
						items: [
							{ name: 'Übersicht', link: '/projekte/kamerun' },
							{
								name: 'Infrastruktur',
								link: '/projekte/kamerun/infrastruktur',
							},
						],
					},
				],
			};
		}
		if (page === 'Storys') {
			currentFolder.value = {
				name: 'Storys',
				items: [{ name: 'Übersicht', link: '/storys' }],
			};
		}
		if (page === 'Unser Verein') {
			currentFolder.value = {
				name: 'Unser Verein',
				items: [
					{ name: 'Der Verein', link: '/verein' },
					{ name: 'Die Geschichte', link: '/verein/geschichte' },
					{ name: 'Aktiv werden', link: '/verein/aktiv-werden' },
					{ name: 'Das Team', link: '/verein/team' },
				],
			};
		}
		if (page === 'News') {
			currentFolder.value = {
				name: 'News',
				items: [
					{ name: 'Übersicht', link: '/news' },
					{ name: 'Aktuelles', link: '/news/aktuelles' },
					{ name: 'Presse', link: '/news/presse' },
				],
			};
		}
		if (page === 'Kontakt') {
			currentFolder.value = {
				name: 'Kontakt',
				items: [{ name: 'Kontakt anfragen', link: '/kontakt' }],
			};
		}
	}

	function getIndex(index) {
		subpageIndex.value = index;
	}

	function toggleMobile() {
		activeMobile.value = !activeMobile.value;
	}
</script>
<template>
	<div>
		<header class="z-[9999] relative">
			<nav class="relative">
				<div class="h-[80px]">
					<!-- full menu desktop -->
					<div
						:style="{ height: activeDesktop ? '350px' : '70px' }"
						:class="{ 'items-center': !activeDesktop }"
						class="transition-all duration-300 bg-white">
						<div
							class="h-[70px] max-w-[--max-width-big] items-center m-auto flex justify-between px-[1rem] md:px-[3rem]">
							<NuxtLink
								to="/"
								class="w-[200px] h-full">
								<SvgsLogoSmall class="w-full h-full" />
							</NuxtLink>
							<div
								class="flex items-center h-[70px] max-xl:hidden text-[#000]">
								<div
									class="w-[150px] grid items-center"
									@mouseover="toggleDesktop('Projekte')">
									Projekte
								</div>
								<div
									class="w-[150px] grid items-center"
									@mouseover="toggleDesktop('Storys')">
									Storys
								</div>
								<div
									class="w-[200px] grid items-center"
									@mouseover="toggleDesktop('Unser Verein')">
									Unser Verein
								</div>
								<div
									class="w-[125px] grid items-center"
									@mouseover="toggleDesktop('News')">
									News
								</div>
								<div
									class="w-[125px] grid items-center"
									@mouseover="toggleDesktop('Kontakt')">
									Kontakt
								</div>
							</div>
							<div
								class="max-xl:hidden font-bold text-orange cursor-pointer w-[200px] text-right">
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
						<!-- collapse content -->
						<div
							v-if="activeDesktop"
							class="h-full"
							@mouseleave="
								() => {
									//reset all states when mouse leaves
									activeDesktop = false;
									subpageIndex = null;
								}
							">
							<div class="flex m-auto w-[750px] mt-[2rem]">
								<div class="w-[250px]">
									<div
										v-if="currentFolder && currentFolder.name"
										class="text-highlight text-[#000]">
										<NuxtLink :to="currentFolder.link">
											{{ currentFolder.name }}
										</NuxtLink>
									</div>
								</div>
								<ul class="w-[250px] flex flex-col gap-[.5rem]">
									<li
										class="text-[#666666] border-orange pl-[1rem] hover:border-l hover:text-[#000] cursor-pointer"
										v-if="currentFolder && currentFolder.items"
										v-for="(page, index) in currentFolder.items"
										@click="getIndex(index)"
										:style="{
											color: subpageIndex === index ? '#000' : '',
										}"
										:class="{
											'border-l': subpageIndex === index,
										}">
										<NuxtLink :to="page.link">{{
											page.name
										}}</NuxtLink>
									</li>
								</ul>
								<ul class="w-[250px] flex flex-col gap-[.5rem]">
									<li
										class="text-[#666666] hover:text-[#000] hover:border-l border-orange pl-[1rem]"
										v-if="
											subpageIndex !== null &&
											currentFolder &&
											currentFolder.items
										"
										v-for="subpage in currentFolder.items[
											subpageIndex
										].items">
										<NuxtLink :to="subpage.link">
											{{ subpage.name }}
										</NuxtLink>
									</li>
								</ul>
							</div>
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
							<li class="py-[1rem]">
								<NuxtLink
									to="/projekte"
									@click="toggleMobile"
									>Übersicht</NuxtLink
								>
							</li>
							<!-- akkordeon item -->
							<div class="collapse collapse-arrow">
								<input
									type="radio"
									name="my-accordion-2" />
								<li class="collapse-title px-0">Bildung</li>
								<!--  content -->
								<div class="collapse-content pl-[1rem]">
									<li>
										<NuxtLink
											to="/projekte/bildung"
											@click="toggleMobile">
											Übersicht
										</NuxtLink>
									</li>
									<li class="mt-[1rem]">
										<NuxtLink
											to="/projekte/bildung/herausforderungen"
											@click="toggleMobile">
											Herausforderungen
										</NuxtLink>
									</li>
									<li class="mt-[1rem]">
										<NuxtLink
											to="/projekte/bildung/schulsystem"
											@click="toggleMobile">
											Schulsystem
										</NuxtLink>
									</li>
									<li class="mt-[1rem]">
										<NuxtLink
											to="/projekte/bildung/patenschaften"
											@click="toggleMobile">
											Patenschaften
										</NuxtLink>
									</li>
									<li class="mt-[1rem]">
										<NuxtLink
											to="/projekte/bildung/schulpartnerschaften"
											@click="toggleMobile">
											Schulpartnerschaften
										</NuxtLink>
									</li>
									<li class="mt-[1rem]">
										<NuxtLink
											to="/projekte/bildung/schulenbau"
											@click="toggleMobile">
											Schulenbau
										</NuxtLink>
									</li>
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
									<li>
										<NuxtLink
											to="/projekte/brunnenbau"
											@click="toggleMobile"
											>Übersicht</NuxtLink
										>
									</li>
									<li class="mt-[1rem]">
										<NuxtLink
											to="/projekte/brunnenbau/motivation"
											@click="toggleMobile">
											Motivation
										</NuxtLink>
									</li>
									<li class="mt-[1rem]">
										<NuxtLink
											to="/projekte/brunnenbau/vorgehen"
											@click="toggleMobile">
											Vorgehen
										</NuxtLink>
									</li>
									<li class="mt-[1rem]">
										<NuxtLink
											to="/projekte/brunnenbau/standorte"
											@click="toggleMobile">
											Standorte
										</NuxtLink>
									</li>
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
									<li>
										<NuxtLink
											to="/projekte/hilfe-zur-selbsthilfe"
											@click="toggleMobile">
											Übersicht
										</NuxtLink>
									</li>
									<li class="mt-[1rem]">
										<NuxtLink
											to="/projekte/hilfe-zur-selbsthilfe/solar-light"
											@click="toggleMobile">
											Solar Light
										</NuxtLink>
									</li>
									<li class="mt-[1rem]">
										<NuxtLink
											to="/projekte/hilfe-zur-selbsthilfe/plastik-recycling"
											@click="toggleMobile">
											Plastik Recycling
										</NuxtLink>
									</li>
									<li class="mt-[1rem]">
										<NuxtLink
											to="/projekte/hilfe-zur-selbsthilfe/plantagen"
											@click="toggleMobile">
											Plantagen
										</NuxtLink>
									</li>
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
									<li>
										<NuxtLink
											to="/projekte/hygiene-gesundheit"
											@click="toggleMobile">
											Übersicht
										</NuxtLink>
									</li>
									<li class="mt-[1rem]">
										<NuxtLink
											to="/projekte/hygiene-gesundheit/toilettenhaeuser"
											@click="toggleMobile">
											Toilettenhäuser
										</NuxtLink>
									</li>
									<li class="mt-[1rem]">
										<NuxtLink
											to="/projekte/hygiene-gesundheit/vorgehen"
											@click="toggleMobile">
											Vorgehen
										</NuxtLink>
									</li>
									<li class="mt-[1rem]">
										<NuxtLink
											to="/projekte/hygiene-gesundheit/standorte"
											@click="toggleMobile">
											Standorte
										</NuxtLink>
									</li>
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
									<li>
										<NuxtLink
											to="/projekte/kamerun"
											@click="toggleMobile">
											Übersicht
										</NuxtLink>
									</li>
									<li class="mt-[1rem]">
										<NuxtLink
											to="/projekte/kamerun/infrastruktur"
											@click="toggleMobile">
											Infrastruktur
										</NuxtLink>
									</li>
								</div>
							</div>
						</div>
						<div class="py-[1rem]">
							<NuxtLink
								to="/storys"
								@click="toggleMobile"
								>STORYS</NuxtLink
							>
						</div>
						<!-- akkordeon item -->
						<div class="collapse collapse-arrow">
							<input
								type="radio"
								name="my-accordion-2" />
							<li class="collapse-title px-0">UNSER VEREIN</li>
							<!--  content -->
							<div class="collapse-content pl-[1rem]">
								<li>
									<NuxtLink
										to="/verein"
										@click="toggleMobile"
										>Übersicht</NuxtLink
									>
								</li>
								<li class="mt-[1rem]">
									<NuxtLink
										to="/verein/geschichte"
										@click="toggleMobile"
										>Die Geschichte</NuxtLink
									>
								</li>
								<li class="mt-[1rem]">
									<NuxtLink
										to="/verein/aktiv-werden"
										@click="toggleMobile"
										>Aktiv werden</NuxtLink
									>
								</li>
								<li class="mt-[1rem]">
									<NuxtLink
										to="/verein/team"
										@click="toggleMobile"
										>Das Team</NuxtLink
									>
								</li>
							</div>
						</div>
						<!-- akkordeon item -->
						<div class="collapse collapse-arrow">
							<input
								type="radio"
								name="my-accordion-2" />
							<li class="collapse-title px-0">NEWS</li>
							<!--  content -->
							<div class="collapse-content pl-[1rem]">
								<li>
									<NuxtLink
										to="/news"
										@click="toggleMobile"
										>Übersicht</NuxtLink
									>
								</li>
								<li class="mt-[1rem]">
									<NuxtLink
										to="/news/aktuelles"
										@click="toggleMobile"
										>Aktuelles</NuxtLink
									>
								</li>
								<li class="mt-[1rem]">
									<NuxtLink
										to="/news/presse"
										@click="toggleMobile"
										>Presse</NuxtLink
									>
								</li>
							</div>
						</div>
						<div class="py-[1rem]">
							<NuxtLink
								to="/kontakt"
								@click="toggleMobile"
								>KONTAKT</NuxtLink
							>
						</div>
						<div class="py-[1rem]">
							<NuxtLink
								to="/spenden"
								@click="toggleMobile"
								>JETZT SPENDEN</NuxtLink
							>
						</div>
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
