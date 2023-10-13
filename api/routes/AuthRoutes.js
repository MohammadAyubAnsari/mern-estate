import express from "express";
import { Signin, Signup } from "../controllers/AuthController.js";

const router = express.Router();

router.post("/signup", Signup);

router.get("/signin", Signin);

export default router;
