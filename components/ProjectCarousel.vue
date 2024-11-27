<script setup>
	const currentValue = ref(0);
</script>
<template>
	<ClientOnly>
		<template #fallback>
			<div
				class="flex justify-evenly gap-[4rem] px-[1rem] md:px-[2rem]">
				<div class="skeleton w-full md:w-[500px] aspect-square"></div>
				<div
					class="skeleton w-[500px] aspect-square hidden md:block"></div>
				<div
					class="skeleton w-[500px] aspect-square hidden md:block"></div>
			</div>
		</template>
		<nav class="mt-[5rem]">
			<h2 class="font-bold text-big text-orange text-center">
				Lerne unsere Projekte kennen
			</h2>
			<br />
			<Carousel
				:items-to-show="1"
				:breakpoints="{
					768: { itemsToShow: 2 },
					1280: { itemsToShow: 3 },
				}"
				v-model="currentValue"
				:wrap-around="true">
				<Slide
					class="px-[1rem] md:px-[2rem]"
					v-for="(slide, index) in 5">
					<div
						class="bg-[#000] w-full md:w-[500px] aspect-square flex items-end rounded-[--border-radius] cursor-pointer"
						@click="
							() => {
								currentValue = index;
							}
						">
						<NuxtLink
							to="/projekte/brunnenbau"
							class="flex items-center justify-between cursor-pointer w-full p-[1.5rem]">
							<div class="text-white text-big font-bold">Andere</div>
							<div>
								<SvgsNavigationDoubleArrowWhite
									class="w-[20px] h-auto" />
							</div>
						</NuxtLink>
					</div>
				</Slide>
				<Slide class="md:px-[2rem] hidden md:block">
					<div class="w-[500px] aspect-square"></div>
				</Slide>
			</Carousel>
		</nav>
	</ClientOnly>
</template>
