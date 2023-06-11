import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function createUser(name, password) {
  try{
    const user = await prisma.user.create({
      data: {
        name,
        password,
      },
    })
    await prisma.$disconnect();
    return user;
  } catch(error) {
    console.error(error)
    await prisma.$disconnect();
  }
}

export async function updateUser(name, password) {
  try{
    const user = await prisma.user.update({
      where: { name },
      data: { password }
    })
    await prisma.$disconnect();
    return user;
  } catch(error) {
    console.error(error)
    await prisma.$disconnect();
  }
}

export async function getAllUsers() {
  try{
    const users = await prisma.user.findMany()
    await prisma.$disconnect();
    return users;
  } catch(error) {
    console.error(error)
    await prisma.$disconnect();
  }

}