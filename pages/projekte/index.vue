<template>
	<article>
		<section class="px-[1rem]">
			<h1
				class="font-bold text-orange text-big text-center mt-[5rem]">
				Lerne unsere Projekte kennen
			</h1>
			<nav class="my-[5rem] max-w-[--max-width] m-auto">
				<ul>
					<div class="grid grid-cols-3 gap-[1rem]">
						<li>
							<div
								class="bg-[#000] aspect-square flex items-end rounded-[--border-radius]">
								<NuxtLink
									to="/projekte/brunnenbau"
									class="flex items-center justify-between cursor-pointer w-full p-[1.5rem]">
									<div class="text-white font-bold">Brunnenbau</div>
									<div>
										<SvgsNavigationDoubleArrowWhite
											class="w-[20px] h-auto" />
									</div>
								</NuxtLink>
							</div>
							<br />
							<div class="pr-[1rem]">
								<NuxtLink
									to="/projekte/brunnenbau"
									class="flex items-center justify-between cursor-pointer">
									<div>übersicht</div>
									<div>
										<SvgsNavigationDoubleArrow
											class="w-[20px] h-auto" />
									</div>
								</NuxtLink>
							</div>
						</li>
					</div>
				</ul>
			</nav>
		</section>
		<Newsletter />
	</article>
</template>
