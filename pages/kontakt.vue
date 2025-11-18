<script setup>
	useSeoMeta({
		title: 'Kontaktieren Sie uns',
		description:
			'Adresse, Telefonnummer und E-Mail von ‘Miteinander - für Menschen in Afrika e.V.’. Wir freuen uns auf Ihre Nachricht.',
	});
	const title = ref('');
	const prename = ref('');
	const name = ref('');
	const street = ref('');
	const city = ref('');
	const phone = ref('');
	const email = ref('');
	const message = ref('');
	const checkbox = ref(false);
	const pending = ref(false);

	const contact = () => {
		grecaptcha.ready(function () {
			grecaptcha
				.execute('6LfMDgcsAAAAAAVVwmsCzIDA7wzLnWUlTiWqZSiC', { action: 'submit' })
				.then(async function (token) {
					pending.value = true;
					const response = await $fetch('/api/contact', {
						method: 'POST',
						body: {
							title: title.value,
							prename: prename.value,
							name: name.value,
							street: street.value,
							city: city.value,
							phone: phone.value,
							email: email.value,
							message: message.value,
							recaptchaToken: token,
						},
					});

					if (response && response.success) {
						alert('Vielen Dank für die Anfrage! Eine Bestätigungsmail wird versendet.');
						title.value = '';
						prename.value = '';
						name.value = '';
						street.value = '';
						city.value = '';
						phone.value = '';
						email.value = '';
						message.value = '';
						checkbox.value = false;
						pending.value = false;
					} else {
						const errorMessage = response && response.error ? response.error : 'Unknown error';
						alert(`Senden fehlgeschlagen: ${errorMessage}`);
						pending.value = false;
					}
				});
		});
	};
</script>
<template>
	<section
		class="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-[4rem] sm:gap-[8rem] px-[1rem] my-[6rem] lg:px-[3rem] max-w-[--max-width] m-auto min-h-[calc(100vh-80px)]">
		<form
			@submit.prevent="contact"
			class="max-w-[500px] flex flex-col gap-[1rem] lg:w-[50%]">
			<h1 class="text-orange font-bold text-big">Kontakt</h1>
			<div>
				<select
					v-model="title"
					class="select select-ghost px-[.5rem] w-full text-[16px]">
					<option
						value=""
						disabled
						selected>
						Anrede
					</option>
					<option value="Divers">Divers</option>
					<option value="Herr">Herr</option>
					<option value="Frau">Frau</option>
				</select>
				<div class="h-[1px] border border-green"></div>
				<label class="input px-[.5rem] flex items-center gap-2 border-b">
					Vorname<span class="text-orange">*</span>
					<input
						required
						v-model="prename"
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label class="input px-[.5rem] flex items-center gap-2 border-b">
					Name<span class="text-orange">*</span>
					<input
						required
						v-model="name"
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label class="input px-[.5rem] flex items-center gap-2 border-b">
					Straße / Nr.
					<input
						v-model="street"
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label class="input px-[.5rem] flex items-center gap-2 border-b">
					PLZ / Ort
					<input
						v-model="city"
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label class="input px-[.5rem] flex items-center gap-2 border-b">
					Telefon / Mobil
					<input
						v-model="phone"
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label class="input px-[.5rem] flex items-center gap-2 border-b">
					E-Mail<span class="text-orange">*</span>
					<input
						required
						v-model="email"
						type="email"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<br />
				<textarea
					required
					v-model="message"
					class="textarea textarea-bordered border-green w-full"
					placeholder="Ihre Mitteilung"></textarea>
			</div>
			<div class="form-control">
				<label class="label cursor-pointer flex items-start gap-[1rem]">
					<input
						v-model="checkbox"
						required
						type="checkbox"
						class="checkbox" />
					<span class="label-text"
						>Ja, ich habe die Hinweise zum
						<NuxtLink
							class="text-orange"
							to="/datenschutz"
							target="_blank"
							>Datenschutz</NuxtLink
						>
						gelesen und bin damit einverstanden, dass mit dem Absenden des Formulars meine Daten zur
						Bearbeitung meines Anliegens verwendet werden. Die Webseite ist außerdem durch reCAPTCHA
						geschützt und es gelten die
						<NuxtLink
							to="https://policies.google.com/privacy"
							target="_blank"
							class="text-orange"
							>Datenschutzerklärung</NuxtLink
						>
						und
						<NuxtLink
							to="https://policies.google.com/terms"
							target="_blank"
							class="text-orange"
							>Nutzungsbedingungen</NuxtLink
						>
						von Google.
						<br /><br />
						Die mit * gekennzeichneten Felder sind Pflichtfelder.</span
					>
				</label>
			</div>
			<button
				class="btn bg-green text-[#fff] hover:bg-green"
				:class="{
					'btn-disabled':
						pending || !checkbox || email === '' || name === '' || prename === '' || message === '',
				}">
				Nachricht senden
			</button>
		</form>
		<aside class="flex flex-col gap-[1rem] lg:w-[50%]">
			<SvgsLogoNormal class="max-w-[400px] w-full" />
			<div class="h-[35px] w-full max-w-[400px]">
				<StoryblokImage
					class="w-full h-full object-cover rounded-none"
					src="https://a.storyblok.com/f/311834/1927x1067/bb90be64ba/rechteck-139.png" />
			</div>
			<div>
				<p>Miteinander - für Menschen in Afrika e. V.</p>
				<p>Kölnische Straße 55</p>
				<p>D-34117 Kassel</p>
				<br />
				<p>Telefon: +49 561-15470</p>
				<p>Telefax: +49 561-779477</p>
				<p>E-Mail: info[at]miteinander-fuer-afrika.de</p>
			</div>
		</aside>
	</section>
</template>
