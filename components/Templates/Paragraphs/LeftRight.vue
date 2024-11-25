<template>
	<section
		class="flex flex-col md:flex-row gap-[2rem] xl:gap-[10rem] max-w-[--max-width] m-auto py-[5rem]">
		<div class="md:w-[50%]">
			<slot name="left"></slot>
		</div>
		<div class="md:w-[50%]">
			<slot name="right"></slot>
		</div>
	</section>
</template>
