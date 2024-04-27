import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export async function getCategories() {
  return await prismaClient.category.findMany();
}