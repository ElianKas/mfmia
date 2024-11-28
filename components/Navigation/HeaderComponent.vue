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
							{ name: 'Übersicht' },
							{ name: 'Herausforderungen' },
							{ name: 'Schulsystem' },
							{ name: 'Patenschaften' },
							{ name: 'Schulpartnerschaften' },
							{ name: 'Schulenbau' },
						],
					},
					{
						name: 'Brunnenbau',
						items: [
							{ name: 'Übersicht' },
							{ name: 'Motivation' },
							{ name: 'Vorgehen' },
							{ name: 'Standorte' },
						],
					},
					{
						name: 'Hilfe zur Selbsthilfe',
						items: [
							{ name: 'Übersicht' },
							{ name: 'Solar Light' },
							{ name: 'Plastik Recycling' },
							{ name: 'Plantagen' },
						],
					},
					{
						name: 'Hygiene & Gesundheit',
						items: [
							{ name: 'Übersicht' },
							{ name: 'Toilettenhäuser' },
							{ name: 'Vorgehen' },
							{ name: 'Standorte' },
						],
					},
					{
						name: 'Kamerun',
						items: [{ name: 'Übersicht' }, { name: 'Infrastruktur' }],
					},
				],
			};
		}
		if (page === 'Storys') {
			currentFolder.value = {
				name: 'Storys',
			};
		}
		if (page === 'Unser Verein') {
			currentFolder.value = {
				name: 'Unser Verein',
				items: [
					{ name: 'Der Verein' },
					{ name: 'Die Geschichte' },
					{ name: 'Aktiv werden' },
					{ name: 'Das Team' },
				],
			};
		}
		if (page === 'News') {
			currentFolder.value = {
				name: 'News',
				items: [
					{ name: 'Übersicht' },
					{ name: 'Aktuelles' },
					{ name: 'Presse' },
				],
			};
		}
		if (page === 'Kontakt') {
			currentFolder.value = {
				name: 'Kontakt',
			};
		}
	}

	function getIndex(index) {
		subpageIndex.value = index;
		console.log(subpageIndex.value);
		console.log(currentFolder.value.items[subpageIndex.value].items);
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
						:style="{ height: activeDesktop ? '500px' : '70px' }"
						:class="{ 'items-center': !activeDesktop }"
						class="transition-all duration-300 bg-white">
						<div
							class="h-[70px] max-w-[--max-width-big] items-center m-auto flex justify-between px-[1rem] md:px-[3rem]">
							<NuxtLink
								to="/"
								class="w-[200px]">
								<SvgsLogoSmall />
							</NuxtLink>
							<div class="flex items-center h-[70px]">
								<div
									class="w-[150px] h-full grid items-center"
									@mouseover="toggleDesktop('Projekte')">
									Projekte
								</div>
								<div
									class="w-[150px] grid items-center"
									@mouseover="toggleDesktop('Storys')">
									Storys
								</div>
								<div
									class="w-[150px] grid items-center"
									@mouseover="toggleDesktop('Unser Verein')">
									Unser Verein
								</div>
								<div
									class="w-[150px] grid items-center"
									@mouseover="toggleDesktop('News')">
									News
								</div>
								<div
									class="w-[150px] grid items-center"
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
									activeDesktop = false;
									subpageIndex = null;
								}
							">
							<div class="flex m-auto border items-center w-[750px]">
								<div class="w-[250px]">
									<div v-if="currentFolder && currentFolder.name">
										{{ currentFolder.name }}
									</div>
								</div>
								<div class="w-[250px]">
									<div
										v-if="currentFolder && currentFolder.items"
										v-for="(page, index) in currentFolder.items"
										@mouseover="getIndex(index)">
										{{ page.name }}
									</div>
								</div>
								<div class="w-[250px]">
									<div
										v-if="
											subpageIndex !== null &&
											currentFolder &&
											currentFolder.items
										"
										v-for="subpage in currentFolder.items[
											subpageIndex
										].items">
										{{ subpage.name }}
									</div>
								</div>
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
