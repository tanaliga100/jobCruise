import express from "express";
import {
  APPLICATION_STATS,
  CURRENT_USER,
  GET_ALL_USERS,
  UPDATE_USER,
} from "../controllers/user.controllers.js";
import { authorizationMiddleware } from "../middlewares/authorization.middleware.js";

const router = express.Router();
router.get("/current-user", CURRENT_USER);
router.get("/all-users", authorizationMiddleware(["Admin"]), GET_ALL_USERS);

router.get(
  "/admin/app-stats",
  authorizationMiddleware(["Admin"]),
  APPLICATION_STATS
);
router.patch("/update-user", UPDATE_USER);

export default router;
