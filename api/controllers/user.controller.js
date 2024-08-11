import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get users", err: err });
  }
};

export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: `Failed to get user with userId: ${id} `, err: err });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId; //verifytoken line:10
  const { password, avatar, ...inputs } = req.body;

  if (id !== tokenUserId) res.status(403).json({ message: "Not Authorized" });
  let updatedPassword = null;
  try {
    if (password) {
      updatedPassword = await bcrypt.hash(password, 10);
    }

    const user = await prisma.user.update({
      where: { id },
      data: {
        ...inputs,
        ...(updatedPassword && { password: updatedPassword }),
        ...(avatar && { avatar }),
      },
    });

    const {password:securePassword,...secureRes} = user; 


    res.status(200).json(secureRes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get users", err: err });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const tokenUserId = req.userId; //verifytoken line:10
  if (id !== tokenUserId) res.status(403).json({ message: "Not Authorized" });
  try {
    const deletedUser = await prisma.user.delete({
      where: { id },
    });
    res.status(200).json({message:"User deleted successfully"});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get users", err: err });
  }
};
