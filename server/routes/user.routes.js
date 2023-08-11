import express from "express";
import {
  APPLICATION_STATS,
  CURRENT_USER,
  GET_ALL_USERS,
  LOGOUT,
  UPDATE_USER,
} from "../controllers/user.controllers.js";
import { authorizationMiddleware } from "../middlewares/authorization.middleware.js";

const router = express.Router();
router.get("/logout", LOGOUT);
router.get("/current-user", CURRENT_USER);
router.get("/all-users", GET_ALL_USERS);

router.get(
  "/admin/app-stats",
  authorizationMiddleware(["Admin"]),
  APPLICATION_STATS
);
router.patch("/update-user", UPDATE_USER);

export default router;
