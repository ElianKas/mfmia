<script setup>
	const activeDesktop = ref(false);
	const activeMobile = ref(false);

	function active(isActive, page) {
		activeDesktop.value = isActive;
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
						class="h-[70px] max-w-[--max-width-big] flex justify-between items-center px-[1rem] md:px-[3rem]">
						<NuxtLink to="/">
							<SvgsLogo />
						</NuxtLink>
						<ul
							class="max-xl:hidden flex gap-[4rem] font-bold h-full">
							<li
								@mouseover="active(true)"
								@mouseleave="active(false)"
								class="group h-full grid place-items-center cursor-pointer">
								Projekte
							</li>
							<li
								class="h-full grid place-items-center cursor-pointer">
								Storys
							</li>
							<li
								class="h-full grid place-items-center cursor-pointer">
								Unser Verein
							</li>
							<li
								class="h-full grid place-items-center cursor-pointer">
								News
							</li>
							<li
								class="h-full grid place-items-center cursor-pointer">
								Kontakt
							</li>
						</ul>
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
				<!-- full menu desktop -->
				<div
					class="h-[350px] absolute top-[70px] w-full bg-white"
					:class="{ hidden: !activeDesktop }"
					@mouseover="active(true)"
					@mouseleave="active(false)">
					<div class="m-auto max-w-[700px] grid grid-cols-5">
						<div>1</div>
						<div>1</div>
						<div>1</div>
						<div>1</div>
						<div>1</div>
					</div>
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
					<ul class="mobileNavList overflow-scroll">
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
						<br />
						<br />
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
