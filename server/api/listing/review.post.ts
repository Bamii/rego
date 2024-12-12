import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    if(isNaN(parseInt(`${query.id}`))) return {}
    const body = event.context.body;
    const user = event.context.user;


    if(!user || user.type !== 'user') return {}

    try {
        const data = await prisma.review.create({
            data: {
                content: body.content,
                rating: parseInt(body.rating),
                user: {
                    connect: {
                        id: user.id
                    }
                },
                listing: {
                    connect: {
                        id: parseInt(query.id)
                    }
                }
            }
        });

        return data;
    } catch (error) {
        throw new Error("an error occured");
    }
});