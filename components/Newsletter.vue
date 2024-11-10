<template>
	<aside class="px-[1rem] flex flex-col gap-[1rem]">
		<SvgsHumansGroup class="w-full h-auto" />
		<div
			class="w-full border rounded-[--border-radius] border-orange h-[500px]">
			<p>Zum Newsletter Anmelden und nicht mehr verpassen!</p>
			<label class="input input-bordered flex items-center gap-2">
				Email
				<input
					type="text"
					class="grow" />
			</label>
			<label class="input input-bordered flex items-center gap-2">
				Email
				<input
					type="text"
					class="grow" />
			</label>
			<div class="form-control">
				<label class="label cursor-pointer">
					<input
						type="checkbox"
						:checked="true"
						class="checkbox" />
					<span class="label-text">Remember me</span>
				</label>
			</div>
		</div>
		<SvgsHumansGroup class="w-full h-auto" />
	</aside>
</template>
