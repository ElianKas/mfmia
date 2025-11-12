<script setup>
	useSeoMeta({
		title: 'Newsletter',
		description: 'Abonnieren Sie unseren Newsletter und bleiben Sie informiert.',
	});
	const email = ref('');
	const name = ref('');
	const checkbox = ref(false);
	const pending = ref(false);

	const subscribe = () => {
		grecaptcha.ready(function () {
			grecaptcha
				.execute('6LfMDgcsAAAAAAVVwmsCzIDA7wzLnWUlTiWqZSiC', { action: 'submit' })
				.then(async function (token) {
					pending.value = true;
					const response = await $fetch('/api/subscribe', {
						method: 'POST',
						body: {
							email: email.value,
							name: name.value,
							recaptchaToken: token,
						},
					});

					if (response && response.success) {
						alert(
							'Vielen Dank für das Abbonieren unseres Newsletters. Eine Bestätigungsmail wird versendet.'
						);
						email.value = '';
						name.value = '';
						checkbox.value = false;
						pending.value = false;
					} else {
						const errorMessage = response && response.error ? response.error : 'Unknown error';
						alert(`Anmeldung fehlgeschlagen: ${errorMessage}`);
						pending.value = false;
					}
				});
		});
	};
</script>
<template>
	<div class="min-h-[100vh] grid place-items-center">
		<article
			id="newsletter"
			class="px-[1rem] lg:px-[3rem] flex flex-col items-center lg:flex-row gap-[1rem] lg:gap-[3rem] m-auto max-w-[1600px] py-[2rem]">
			<SvgsHumansGroup class="max-w-[450px] w-[90%] h-auto" />
			<form
				@submit.prevent="subscribe"
				class="w-full border rounded-[--border-radius] border-orange min-h-[650px] max-w-[500px] p-[2rem] sm:p-[4rem] flex flex-col justify-center gap-[1rem]">
				<h1 class="text-big text-orange font-bold">Newsletter bestellen</h1>
				<p>
					Abonniere unseren Newsletter, um aktuelle Informationen zu Aktionen, Veranstaltungen und
					Neuigkeiten auf unserer Homepage zu erhalten.
				</p>
				<div>
					<label class="input px-[.5rem] flex items-center gap-2 text-base">
						Name<span class="text-orange">*</span>
						<input
							v-model="name"
							type="text"
							required
							class="grow" />
					</label>
					<div class="h-[1px] border border-green"></div>
					<label class="input px-[.5rem] flex items-center gap-2 border-b text-base">
						Email<span class="text-orange">*</span>
						<input
							v-model="email"
							type="email"
							required
							class="grow" />
					</label>
					<div class="h-[1px] border border-green"></div>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer flex items-start gap-[1rem]">
						<input
							required
							v-model="checkbox"
							type="checkbox"
							class="checkbox" />
						<span class="label-text text-sm"
							>Ich bin damit einverstanden, dass mich der Betreiber und Herausgeber über ausgewählte
							Themen informieren darf. Meine Daten werden ausschließlich zu diesem Zweck genutzt.
							Insbesondere erfolgt keine Weitergabe an unberechtigte Dritte. Mir ist bekannt, dass
							ich meine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen kann. Es gilt
							die
							<NuxtLink
								to="/datenschutz"
								class="text-orange"
								>Datenschutzerklärung</NuxtLink
							>, die auch weitere Informationen über Möglichkeiten zur Berichtigung, Löschung und
							Sperrung meiner Daten beinhaltet.</span
						>
					</label>
				</div>
				<button
					type="submit"
					:class="{
						'btn-disabled': email === '' || name === '' || !checkbox || pending,
					}"
					class="btn bg-green hover:bg-green text-[#fff] font-bold text-base">
					Jetzt anmelden
				</button>
			</form>
			<SvgsHumansGroup class="max-w-[450px] w-full h-auto max-lg:hidden" />
		</article>
	</div>
</template>
