<template>
	<div>
		<article class="px-[1rem]">
			<div
				class="h-[200px] bg-[#000] w-full rounded-[--border-radius] grid place-items-center my-[1rem]">
				<h1 class="text-white text-big">News</h1>
			</div>
			<FewArticles />
			<div class="text-center pb-[2rem]">
				<NuxtLink to="/news/aktuelles">
					<u>Alle Artikel ansehen</u></NuxtLink
				>
			</div>
		</article>
		<LazyMilestones />
		<LazyNewsletter />
		<LazyFewPressreports />
	</div>
</template>
