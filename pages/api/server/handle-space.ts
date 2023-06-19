import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    const spaceId = req.query.spaceId as string;
    let Spaces;
    if (spaceId) {
      Spaces = await prisma.spaces.findMany({
        where: {
          spaceID: spaceId,
        },
        select: {
          spaceName: true,
          spaceID: true,
          spaceDurations: true,
          createdBy: true,
          isProtected: true,
          Chats: {
            select: {
              people: true,
            },
          },
        },
      });
    } else {
      Spaces = await prisma.spaces.findMany({
        select: {
          spaceName: true,
          spaceID: true,
          spaceDurations: true,
          createdBy: true,
          isProtected: true,
          Chats: {
            select: {
              people: true,
            },
          },
        },
      });
    }

    return res.status(200).json({ success: "done", Spaces });
  } else if (req.method === "POST") {
    const { spaceInfo } = req.body;
    try {
      await prisma.spaces.create({
        data: spaceInfo,
      });
      return res.status(200).json({ message: "aLL OKAY" });
    } catch (error: any) {
      console.log(error);
      return res.status(200).json({ message: error.message });
    }
  } else if (req.method === "PUT") {
    // Process a PUT request
  } else if (req.method === "PATCH") {
    // Process a PATCH request
  } else if (req.method === "DELETE") {
    try {
      const spaceID = req.query.spaceID as string;

      await prisma.spaces.delete({ where: { spaceID } });
      return res
        .status(200)
        .json({ success: true, message: "Space Deleted Successfully" });
    } catch (error: any) {
      console.log(error);
      return res.status(200).json({ success: false, message: error.message });
    }
  } else {
    return res.status(200).json({ message: "Method No Allowed" });
  }
}
