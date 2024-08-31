import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  try {
    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);

    //create a new user and save to db
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user", err: err });
  }
};
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    //CHECK IF USER EXISTS

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) return res.status(401).json({ message: "Invalid username" });

    //CHECK IF PASSWORD IS CORRECT

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(401).json({ message: "Invalid password" });

    //GENERATE TOKEN

    // res.setHeader("Set-Cookie", "test=" + "myvalue").json("success");
    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign(
      {
        id: user.id,
        isAdmin: false,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    //Getting user information

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
        // secure:true,
      })
      .status(200)
      .json(userInfo);
  } catch (err) {
    res.status(500).json({ message: "Failed to Login", err: err });
  }
};
export const logout = (req, res) => {
  res
    .clearCookie("token")
    .status(200)
    .json({ message: "User logged out successfully" });
};

export const verifyTokenRoute = (req, res) => {
  res.status(200).json({ message: "Token is valid" });

};
