<script setup>
	onMounted(() => {
		PayPal.Donation.Button({
			env: 'sandbox',
			hosted_button_id: 'YOUR_SANDBOX_HOSTED_BUTTON_ID',
			// business: 'YOUR_EMAIL_OR_PAYERID',
			image: {
				src: 'https://a.storyblok.com/f/311834/704x396/c8a722356d/empty.png',
				title: 'PayPal - The safer, easier way to pay online!',
				alt: 'Donate with PayPal button',
			},
			onComplete: function (params) {
				// Your onComplete handler
			},
		}).render('#paypal-donate-button');
	});
</script>
<template>
	<aside
		class="flex flex-col items-center w-[320px] m-auto text-center py-[2rem]">
		<SvgsHumansTwo class="w-[80px] h-auto" />
		<div class="btn bg-orange text-white relative overflow-hidden">
			<p>Jetzt Spenden</p>
			<div
				id="paypal-donate-button"
				class="absolute w-full h-full inset-0"></div>
		</div>
		<br />
		<p>
			Jede Spende macht einen Unterschied. Jeder Euro unterstützt
			direkt unsere Projekte. Bei „Miteinander - für Menschen in
			Afrika e.V.“ setzen wir jede Spende sorgfältig und transparent
			ein.
		</p>
	</aside>
</template>
