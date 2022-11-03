// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Prisma, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // if (req.method !== "POST") {
  //   return res.status(405).json({ message: "Method not allowed" });
  // }

  try {
    if (req.method === "POST") {
      const contact: Prisma.ContactCreateInput = JSON.parse(req.body);
      const savedContact = await prisma.contact.create({ data: contact });
      res.status(200).json(savedContact);
    }

    if (req.method === "DELETE") {
      const { id } = JSON.parse(req.body);
      const post = await prisma.contact.delete({
        where: { id: id },
      });
      res.status(200).json(post);
    }

    // const contact: Prisma.ContactCreateInput = JSON.parse(req.body);
    // const savedContact = await prisma.contact.create({ data: contact });
    // res.status(200).json(savedContact);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
};
