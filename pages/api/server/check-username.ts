import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    const username = req.query.username as string;

    const Available = await prisma.spaces.findMany({
      where: {
        createdBy: username,
      },
      select: {
        createdBy: true,
      },
    });

    if (Available.length) {
      return res
        .status(200)
        .json({ success: false, message: "Opps! Username already taken!" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Username available!" });
  } else if (req.method === "POST") {
    const { spaceInfo } = req.body;
  } else if (req.method === "PUT") {
    // Process a PUT request
  } else if (req.method === "PATCH") {
    // Process a PATCH request
  } else if (req.method === "DELETE") {
  } else {
    return res.status(200).json({ message: "Method No Allowed" });
  }
}
