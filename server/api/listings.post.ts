import { z } from "zod";
import { v2 as cloudinary } from "cloudinary";
import formidable from "formidable";

cloudinary.config({
    cloud_name: "bambam",
    api_key: "121138374187311",
    api_secret: "qsMwxhFNLSl_1GeTJGBmevfbaOI",
});

const createListing = z.object({
    title: z.string().default(""),
    bath: z.number(),
    toilet: z.number(),
    parking_space: z.number(),
    images: z.array(z.string()),
    location: z.string(),
    type: z.string(),
});

export default defineEventHandler(async (event) => {
    const user = event.context.auth;
    const body = event.context.body;
    if(!user) throw new Error("get out!, respectfully");

    try {
      const data = await Promise.allSettled(body.images.map((image) => cloudinary.uploader.upload(image.filepath)));
  
      body.images = data.map(e => e.value.secure_url)
  
      const listing = await prisma.listing.create({
        data: {
          ...body,
          price: parseInt(body.price),
          bath: parseInt(body.bath),
          toilet: parseInt(body.toilet),
          parking_space: parseInt(body.parking_space),
          realtor: {
            connect: {
                id: user.id
            }
          }
        }
      })
      
      return { ok: true };
    } catch (error) {
      throw new Error("something happened")
    }
});
