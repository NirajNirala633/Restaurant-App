import express from "express";
import { Logout, Register, Login } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", Register);

router.post("/login", Login);

router.get("/logout", Logout);

export default router;
