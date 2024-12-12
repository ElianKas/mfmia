// middleware/redirect.js
export default defineNuxtRouteMiddleware((to, from) => {
	if (to.path === '/aktuelles.html') {
		return navigateTo('/news/aktuelles');
	}
	if (to.path === '/kamerun.html') {
		return navigateTo('/projekte/kamerun');
	}
	if (to.path === '/toilettenhaeuser.html') {
		return navigateTo(
			'/projekte/hygiene-gesundheit/toilettenhaeuser'
		);
	}
	if (to.path === '/brunnenbau.html') {
		return navigateTo('/projekte/brunnenbau');
	}
	if (to.path === '/patenschaften.html') {
		return navigateTo('/projekte/bildung/patenschaften');
	}
	if (to.path === '/bildungssystem.html') {
		return navigateTo('/projekte/bildung/schulsystem');
	}
	if (to.path === '/schulen.html') {
		return navigateTo('/projekte/bildung/schulenbau');
	}
	if (to.path === '/solarlight.html') {
		return navigateTo('/projekte/hilfe-zur-selbsthilfe/solar-light');
	}
	if (to.path === '/plantage.html') {
		return navigateTo('/projekte/hilfe-zur-selbsthilfe/plantagen');
	}
	if (to.path === '/aktionen.html') {
		return navigateTo('/news');
	}
	if (to.path === '/spenden.html') {
		return navigateTo('/spenden');
	}
	if (to.path === '/mitglied-werden.html') {
		return navigateTo('/verein/aktiv-werden');
	}
	if (to.path === '/pate-werden.html') {
		return navigateTo('/verein/aktiv-werden');
	}
	if (to.path === '/unser-verein.html') {
		return navigateTo('/verein');
	}
	if (to.path === '/die-idee.html') {
		return navigateTo('/verein/geschichte');
	}
	if (to.path === '/das-team.html') {
		return navigateTo('/verein/team');
	}
	if (to.path === '/reiseberichte-38.html') {
		return navigateTo('/storys');
	}
	if (to.path === '/presseberichte.html') {
		return navigateTo('/news/presse');
	}
	if (to.path === '/kontakt.html') {
		return navigateTo('/kontakt');
	}
	if (to.path === '/vereinschronik.html') {
		return navigateTo('/verein/geschichte');
	}
	if (to.path === '/kinder-und-frauenzentrum.html') {
		return navigateTo('/projekte/hilfe-zur-selbsthilfe');
	}
	if (to.path === '/impressum.html') {
		return navigateTo('/impressum');
	}
	if (to.path === '/disclaimer.html') {
		return navigateTo('/disclaimer');
	}
	if (to.path === '/datenschutz.html') {
		return navigateTo('/datenschutz');
	}
});
