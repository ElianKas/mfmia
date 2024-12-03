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
							Jetzt Spenden
						</button>
					</div>
				</div>
			</section>
			<section
				class="max-w-[--max-width] border-b border-green m-auto py-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] md:gap-[5rem]">
				<div>
					<StoryblokImage
						class="max-md:w-[200px] h-auto"
						src="https://a.storyblok.com/f/311834/183x188/49818c11a6/bildschirmfoto-2024-09-02-um-17-07-54.png" />
					<p>Barcode für Online-Banking per App</p>
				</div>
				<div>
					<p class="text-green font-bold">
						Vereins- und Spendenkonto
					</p>
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
				<div>
					<StoryblokImage
						class="max-md:w-[200px] h-auto"
						src="https://a.storyblok.com/f/311834/196x196/24a4aab583/gruppe-322.png" />
					<p class="md:text-center">Über PayPal spenden</p>
				</div>
				<div>
					<p class="text-green font-bold">Paypal</p>
					<p>miteinander-fuer-afrika[at]t-online.de</p>
				</div>
			</section>
			<br />
			<br />
			<section
				class="max-w-[--max-width] m-auto flex max-md:flex-col gap-[2rem] md:gap-[5rem] py-[2rem]">
				<div class="w-full">
					<p>Aktuell sammeln wir Spenden für folgende Projekte:</p>
					<ul>
						<li>• Brunnenbau</li>
						<li>• Schulbildung</li>
						<li>• Toilettenbau</li>
					</ul>
					<br />
					<p>
						Liegt Ihnen eines dieser Projekte besonders am Herzen,
						geben Sie bitte das Projekt in dem Verwendungszweck der
						Überweisung an.
						<br /><br />
						Gerne stellen wir eine Spendenbescheinigung aus. Geben Sie
						dazu bitte Ihre Anschrift im Verwendungszweck der
						Überweisung an.
						<br /><br />
						Teilen Sie uns bitte auch ihre E-Mail-Adresse mit, damit
						wir Ihnen die Spendenbescheinigung als PDF zusenden
						können. Nutzen Sie dazu gerne unser Kontaktformular.
						<br />
						Sie wollen wissen, was aus ihrer Spende geworden ist? Dann
						nutzen Sie doch einfach unseren Newsletter.
					</p>
				</div>
				<nav class="w-full text-orange">
					<p>Kontakt aufnehmen</p>
					<NuxtLink to="/kontakt">
						<SvgsNavigationLongArrowOrange /> </NuxtLink
					><br />
					<p>Zum Newsletter eintragen</p>
					<NuxtLink to="/kontakt">
						<SvgsNavigationLongArrowOrange /> </NuxtLink
					><br />
					<p>Zuwendungsbestätigung Kleinspenden</p>
					<NuxtLink to="/kontakt">
						<SvgsNavigationLongArrowOrange />
					</NuxtLink>
				</nav>
			</section>
		</article>
	</div>
</template>
