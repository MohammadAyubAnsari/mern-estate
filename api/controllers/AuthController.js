import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";

export const Signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 12);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (err) {
    // res.status(500).json(err.message);
    next(err);
  }
};
