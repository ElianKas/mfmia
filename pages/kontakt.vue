<template>
	<section
		class="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-[4rem] sm:gap-[8rem] px-[1rem] my-[6rem] lg:px-[3rem] max-w-[--max-width] m-auto min-h-[calc(100vh-80px)]">
		<form
			action="#"
			class="max-w-[500px] flex flex-col gap-[1rem] lg:w-[50%]">
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
					Straße / Nr.
					<input
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b">
					PLZ / Ort
					<input
						type="text"
						class="grow" />
				</label>
				<div class="h-[1px] border border-green"></div>
				<label
					class="input px-[.5rem] flex items-center gap-2 border-b">
					Telefon / Mobil
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
				<br />
				<textarea
					class="textarea textarea-bordered border-green w-full"
					placeholder="Ihre Mitteilung"></textarea>
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
