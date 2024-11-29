<script setup>
	const email = ref('');
	const firstName = ref('');

	const subscribe = async () => {
		try {
			const response = await $fetch('/api/subscribe', {
				method: 'POST',
				body: { email: email.value, firstName: firstName.value },
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
			class="w-full border rounded-[--border-radius] border-orange h-[600px] max-w-[500px] p-[2rem] sm:p-[5rem] flex flex-col justify-center gap-[1rem]">
			<p class="font-bold">
				Zum <span class="text-orange">Newsletter</span> anmelden unds
				nichts mehr verpassen!
			</p>
			<div>
				<label
					class="input px-[.5rem] flex items-center gap-2 text-base">
					Vorname<span class="text-orange">*</span>
					<input
						v-model="firstName"
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
			</div>
			<div class="form-control">
				<label
					class="label cursor-pointer flex items-start gap-[1rem]">
					<input
						required
						type="checkbox"
						:checked="false"
						class="checkbox" />
					<span class="label-text text-sm"
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
