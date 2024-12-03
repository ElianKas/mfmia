// middleware/redirect.js
export default defineNuxtRouteMiddleware((to, from) => {
	// Beispiel für eine Weiterleitung von einer alten Route zu einer neuen Route
	if (to.path === '/alte-route') {
		return navigateTo('/');
	}

	// Weitere Weiterleitungen können hier hinzugefügt werden
	if (to.path === '/alte-route-2') {
		return navigateTo('/neue-route-2');
	}
});
