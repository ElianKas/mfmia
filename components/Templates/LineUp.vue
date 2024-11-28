<template>
	<section class="max-w-[500px] m-auto text-green">
		<h2 class="font-bold">Wie Sie helfen können:</h2>
		<br />
		<ul class="pl-[5px]">
			<li class="grid grid-cols-[40px_1fr]">
				<div class="border-l border-green relative">
					<div
						class="absolute top-0 left-[-5px] w-[10px] aspect-square bg-green rounded-full"></div>
				</div>
				<p>
					<slot name="1"></slot>
					<br /><br />
				</p>
			</li>
			<li class="grid grid-cols-[50px_1fr]">
				<div class="border-l border-green relative">
					<div
						class="absolute top-0 left-[-5px] w-[10px] aspect-square bg-green rounded-full"></div>
				</div>
				<p><slot name="2"></slot><br /><br /></p>
			</li>
			<li class="grid grid-cols-[50px_1fr]">
				<div class="relative">
					<div
						class="absolute top-0 left-[-5px] w-[10px] aspect-square bg-green rounded-full"></div>
				</div>
				<p>
					<slot name="3"></slot>
				</p>
			</li>
		</ul>
	</section>
</template>
