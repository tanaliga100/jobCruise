import express from "express";
import {
  CREATE_JOB,
  DELETE_JOB,
  GET_JOB,
  GET_JOBS,
  UPDATE_JOB,
} from "../controllers/jobs.controllers.js";
const router = express.Router();

router.route("/").post(CREATE_JOB).get(GET_JOBS);
router.route("/:id").get(GET_JOB).delete(DELETE_JOB).patch(UPDATE_JOB);
export default router;
