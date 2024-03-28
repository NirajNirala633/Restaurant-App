import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: "Invalid Data",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const tokenData = {
      id: user._id,
    };

    const token = jwt.sign(tokenData, "asdfghjkl", { expiresIn: "2d" });

    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        success: true,
        message: `Welcome Back ${user.fullName}.`,
        user
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in Login API",
      error,
    });
  }
};

export const Logout = async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true })
    .json({
      success: true,
      message: "User logged out successfully.",
    });
};

export const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if ((!fullName, !email, !password)) {
      return res.status(404).json({
        success: false,
        message: "Invalid Data",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(404).json({
        success: false,
        message: "Email Already Exists",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 16);

    await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(201).send({
      success: true,
      message: "Account Created Successfully",
      // data
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error in User API",
      error,
    });
  }
};
