<script setup>
	const members = [
		{
			image:
				'https://a.storyblok.com/f/311834/600x600/0da6b74f8e/andreas_1.jpg',
			name: 'Andreas Wirtz',
			title: 'Vorsitzender',
			email: 'lachmitz-wirtz@onlinehome.de',
			description:
				'Meine Aufgabe ist die Organisation der Projekte und die Koordination der Aktivitäten zwischen Kassel und Kamerun. Ich bin Ansprechpartner für alle Aktivitäten des Vereins.',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/600x600/488bff46c4/harald-fischer.jpg',
			name: 'Dechant Harald Fischer',
			title: 'Stellvertretender Vorsitzender',
			email: 'harald.fischer@st-familia-kassel.de',
			description:
				'Durch meine persönliche Bekanntschaft mit Pfarrer Sebastien ist mir die Unterstützung seiner Arbeit vor Ort ein wichtiges Anliegen. Solidarisches Teilen über Ländergrenzen hinweg ist mir eine Herzensangelegenheit.',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/600x600/30daaface7/karin-nobel1-588y4ewbx9r3fgd.jpg',
			name: 'Karin Nöbel',
			title: 'Schriftführerin',
			email: 'noeba@t-online.de',
			description: 'Ich dokumentiere alle Aktivitäten des Vereins.',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/600x600/883d6c9b60/thomas-langhein-quadrat-7a63v16g4cd5h76.jpg',
			name: 'Thomas Langhein',
			title: 'Kassenwart',
			email: 'MfMiA.Langhein@t-online.de',
			description:
				'Kümmere mich um alle finanziellen Belange sowie um Mitgliedschaftsfragen. Beantworte Fragen rund um Spenden- und Spendenbescheinigungen.',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/600x600/d3da603985/sibylle-quadrat-ysjwe51tt38wpsk.jpg',
			name: 'Sibylle Lachmitz',
			title: null,
			email: 'lachmitz-wirtz@onlinehome.de',
			description:
				'Veranstaltungsplanung, Pressearbeit, Spendenaktionen und Netzwerkarbeit sind mein Ding.',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/3024x3024/67f419cfa5/lukas-langhein_img_0049.png',
			name: 'Lukas Langhein',
			title: null,
			email: 'llanghein@t-online.de',
			description:
				'Ich pflege die Homepage des Vereins und halte sie aktuell.',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/600x600/90118bd670/jacqueline_-quadrat-2rhppnbqkke9j5y.jpg',
			name: 'Jacqueline Schwegmann',
			title: null,
			email: 'familie.schwegmann@web.de',
			description:
				'Koordiniere und plane gerne Veranstaltungen und Aktionen zur Öffentlichkeitsarbeit. Unterstütze den Kassenwart bei allen Themen.',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/1920x2880/6ce46016d8/thumbnail_img_6885.jpg',
			name: 'Martin Schwegmann',
			title: null,
			email: 'familie.schwegmann@web.de',
			description:
				'Bei Veranstaltungen und Aktionen zur Öffentlichkeitsarbeit bin ich immer mit dem Fotoapparat dabei.',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/600x600/88406adb48/katharina_600x600_20190608.jpg',
			name: 'Katharina Klonk',
			title: null,
			email: 'katharina.klonk@onlinehome.de',
			description:
				'Ich organisiere Patenschaften der Schülerinnen und Schüler in Kamerun und deren Paten in Deutschland.',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/600x600/f3c776eaf3/hannes_600x600_20190608.jpg',
			name: 'Hanns-Jörg Müller',
			title: null,
			email: 'hanns-joerg.mueller@web.de',
			description:
				'Engagiere mich für unsere bestehenden Brunnen sowie den Bau neuer Brunnen.',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/600x600/1f0ee9f824/georg-quadrat-wzp1jdyc2pqkb5z.jpg',
			name: 'Dr Georg Dieckhues',
			title: null,
			email: 'g.dieckhues@web.de',
			description:
				'Ich stehe mit unseren Partnern vor Ort in Kontakt und kümmere mich um die Abstimmung der Brunnenbauprojekte. Außerdem befasse ich mich mit den Möglichkeiten der Förderung unserer Projekte durch öffentliche Programme.',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/579x579/ec1f4f64d3/irmgard-toepper-w437wtayn77zgbv.jpg',
			name: 'Irmgard Toepper-Dieckhues',
			title: null,
			email: 'i.toepper@web.de',
			description:
				'Zur Unterstützung unserer Projekte engagiere und beteilige ich mich regelmäßig an unseren verschiedenen Benefizkonzerten in unserer Pfarrkirche.',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/600x600/902af8f4ce/susanne-fley-1x1-tg9mn2tbdxshk34.png',
			name: 'Susanne Fley',
			title: null,
			email: 'su-fley@web.de',
			description:
				'Ich unterstütze Katharina bei den Patenschaften, konzipiere gerne neue Projekte (Schulpartnerschaft, Frauen-Hygienefrage, etc.) und bin dazu in enger Abstimmung mit unseren Partnern vor Ort in Kamerun.',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/600x600/a3e02ce1b5/sebastien-mani.jpg',
			name: 'Sébastien Mani',
			title: 'Pfarrer in Kamerun',
			email: null,
			description:
				'Habe 4 Jahre in Deutschland gelebt. Ich bin Ansprechpartner in Kamerun und Gründer des Partnervereins „ENCAMER - Association ensemble pour le Cameroun“ in Kamerun. Neben mir gibt es noch zahlreiche weitere Kameruner, die mir bei der Durchführung vor Ort helfen.',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/600x600/409f64def0/onana-quadrat-gfzd8dwch8epqyq.jpg',
			name: 'Cloter Onana Mvondo',
			title: 'Brunnenbauer',
			email: null,
			description:
				'Bin Gründer und Leiter der Partnerorganisation „ANDES - Association Nationale pour le Developpement Economique et Sociale“ in Kamerun und lebe auch dort. Ich halte die bestehenden Brunnen in Stand. Vor allem aber baue ich gemeinsam mit Miteinander - für Menschen in Afrika e.V. und mit intensiver Einbindung der Menschen vor Ort neue Brunnen.',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/600x600/8cae2893c4/teambild_owonos_600x600.jpg',
			name: 'Owono Ateba und Friedegard Schneider-Owono',
			title: null,
			email: null,
			description:
				'Wir leben seit vielen, vielen Jahren in Yaoundé und in Kassel. Wir freuen uns über Besuche und unterstützen und beraten den Verein gerne als ortskundige Landsleute. In Kamerun vor Ort, aber auch in Kassel. Je nachdem wo wir gerade sind.',
		},
	];
</script>
<template>
	<div>
		<article class="px-[1rem] md:px-[3rem] pt-[1rem]">
			<section>
				<div
					class="h-[500px] bg-[#000] grid place-items-center rounded-[--border-radius] relative">
					<h1 class="text-white text-big font-bold z-[9]">
						Das Team
					</h1>
					<StoryblokImage
						class="object-cover h-full w-full absolute inset-0 opacity-50"
						src="https://a.storyblok.com/f/311834/3129x939/ea1180b0a0/themenbild_team.png" />
				</div>
			</section>
			<TemplatesParagraphsHighlighted>
				Unser Team besteht aus vielen Freiwilligen, die ehrenamtlich
				für den Verein engagieren. Wir kombinieren unsere
				individuellen Fähigkeiten, um den Menschen in Deutschland ein
				breites Bild über unsere Arbeit in Kamerun zu vermitteln. Und
				natürlich, um die Menschen in Kamerun bestmöglich zu
				unterstützen.
			</TemplatesParagraphsHighlighted>
			<section class="max-w-[--max-width] m-auto">
				<h2 class="text-big text-orange font-bold">
					Das Team - Steckbriefe
				</h2>
				<div
					class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] md:gap-[5rem] py-[2rem]">
					<div v-for="person in members">
						<StoryblokImage
							:src="person.image"
							class="w-full aspect-square object-cover" />
						<br />
						<p class="font-bold">{{ person.name }}</p>
						<p v-if="person.title">{{ person.title }}</p>
						<br />
						<p>{{ person.email }}</p>
						<br />
						<p>{{ person.description }}</p>
					</div>
				</div>
			</section>
		</article>
	</div>
</template>
