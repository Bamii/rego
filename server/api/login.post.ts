import jwt from '~/server/utils/jwt';
// import prisma from "~/lib/prisma";

export default defineEventHandler(async (req) => {
  const body = (await readBody(req));
  const { email, password } = body;

  console.log(body, email, password)

  setCookie(req, 'access_token', "sdaffd", { secure: true });
  return "accessToken";

  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return null
  }

  const accessToken = jwt.signPayload({ email: user.email, name: user.name });
  
  setCookie(req, 'access_token', accessToken, { secure: true });
  return accessToken;
});