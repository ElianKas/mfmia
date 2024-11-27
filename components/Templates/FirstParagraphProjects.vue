<template>
	<section
		class="min-h-[calc(100vh-80px)] max-w-[--max-width-big] m-auto flex flex-col md:flex-row md:items-center gap-[5rem] md:px-[3rem]">
		<div
			class="mt-[5rem] xl:mt-0 flex flex-col gap-[2rem] max-md:px-[3rem] md:w-[50%]">
			<div class="flex flex-col xl:flex-row gap-[2rem]">
				<slot name="logo"></slot>
				<div>
					<h1 class="font-bold text-green">
						<slot name="title"></slot>
					</h1>
					<p class="text-big text-orange font-bold">
						<slot name="subtitle"></slot>
					</p>
				</div>
			</div>
			<div>
				<p>
					<slot name="description"></slot>
				</p>
			</div>
		</div>
		<div class="md:w-[50%]">
			<div
				class="border aspect-square w-full rounded-[--border-radius]">
				<slot name="image"></slot>
			</div>
		</div>
	</section>
</template>
