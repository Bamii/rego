export default defineNuxtRouteMiddleware(async (to, from) => {
  await fetchUser();
  const user = useUser();
  if (!user.value || user.value.type !== "admin") {
    return await navigateTo("/login");
  }
});