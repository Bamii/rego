import prisma from "~/lib/prisma";
export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    if(isNaN(parseInt(`${query.id}`))) return {}

    try {
        const data = await prisma.listing.findUnique({
            where: { id: parseInt(query.id!) },
            include: { 
              realtor: true,
              reviews: { include: { user: true }} 
            }
        });
        return data;
    } catch (error) {
        throw new Error("an error occured");
    }
});
