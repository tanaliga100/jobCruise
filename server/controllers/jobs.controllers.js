import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/CustomError.js";
import { asyncMiddleware } from "../middlewares/asyncMiddleware.js";
import Job from "../models/job.model.js";
// CREATE JOB
export const CREATE_JOB = asyncMiddleware(async (req, res, next) => {
  const { company, position } = req.body;

  // submitting data to DB
  const job = await Job.create({ company, position });
  // send back the reponse
  res.status(StatusCodes.CREATED).json({
    msg: "JOB CREATED",
    data: job,
  });
});

// GET JOBS
export const GET_JOBS = asyncMiddleware(async (req, res, next) => {
  const jobs = await Job.find({});
  if (!jobs) {
    throw new NotFoundError("There are no jobs.. please create one");
  }
  res.status(200).json({
    msg: "ALL JOBS",
    counts: jobs.length,
    data: jobs,
  });
});

// GET JOB
export const GET_JOB = asyncMiddleware(async (req, res, next) => {
  const { id: jobID } = req.params;
  // query
  const targetJob = await Job.find({ _id: jobID });
  // validate
  if (!targetJob[0]) {
    // return next(new NotFoundError("No job found with id: " + jobID));
    throw new NotFoundError("No Job found with id: " + jobID);
  }
  res.status(200).json({
    msg: "SINGLE JOB",
    job: targetJob,
  });
});

// DELETE JOB
export const DELETE_JOB = asyncMiddleware(async (req, res, next) => {
  const { id: jobID } = req.params;

  // query
  const foundJob = await Job.find({ _id: jobID });
  if (!foundJob[0]) {
    throw new NotFoundError("No Job found with id: " + jobID);
  }
  // delete here...
  await Job.deleteOne(foundJob[0]);
  res.status(StatusCodes.OK).json({
    msg: " JOB DELETED",
  });
});

// EDIT JOB
export const UPDATE_JOB = asyncMiddleware(async (req, res, next) => {
  const { id: jobID } = req.params;
  const { company, position } = req.body;

  // query
  const foundJob = await Job.find({ _id: jobID });

  if (!foundJob[0]) {
    throw new NotFoundError("No Job found with id: " + jobID);
  }
  // // edit here...
  foundJob[0].company = company;
  foundJob[0].position = position;

  await foundJob[0].save();

  res.status(StatusCodes.OK).json({
    msg: " JOB EDITED",
  });
});
