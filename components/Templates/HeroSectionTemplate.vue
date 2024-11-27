<template>
	<div class="p-[1rem] md:p-[3rem]">
		<section
			class="w-full bg-[#000] p-[1rem] md:p-[2rem] flex flex-col md:flex-row md:items-end justify-end min-h-[calc(100vh-80px-6rem)] relative rounded-[--border-radius]">
			<div></div>
			<h1
				class="text-big text-white font-bold md:absolute md:left-[50%] md:top-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
				<slot name="title"></slot>
			</h1>
			<div class="flex flex-col md:flex-row gap-[2rem]">
				<p class="font-bold text-white md:text-right max-w-[300px]">
					<slot name="description"></slot>
				</p>
				<slot name="logo"></slot>
			</div>
		</section>
	</div>
</template>
