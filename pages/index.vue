<template>
	<div>
		<Landing />
		<nav
			class="grid grid-cols-1 md:grid-cols-2 gap-[1rem] max-w-[--max-width] m-auto px-[1rem]">
			<NuxtLink
				to="/projekte/brunnenbau"
				class="border aspect-[2/1] rounded-[--border-radius] flex items-end">
				<div
					class="flex items-center justify-between cursor-pointer w-full p-[1.5rem]">
					<div class="font-bold text-big">Brunnenbau</div>
					<div>
						<SvgsNavigationDoubleArrow class="w-[20px] h-auto" />
					</div>
				</div>
			</NuxtLink>
			<NuxtLink
				to="/projekte/brunnenbau"
				class="border aspect-[2/1] rounded-[--border-radius] flex items-end">
				<div
					class="flex items-center justify-between cursor-pointer w-full p-[1.5rem]">
					<div class="font-bold text-big">Brunnenbau</div>
					<div>
						<SvgsNavigationDoubleArrow class="w-[20px] h-auto" />
					</div>
				</div>
			</NuxtLink>
			<NuxtLink
				to="/projekte/brunnenbau"
				class="border aspect-[2/1] rounded-[--border-radius] flex items-end">
				<div
					class="flex items-center justify-between cursor-pointer w-full p-[1.5rem]">
					<div class="font-bold text-big">Brunnenbau</div>
					<div>
						<SvgsNavigationDoubleArrow class="w-[20px] h-auto" />
					</div>
				</div>
			</NuxtLink>
			<NuxtLink
				to="/projekte/brunnenbau"
				class="border aspect-[2/1] rounded-[--border-radius] flex items-end">
				<div
					class="flex items-center justify-between cursor-pointer w-full p-[1.5rem]">
					<div class="font-bold text-big">Brunnenbau</div>
					<div>
						<SvgsNavigationDoubleArrow class="w-[20px] h-auto" />
					</div>
				</div>
			</NuxtLink>
		</nav>
		<LazyFewArticles />
		<LazyDonate class="mb-[5rem]" />
		<LazyMilestones />
		<LazyProjectCarousel />
		<LazyNewsletter class="my-[5rem]" />
	</div>
</template>
