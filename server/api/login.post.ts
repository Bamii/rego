import jwt from '~/server/utils/jwt';
import * as bcrypt from "bcrypt"
// import prisma from "~/lib/prisma";

    const comparePassword = ({
      password,
      hashedPassword,
    }: {
      password: string;
      hashedPassword: string;
    }) => {
      return bcrypt.compareSync(password, hashedPassword);
    };

export default defineEventHandler(async (req) => {
    const { email, password, type } = req.context.body;

    let identifier;
    switch (type) {
        case "user":{
            identifier = prisma.user;
            break;
}
        case "admin": {
          identifier = prisma.realtor;
          break;
        }

        default:
            throw new Error("invalid usage");
    }

    let user = await identifier.findUnique({ where: { email } });
    if (!user) throw new Error("invalid login credentials");

    if(!comparePassword({ password, hashedPassword: user.password })) {
      throw new Error("invalid login credentials")
    }

    const accessToken = jwt.signPayload({
        email: user.email,
        id: user.id,
        name: user.name,
        type
    });

    setCookie(req, "access_token", accessToken, { secure: true });
    return accessToken;
});