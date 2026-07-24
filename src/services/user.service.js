import prisma from "../lib/prisma.js";

export async function findAllUsers() {
  const users = await prisma.user.findMany({
    include: { posts: true },
  });

  return users;
}
