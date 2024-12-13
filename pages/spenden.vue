<script setup>
	useSeoMeta({
		title: 'Jetzt spenden',
		description:
			'Unterstützen Sie unsere Arbeit in Kamerun mit Ihrer Spende. Jeder Beitrag zählt und hilft, Projekte zu realisieren, die den Menschen vor Ort zugutekommen.',
	});
	onMounted(() => {
		PayPal.Donation.Button({
			env: 'production',
			hosted_button_id: 'EMH3AUSA8E5F8',
			// business: 'YOUR_EMAIL_OR_PAYERID',
			image: {
				src: 'https://a.storyblok.com/f/311834/704x396/c8a722356d/empty.png',
				title: 'PayPal - The safer, easier way to pay online!',
				alt: 'Donate with PayPal button',
			},
			onComplete: function (params) {
				// Your onComplete handler
			},
		}).render('#paypal-donate-button-spenden');
	});
</script>
<template>
	<div>
		<article class="px-[1rem] md:px-[3rem]">
			<section
				class="min-h-[550px] flex flex-col gap-[2rem] items-center max-w-[--max-width-big] m-auto py-[2rem]">
				<div class="font-bold text-center">
					<h1 class="text-green">
						Unser Spendenkonto ist weiter unten zu finden
					</h1>
					<p class="text-orange text-big">Unsere Spendenaufrufe</p>
				</div>
				<div class="flex flex-wrap w-full justify-center">
					<iframe
						src="https://www.paypal.com/giving/campaigns?campaign_id=6P5W9HLYZCWDU"
						title="PayPal donate campaign card"
						frameborder="0"
						width="382"
						height="550"
						scrolling="no"></iframe>
					<!-- <iframe
						src="https://www.paypal.com/giving/campaigns?campaign_id=6P5W9HLYZCWDU"
						title="PayPal donate campaign card"
						frameborder="0"
						width="382"
						height="550"
						scrolling="no"></iframe>
					<iframe
						src="https://www.paypal.com/giving/campaigns?campaign_id=6P5W9HLYZCWDU"
						title="PayPal donate campaign card"
						frameborder="0"
						width="382"
						height="550"
						scrolling="no"></iframe> -->
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
						<div
							class="btn bg-orange text-white my-[.5rem] relative overflow-hidden">
							<p>Jetzt spenden</p>
							<div
								id="paypal-donate-button-spenden"
								class="absolute w-full h-full inset-0"></div>
						</div>
						<p>
							oder selbst überweisen auf das Spendenkonto oder über
							PayPal
						</p>
					</div>
				</div>
			</section>
			<section
				class="max-w-[--max-width] border-b border-t border-green m-auto py-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] md:gap-[5rem]">
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
					<p class="text-green font-bold">Paypal</p>
					<br />
					<p>miteinander-fuer-afrika[at]t-online.de</p>
				</div>
				<div>
					<StoryblokImage
						class="max-md:w-[200px] h-auto"
						src="https://a.storyblok.com/f/311834/183x188/49818c11a6/bildschirmfoto-2024-09-02-um-17-07-54.png" />
					<p>Barcode für Online-Banking per App</p>
				</div>
				<div>
					<StoryblokImage
						class="max-md:w-[200px] h-auto"
						src="https://a.storyblok.com/f/311834/196x196/24a4aab583/gruppe-322.png" />
					<p class="md:text-center">Über PayPal spenden</p>
				</div>
			</section>
			<section class="max-w-[--max-width] m-auto py-[2rem]">
				<div class="max-w-[600px]">
					<p>Aktuell sammeln wir Spenden für folgende Projekte:</p>
					<ul>
						<li>• Brunnenbau</li>
						<li>• Schulbildung</li>
						<li>• Toilettenbau</li>
						<li>• Perioden.Power</li>
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
						<br /><br />
						<NuxtLink
							class="text-orange"
							to="/kontakt">
							<p>Kontakt aufnehmen</p>
							<SvgsNavigationLongArrowOrange />
						</NuxtLink>
						<br />
						Sie wollen wissen, was aus ihrer Spende geworden ist? Dann
						nutzen Sie doch einfach unseren Newsletter.
						<br /><br />
						<NuxtLink
							class="text-orange"
							to="/#newsletter">
							<p>Zum Newsletter eintragen</p>
							<SvgsNavigationLongArrowOrange />
						</NuxtLink>
					</p>
				</div>
			</section>
			<section
				class="max-w-[--max-width] m-auto py-[2rem] border-t border-green">
				<h2 class="font-bold">
					Bestätigung der Gemeinnützigkeit durch das Finanzamt
				</h2>
				<br />
				<p class="max-w-[600px]">
					Wir sind wegen Förderung der Entwicklungszusammenarbeit nach
					dem Freistellungsbescheid bzw. nach der Anlage zum
					Körperschaftsteuerbescheid des Finanzamtes Kassel, St.-Nr.
					26 250 88301, vom 12.07.2023 für den letzten
					Veranlagungszeitraum für 2020 bis 2022 nach § 5 Abs. 1 Nr. 9
					des Körperschaftsteuergesetzes von der Körperschaftsteuer
					und nach § 3 Nr. 6 des Gewerbesteuergesetzes von der
					Gewerbesteuer befreit. <br /><br />
					Es wird bestätigt, dass sowohl Spenden als auch
					Mitgliedsbeiträge steuerbegünstigt sind.
					<br /><br />
					Es wird bestätigt, dass die Zuwendung nur zur Förderung der
					Entwicklungszusammenarbeit (§ 52 Abs. 2 Satz 1 Nr. 15 AO)
					verwendet wird.

					<br /><br />

					Für Spenden bis 300,00 Euro können Sie für Ihre
					Steuererklärung auch das folgende PDF in Verbindung mit dem
					(Online-)Kontoauszug nutzen.
					<br /><br />
					<NuxtLink
						class="text-orange"
						to="https://a.storyblok.com/f/311834/x/92821bac58/zuwendungsbestatigung-kleinspenden-2023-07.pdf"
						target="_blank">
						<p>Zuwendungsbestätigung Kleinspenden</p>
						<SvgsNavigationLongArrowOrange />
					</NuxtLink>
				</p>
			</section>
		</article>
	</div>
</template>
