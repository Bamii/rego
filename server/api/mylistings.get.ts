import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
    const user = event.context.user;
    if (!user || user.type !== "admin") {
        throw new Error("please leave.");
    }

    const LIMIT = 10;
    const page = 1;
    const realtor = await prisma.realtor.findUnique({
        where: {
            email: user.email,
        },
        include: {
            listings: {
                skip: (page - 1) * LIMIT,
                take: LIMIT,
                include: {
                  reviews: true,
                }
            },
        },
    });

    return { realtor };
});
