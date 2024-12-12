// import { useCookie } from "nuxt/app"


export default defineEventHandler(async (event) => {
  const cookie = getCookie(event, "access_token")
  if(cookie) {
    const data = await jwt.verifyToken(cookie)
  
    const user = await prisma[data.type == "admin" ? 'realtor' : 'user'].findUnique({ where: { email: data.email } })
    if (user) {
      event.context.auth = { ...user, type: data.type };
      event.context.user = { ...user, type: data.type };
    }
  }
})