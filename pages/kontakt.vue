<script setup>
	const title = ref('');
	const prename = ref('');
	const name = ref('');
	const street = ref('');
	const city = ref('');
	const phone = ref('');
	const email = ref('');
	const message = ref('');

	const contact = async () => {
		try {
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
				},
			});

			if (response && response.success) {
				alert(
					'Erfolgreich abonniert! Eine Bestätigungsmail wurde versendet.'
				);
			} else {
				const errorMessage =
					response && response.error
						? response.error.message
						: 'Unknown error';
				alert(`Anmeldung fehlgeschlagen: ${errorMessage}`);
			}
		} catch (err) {
			alert(`Ein Fehler ist aufgetreten: ${err.message}`);
		}
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
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b">
					Vorname<span class="text-orange">*</span>
					<input
						required
						v-model="prename"
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b">
					Name<span class="text-orange">*</span>
					<input
						required
						v-model="name"
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b">
					Straße / Nr.
					<input
						v-model="street"
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b">
					PLZ / Ort
					<input
						v-model="city"
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b">
					Telefon / Mobil
					<input
						v-model="phone"
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b">
					E-Mail<span class="text-orange">*</span>
					<input
						required
						v-model="email"
						type="text"
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
				<label
					class="label cursor-pointer flex items-start gap-[1rem]">
					<input
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
						gelesen und bin damit einverstanden, dass mit dem Absenden
						des Formulars meine Daten zur Bearbeitung meines Anliegens
						verwendet werden. <br /><br />Die mit * gekennzeichneten
						Felder sind Pflichtfelder.</span
					>
				</label>
			</div>
			<button class="btn bg-green text-[#fff]">
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
