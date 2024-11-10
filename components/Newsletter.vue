<template>
	<aside
		class="px-[1rem] lg:px-[3rem] flex flex-col items-center lg:flex-row gap-[1rem] lg:gap-[3rem] m-auto max-w-[1600px]">
		<SvgsHumansGroup class="max-w-[500px] w-full h-auto" />
		<div
			class="w-full border rounded-[--border-radius] border-orange h-[600px] max-w-[500px] p-[2rem] sm:p-[5rem] flex flex-col justify-center gap-[1rem]">
			<p>Zum Newsletter Anmelden und nicht mehr verpassen!</p>
			<div>
				<label class="input px-[.5rem] flex items-center gap-2">
					Vorname<span class="text-orange">*</span>
					<input
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b">
					Email<span class="text-orange">*</span>
					<input
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
			</div>
			<div class="form-control">
				<label
					class="label cursor-pointer flex items-start gap-[1rem]">
					<input
						type="checkbox"
						:checked="false"
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
			<button class="btn bg-green text-[#fff]">Jetzt anmelden</button>
		</div>
		<SvgsHumansGroup class="max-w-[500px] w-full h-auto" />
	</aside>
</template>
