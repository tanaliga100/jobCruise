import express from "express";
import {
  CREATE_JOB,
  DELETE_JOB,
  GET_JOB,
  GET_JOBS,
  UPDATE_JOB,
} from "../controllers/jobs.controllers.js";
import {
  validateIdParam,
  validateRequestBody,
} from "../middlewares/validationMiddleware.js";
import { jobBodySchema, jobIdSchema } from "../validators/schemas.js";
const router = express.Router();

router
  .route("/")
  .post(validateRequestBody(jobBodySchema), CREATE_JOB)
  .get(GET_JOBS);
router
  .route("/:id")
  .get(validateIdParam(jobIdSchema), GET_JOB)
  .delete(validateIdParam(jobIdSchema), DELETE_JOB)
  .patch(
    validateIdParam(jobIdSchema),
    validateRequestBody(jobBodySchema),
    UPDATE_JOB
  );

export default router;
