<script setup>
	const email = ref('');
	const name = ref('');
	const isMember = ref(false);
	const isGodfather = ref(false);

	const subscribe = async () => {
		try {
			const response = await $fetch('/api/subscribe', {
				method: 'POST',
				body: {
					email: email.value,
					name: name.value,
					isMember: isMember.value,
					isGodfather: isGodfather.value,
				},
			});

			if (response && response.success) {
				alert('Subscription successful');
			} else {
				const errorMessage =
					response && response.error
						? response.error.message
						: 'Unknown error';
				alert(`Subscription failed: ${errorMessage}`);
			}
		} catch (err) {
			alert(`An error occurred: ${err.message}`);
		}
	};
</script>
<template>
	<aside
		class="px-[1rem] lg:px-[3rem] flex flex-col items-center lg:flex-row gap-[1rem] lg:gap-[3rem] m-auto max-w-[1600px] py-[2rem]">
		<SvgsHumansGroup class="max-w-[450px] w-[90%] h-auto" />
		<form
			@submit.prevent="subscribe"
			class="w-full border rounded-[--border-radius] border-orange min-h-[650px] max-w-[500px] p-[2rem] sm:p-[4rem] flex flex-col justify-center gap-[1rem]">
			<h2 class="text-big text-orange font-bold">
				Newsletter bestellen
			</h2>
			<p>
				Um aktuelle Informationen (Jahresbrief, zu Aktionen,
				Veranstaltungen und Neuigkeiten auf der Homepage) erhalten zu
				können, haben Sie die Möglichkeit, unseren Newsletter zu
				abonnieren.
			</p>
			<div>
				<label
					class="input px-[.5rem] flex items-center gap-2 text-base">
					Name<span class="text-orange">*</span>
					<input
						v-model="name"
						type="text"
						required
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b text-base">
					Email<span class="text-orange">*</span>
					<input
						v-model="email"
						type="email"
						required
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<div
					class="py-[1rem] flex items-center flex-wrap px-[.5rem] gap-[1rem]">
					<label>Ich bin</label>
					<div class="flex items-center gap-[.5rem]">
						<input
							v-model="isMember"
							type="checkbox"
							class="checkbox" />
						<span>Mitglied bzw.</span>
					</div>
					<div class="flex items-center gap-[.5rem]">
						<input
							v-model="isGodfather"
							type="checkbox"
							class="checkbox" />
						<span>Patin/Pate</span>
					</div>
				</div>
				<div class="h-[1px] border border-green"></div>
			</div>
			<div class="form-control">
				<label
					class="label cursor-pointer flex items-start gap-[1rem]">
					<input
						required
						type="checkbox"
						class="checkbox" />
					<span class="label-text text-sm"
						>Ich bin damit einverstanden, dass mich der Betreiber und
						Herausgeber über ausgewählte Themen informieren darf.
						Meine Daten werden ausschließlich zu diesem Zweck genutzt.
						Insbesondere erfolgt keine Weitergabe an unberechtigte
						Dritte. Mir ist bekannt, dass ich meine Einwilligung
						jederzeit mit Wirkung für die Zukunft widerrufen kann. Es
						gilt die
						<NuxtLink
							to="/datenschutz"
							class="text-orange"
							>Datenschutzerklärung</NuxtLink
						>, die auch weitere Informationen über Möglichkeiten zur
						Berichtigung, Löschung und Sperrung meiner Daten
						beinhaltet.</span
					>
				</label>
			</div>
			<button
				type="submit"
				class="btn bg-green text-[#fff] font-bold text-base">
				Jetzt anmelden
			</button>
		</form>
		<SvgsHumansGroup
			class="max-w-[450px] w-full h-auto max-lg:hidden" />
	</aside>
</template>
