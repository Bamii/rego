import prisma from "~/lib/prisma"
export default defineEventHandler(async (event) => {
  const LIMIT = 10;
  const page = 1;
  const data = await prisma.listing.findMany({
    skip: (page - 1) * LIMIT,
    take: LIMIT,
    include: {
      reviews: true
    }
  })
    return { listings: data };
});
