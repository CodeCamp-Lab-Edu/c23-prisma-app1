import prisma from "../lib/prisma.js";

export async function findAllUsers() {
  const users = await prisma.user.findMany({
    include: { posts: true },
  });

  return users;
}

export async function findUserById(id) {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
}

export async function updateUserById(id, name) {
  const updatedUser = await prisma.user.update({
    where: { id },
    data: { name },
  });

  return updatedUser;
}

export async function deleteUserById(id) {
  await prisma.$transaction([
    prisma.post.deleteMany({
      where: { userId: id },
    }),
    prisma.user.delete({
      where: {
        id,
      },
    }),
  ]);
}
