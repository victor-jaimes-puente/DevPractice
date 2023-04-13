import prisma from "../db";

import { createJWT, hashPassword, comparePasswords } from "../modules/auth";


export const createNewUser = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: await hashPassword(req.body.password)
      }
    })
  
    const token = createJWT(user)
    res.json({ token })
    
  } catch (error) {
    error.type = 'input'
    next(error)
  }
}
export const getUsers = async (req, res, next)=>{
  const users = await prisma.user.findMany();
  res.json({users})
}

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username
    }
  })

  const isValid = await comparePasswords(req.body.password, user.password)

  if (!isValid) {
    res.status(401)
    res.json({message: 'nope'})
    return
  }

  const token = createJWT(user)
  res.json({ token })
}



export const deleteUser = async (req, res, next)=>{
  const deleted = await prisma.user.delete({
    where: {
       id: req.body.id
      }
  })

  res.json({ data: deleted });
}