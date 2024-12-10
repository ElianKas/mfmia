<script setup>
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
		}).render('#paypal-donate-button-aktiv-werden');
	});
</script>
<template>
	<div>
		<article class="px-[1rem] md:px-[3rem] pt-[1rem]">
			<section>
				<div
					class="h-[500px] bg-[#000] grid place-items-center rounded-[--border-radius] relative">
					<h1 class="text-white text-big font-bold z-[9]">
						Aktiv werden
					</h1>
					<StoryblokImage
						class="object-cover h-full w-full absolute inset-0 opacity-50"
						src="https://a.storyblok.com/f/311834/6000x4000/6099498db7/andreas_ubergabe-treffen_img_5858.JPG" />
				</div>
			</section>
			<TemplatesParagraphsHighlighted>
				Wir laden Dich herzlich ein, Dich aktiv in unserem Verein zu
				engagieren und gemeinsam mit uns spannende Projekte
				voranzutreiben – Deine Ideen und Dein Einsatz machen den
				Unterschied!
			</TemplatesParagraphsHighlighted>
			<section class="py-[2rem] max-w-[800px] m-auto">
				<h2 class="text-orange border-b border-orange pb-[.5rem]">
					So kannst du aktiv werden
				</h2>
				<!-- item -->
				<div class="collapse collapse-arrow">
					<input
						type="checkbox"
						name="my-accordion-2" />
					<div class="collapse-title text-xl font-medium px-0">
						<b>Mitglied werden</b>
					</div>
					<div class="collapse-content">
						<p>
							Du willst aktiv werden?
							<br />
							Du möchtest dich engagieren für eine gerechtere Welt?
							<br />
							Du interessierst dich für die Verbesserung der
							Lebensbedingungen in den Dörfern Kameruns?
							<br /><br />
							Wir freuen uns, wenn unsere Projekte Anklang bei dir
							finden. Als Mitglied kannst bei unseren
							unterschiedlichsten Themen mitmachen, neue Ideen
							einbringen und den Verein dauerhaft unterstützen.
							<br /><br />
							Hier kannst du den Mitgliedsantrag ausfüllen:
							<br />
							<NuxtLink
								class="text-orange"
								target="_blank"
								to="https://a.storyblok.com/f/311834/x/2580f6dfec/miteinander_mitgliedsantrag_v202412hp.pdf"
								>Miteinander_Mitgliedsantrag_v202412hp.pdf</NuxtLink
							>
							<br /><br />
							Der aktuelle Jahresbeitrag einer Mitgliedschaft beträgt
							60 €.
						</p>
					</div>
				</div>
				<!-- item -->
				<div class="collapse collapse-arrow">
					<input
						type="checkbox"
						name="my-accordion-2" />
					<div class="collapse-title text-xl font-medium px-0">
						<b>Pate werden </b>
					</div>
					<div class="collapse-content">
						<p>
							Du möchtest, dass alle eine Chance auf Bildung haben?
							<br /><br />
							Wie wäre es dann mit einer Patenschaft?
							<br /><br />
							Wir können nur eine begrenzte Anzahl Patenkinder
							vermitteln, weil wir persönlich Kontakt halten wollen.
							Wende dich an uns, wir stellen dir gerne Kinder oder
							Jugendliche vor, für die wir Paten suchen, damit sie
							ihre Schul- oder Ausbildung beenden können.
							<br /><br />
							Wir kennen jedes Patenkind persönlich und durch einen
							regelmäßigen Austausch bleibst du als Pate oder Patin
							immer auf dem Laufenden.
						</p>
					</div>
				</div>
				<!-- item -->
				<div class="collapse collapse-arrow">
					<input
						type="checkbox"
						name="my-accordion-2" />
					<div class="collapse-title text-xl font-medium px-0">
						<b>Geld sammeln </b>
					</div>
					<div class="collapse-content">
						<p>
							Du möchtest unseren Verein durch eine eigene Spende
							unterstützen? <br />
							Dann bist du hier richtig.
							<br />
							<br />
							<span
								class="btn bg-orange text-white mt-[.5rem] relative overflow-hidden">
								Jetzt spenden
								<span
									id="paypal-donate-button-aktiv-werden"
									class="absolute w-full h-full inset-0"></span>
							</span>
							<br /><br />
							Wir freuen uns genauso über jeden, der Anderen von
							unserer Arbeit erzählt oder bei einer Familienfeier um
							Spenden bittet.
							<br />
							Auf Wunsch stellen wir auch Spendendosen zur Verfügung.
							Wende dich dazu bitte an unseren Kassenwart Thomas
							Langhein.
							<br /><br />
							<NuxtLink
								to="/verein/team"
								class="text-orange"
								>Zum Team</NuxtLink
							>
						</p>
					</div>
				</div>
				<!-- item -->
				<div class="collapse collapse-arrow">
					<input
						type="checkbox"
						name="my-accordion-2" />
					<div class="collapse-title text-xl font-medium px-0">
						<b>An Projekten mitarbeiten </b>
					</div>
					<div class="collapse-content">
						<p>
							Du möchtest dich aktiv engagieren?
							<br /><br />
							Dann kannst du gerne an den Projekten mitarbeiten und
							sie voranbringen.
							<br /><br />
							Du hast Lust mitzumachen?
							<br /><br />
							Nimm dann bitte mit unserem
							<NuxtLink to="/verein/team"><u>Team</u></NuxtLink>
							Kontakt auf oder
							<NuxtLink to="/kontakt"><u>schreib uns</u></NuxtLink
							>. Wir melden uns bei dir.
						</p>
					</div>
				</div>
			</section>
		</article>
		<LazyNewsletter />
	</div>
</template>
