import express from "express";
import { LOGIN, LOGOUT, REGISTER } from "../controllers/auth.controllers.js";
const router = express.Router();
router.post("/register", REGISTER);
router.post("/login", LOGIN);
router.get("/logout", LOGOUT);

export default router;
