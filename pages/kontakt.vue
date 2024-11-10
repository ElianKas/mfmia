<template>
	<section class="flex flex-col gap-[4rem] px-[1rem]">
		<form
			action="#"
			class="max-w-[500px] flex flex-col gap-[1rem]">
			<h1 class="text-orange">Kontakt</h1>
			<div>
				<label class="input px-[.5rem] flex items-center gap-2">
					Anrede<span class="text-orange">*</span>
					<input
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b">
					Vorname<span class="text-orange">*</span>
					<input
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b">
					Name<span class="text-orange">*</span>
					<input
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b">
					E-Mail<span class="text-orange">*</span>
					<input
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b">
					Straße / Nr.<span class="text-orange">*</span>
					<input
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b">
					PLZ / Ort<span class="text-orange">*</span>
					<input
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b">
					Telefon / Mobil<span class="text-orange">*</span>
					<input
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<br />
				<textarea
					class="textarea textarea-bordered border-green w-full"
					placeholder="Nachricht"></textarea>
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
			<button class="btn bg-green text-[#fff]">
				Nachricht senden
			</button>
		</form>
		<aside>logo</aside>
	</section>
</template>
