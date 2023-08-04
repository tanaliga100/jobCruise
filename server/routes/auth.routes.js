import express from "express";
import {
  FORGOT_PASSWORD,
  LOGIN,
  REGISTER,
} from "../controllers/auth.controllers.js";
const router = express.Router();
router.post("/register", REGISTER);
router.post("/login", LOGIN);
router.post("/forgot-password", FORGOT_PASSWORD);

export default router;
