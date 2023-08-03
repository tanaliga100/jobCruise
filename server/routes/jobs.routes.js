import express from "express";
import {
  CREATE_JOB,
  DELETE_JOB,
  GET_JOB,
  GET_JOBS,
  UPDATE_JOB,
} from "../controllers/jobs.controllers.js";
import { authorizationMiddleware } from "../middlewares/authorization.middleware.js";
const router = express.Router();

router
  .route("/")
  .post(authorizationMiddleware(["Admin"]), CREATE_JOB)
  .get(GET_JOBS);
router
  .route("/:id")
  .get(authorizationMiddleware(["Admin"]), GET_JOB)
  .delete(authorizationMiddleware(["Admin"]), DELETE_JOB)
  .patch(authorizationMiddleware(["Admin"]), UPDATE_JOB);

export default router;
