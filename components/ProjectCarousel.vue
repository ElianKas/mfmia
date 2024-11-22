<script setup>
	const currentValue = ref(0);
</script>
<template>
	<nav>
		<Carousel
			:items-to-show="3"
			v-model="currentValue"
			:wrap-around="true">
			<Slide
				class="md:px-[2rem]"
				v-for="(slide, index) in 5">
				<div
					class="bg-[#000] w-[500px] aspect-square flex items-end rounded-[--border-radius] cursor-pointer"
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
			<Slide class="md:px-[2rem]">
				<div class="w-[500px] aspect-square"></div>
			</Slide>
		</Carousel>
	</nav>
</template>
