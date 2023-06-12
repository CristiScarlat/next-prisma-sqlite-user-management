import { PrismaClient } from '@prisma/client';
import { cryptPassword } from './utils';

const prisma = new PrismaClient();
export async function createUser(name, password) {
  try{
    let user = null
      cryptPassword(password, async (error, hash) => {
        if(error)console.log(error);
        else {
          user = await prisma.user.create({
            data: {
              name,
              password: hash
            },
          })
        }
    })
    await prisma.$disconnect();
    return user;
  } catch(error) {
    console.error(error)
    await prisma.$disconnect();
  }
}

export async function updateUser(id, data) {
  try{
    const  { password, email=null } = data;
    let user = null;
    cryptPassword(password, async (error, hash) => {
      if(error)console.log(error);
      else {
        user = await prisma.user.update({
          where: { id },
          data: { password: hash, email }
        })
      }
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

export async function getUserByName(name) {
  try{
    const user = await prisma.user.findUnique({
      where: { name }
     })
    await prisma.$disconnect();
    return user;
  } catch(error) {
    console.error(error)
    await prisma.$disconnect();
  }
}