import jwt from "~/server/utils/jwt";
import prisma from "~/lib/prisma";
import bcrypt from "bcrypt";
import body from "../middleware/body";

function hashPassword(password: string) {
    return bcrypt.hash(password, 10);
}

export default defineEventHandler(async (req) => {
    const { email, name, password, type, phone } = req.context.body;

    // let identifier: "user" | "realtor";
    let identifier;
    switch (type) {
        case "user":
            identifier = prisma.user;
            break;

        case "admin":
            identifier = prisma.realtor;
            break;

        default:
            throw new Error("invalid usage");
    }

    let user = await identifier.findUnique({ where: { email } });
    if (user) throw new Error("email already exists.");

    user = await identifier.create({
        data: { email, phone: phone, name, password: await hashPassword(password) },
    });

    const accessToken = jwt.signPayload({
        email: user.email,
        id: user.id,
        name: user.name,
        type,
    });

    setCookie(req, "access_token", accessToken, { secure: true });
    return accessToken;
});
