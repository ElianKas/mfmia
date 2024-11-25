<template>
	<section
		class="min-h-[calc(100vh-80px)] border flex flex-col md:flex-row md:items-center gap-[5rem] md:px-[3rem]">
		<div
			class="mt-[5rem] md:mt-0 flex flex-col gap-[2rem] max-md:px-[3rem] md:w-[50%]">
			<div class="flex flex-col md:flex-row gap-[2rem]">
				<slot></slot>
				<div>
					<h1>Standorte</h1>
					<p class="subtitle">Wo wir Brunnen bauen</p>
				</div>
			</div>
			<div>
				<p>
					Wir bauen Brunnen in ländlichen Regionen Kameruns,
					insbesondere in der Region um Obala herum. Der Ort Obala
					liegt etwa 50 km nördlich von Yaoundé, der Hauptstadt
					Kameruns.
				</p>
				<br />
				<p>
					Weitere Brunnen werden wir in der Region Leng-Tombo, ca. 150
					km östlich von Yaoundé, bauen, wo wir auch Toilettenhäuser
					errichten und eine Schule unterstützen.
				</p>
			</div>
		</div>
		<div class="md:w-[50%]">
			<div
				class="border aspect-square w-full rounded-[--border-radius]"></div>
		</div>
	</section>
</template>
