import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/CustomError.js";
import { asyncWrapperMiddleware } from "../middlewares/asyncWrapper.middleware.js";
import Job from "../models/job.model.js";
// CREATE JOB
export const CREATE_JOB = asyncWrapperMiddleware(async (req, res, next) => {
  // payload token
  console.log("TOKEN PAYLOAD", req.currentUser);

  const {
    company,
    position,
    salary,
    jobStatus,
    jobType,
    jobLocation,
    jobQualifications,
  } = req.body;

  // Check if any of the properties is empty
  if (
    !company ||
    !position ||
    !salary ||
    !jobStatus ||
    !jobType ||
    !jobLocation ||
    !jobQualifications
  ) {
    throw new BadRequestError("All fields are required");
  }

  // SINGLE
  const tempJob = {
    ...req.body,
    postedBy: {
      id: req.currentUser.userId,
      role: req.currentUser.role,
      name: req.currentUser.email,
    },
  };

  // submitting data to DB
  const job = await Job.create(tempJob);
  console.log("NEWLY CREATED JOB", job);
  // send back the reponse
  res.status(StatusCodes.CREATED).json({
    msg: "JOB CREATED",
    data: job,
  });
});

// GET JOBS
export const GET_JOBS = asyncWrapperMiddleware(async (req, res, next) => {
  console.log("CURRENT USER ", req.currentUser);

  if (req.currentUser.role === "Admin") {
    const jobs = await Job.find({});
    if (jobs.length === 0) {
      throw new NotFoundError(
        "There are no jobs created by Admin.. please create one"
      );
    }

    return res.status(200).json({
      msg: `JOBS CREATED BY : ${req.current.role}`,
      counts: jobs.length,
      data: jobs,
    });
  } else {
    const jobs = await Job.find({ "postedBy.id": req.currentUser.userId });

    if (jobs.length === 0) {
      throw new NotFoundError(
        "There are no jobs created by a User.. please create one"
      );
    }
    return res.status(200).json({
      msg: `JOBS CREATED  BY : ${req.currentUser.role}`,
      counts: jobs.length,
      data: jobs,
    });
  }
  // res.status(200).json({
  //   msg: "ALL JOBS",
  //   counts: jobs.length,
  //   data: jobs,
  // });
});

// GET JOB
export const GET_JOB = asyncWrapperMiddleware(async (req, res, next) => {
  const { id: jobID } = req.params;
  // console.log("currentUser", req.currentUser);
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
export const DELETE_JOB = asyncWrapperMiddleware(async (req, res, next) => {
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
export const UPDATE_JOB = asyncWrapperMiddleware(async (req, res, next) => {
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
