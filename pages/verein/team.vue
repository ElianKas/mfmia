<script setup>
	const people = [
		{
			image:
				'https://a.storyblok.com/f/311834/3024x3024/67f419cfa5/lukas-langhein_img_0049.png',
			name: 'Max Mustermann',
			title: 'admin',
			email: 'Max@Mustermann',
			description: 'Max Mustermann',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/3024x3024/67f419cfa5/lukas-langhein_img_0049.png',
			name: 'Max Mustermann',
			title: 'admin',
			email: 'Max@Mustermann',
			description: 'Max Mustermann',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/3024x3024/67f419cfa5/lukas-langhein_img_0049.png',
			name: 'Max Mustermann',
			title: 'admin',
			email: 'Max@Mustermann',
			description: 'Max Mustermann',
		},
		{
			image:
				'https://a.storyblok.com/f/311834/3024x3024/67f419cfa5/lukas-langhein_img_0049.png',
			name: 'Max Mustermann',
			title: 'admin',
			email: 'Max@Mustermann',
			description: 'Max Mustermann',
		},
	];
</script>
<template>
	<div>
		<article class="px-[1rem] md:px-[3rem] pt-[1rem]">
			<section>
				<div
					class="h-[500px] bg-[#000] grid place-items-center rounded-[--border-radius] relative">
					<h1 class="text-white text-big font-bold z-[9]">
						Das Team
					</h1>
					<StoryblokImage
						class="object-cover h-full w-full absolute inset-0 opacity-50"
						src="https://a.storyblok.com/f/311834/3129x939/ea1180b0a0/themenbild_team.png" />
				</div>
			</section>
			<TemplatesParagraphsHighlighted>
				Unser Team besteht aus vielen Freiwilligen, die ehrenamtlich
				für den Verein engagieren. Wir kombinieren unsere
				individuellen Fähigkeiten, um den Menschen in Deutschland ein
				breites Bild über unsere Arbeit in Kamerun zu vermitteln. Und
				natürlich, um die Menschen in Kamerun bestmöglich zu
				unterstützen.
			</TemplatesParagraphsHighlighted>
			<section
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] md:gap-[5rem] max-w-[--max-width] m-auto">
				<div v-for="person in people">
					<StoryblokImage
						:src="person.image"
						class="w-full aspect-square object-cover" />
					<p>{{ person.name }}</p>
					<p v-if="person.title">{{ person.title }}</p>
					<p>{{ person.email }}</p>
					<p>{{ person.description }}</p>
				</div>
			</section>
		</article>
	</div>
</template>
