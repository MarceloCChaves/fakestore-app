export default defineNuxtRouteMiddleware(() => {
  if (import.meta.client) {
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false')
    if (!loggedIn) {
      return navigateTo('/login')
    }
  }
})