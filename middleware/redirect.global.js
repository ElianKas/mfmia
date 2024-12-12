// middleware/redirect.js
export default defineNuxtRouteMiddleware((to, from) => {
	if (to.path === '/aktuelles') {
		return navigateTo('/news/aktuelles');
	}
	if (to.path === '/kamerun') {
		return navigateTo('/projekte/kamerun');
	}
	if (to.path === '/toilettenhaeuser') {
		return navigateTo(
			'/projekte/hygiene-gesundheit/toilettenhaeuser'
		);
	}
	if (to.path === '/toilettenhaeuser') {
		return navigateTo(
			'/projekte/hygiene-gesundheit/toilettenhaeuser'
		);
	}
	if (to.path === '/brunnenbau') {
		return navigateTo('/projekte/brunnenbau');
	}
	if (to.path === '/patenschaften') {
		return navigateTo('/projekte/bildung/patenschaften');
	}
	if (to.path === '/bildungssystem') {
		return navigateTo('/projekte/bildung/schulsystem');
	}
	if (to.path === '/schulen') {
		return navigateTo('/projekte/bildung/schulenbau');
	}
});
