<template>
	<div>
		<article class="px-[1rem] md:px-[3rem]">
			<section
				class="h-[400px] flex items-center max-w-[--max-width-big] m-auto">
				<div class="font-bold">
					<h1 class="text-green">Dringende Projekte</h1>
					<p class="text-orange text-big">Spendenziele</p>
				</div>
			</section>
			<section
				class="max-w-[--max-width-big] m-auto flex flex-col lg:flex-row lg:items-center gap-[2rem] lg:gap-[5rem] py-[2rem]">
				<div class="h-[500px] rounded-[--border-radius] lg:w-[60%]">
					<StoryblokImage
						class="w-full h-full object-cover"
						src="https://a.storyblok.com/f/311834/6000x4000/71125ddf8f/spendenseite_img_8188.jpg" />
				</div>
				<div>
					<div class="max-w-[400px] m-auto text-center">
						<p>
							Helfen Sie mit Ihrer Spende, Projekte zu realisieren,
							die den Menschen in Kamerun ein unabhängiges und
							selbstbestimmtes Leben ermöglichen.
						</p>
						<button class="btn bg-orange text-white mt-[.5rem]">
							Jetzt spenden
						</button>
					</div>
				</div>
			</section>
			<section
				class="max-w-[--max-width] m-auto py-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] md:gap-[5rem]">
				<div>
					<p>Barcode für Online-Banking per App</p>
				</div>
				<div>
					<p class="text-green">Vereins- und Spendenkonto</p>
					<br />
					<p>
						Miteinander – für Menschen in Afrika e.V.
						<br />
						Evangelische Bank eG
					</p>
					<br />
					IBAN: DE02 5206 0410 0000 8044 87
					<br />
					BIC: GENODEF1EK1
				</div>
				<div>Inhalt</div>
			</section>
		</article>
	</div>
</template>
