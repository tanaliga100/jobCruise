import { asyncWrapperMiddleware } from "../middlewares/asyncWrapper.middleware.js";

import { StatusCodes } from "http-status-codes";
import Job from "../models/job.model.js";
import User from "../models/user.model.js";

export const CURRENT_USER = asyncWrapperMiddleware(async (req, res, next) => {
  const currentUserLoggedIn = req.currentUser;
  res.status(StatusCodes.OK).json({
    msg: `Current User: ${currentUserLoggedIn.name}`,
    user: currentUserLoggedIn,
  });
});

export const GET_ALL_USERS = asyncWrapperMiddleware(async (req, res, next) => {
  const allusers = await User.find({});
  res.status(StatusCodes.OK).json({
    counts: allusers.length,
    allusers,
  });
});

export const UPDATE_USER = asyncWrapperMiddleware(async (req, res, next) => {
  console.log("PAYLOAD", req.currentUser);

  // query
  const updatedUser = await User.findByIdAndUpdate(
    req.currentUser.userId,
    req.body,
    { new: true, runValidators: true }
  );

  res.status(StatusCodes.OK).json({
    msg: `User Updated`,
    updatedUser,
  });
});

export const APPLICATION_STATS = asyncWrapperMiddleware(
  async (req, res, next) => {
    const users = await User.countDocuments();
    const jobs = await Job.countDocuments();

    res.status(StatusCodes.OK).json({
      msg: `Application Stats`,
      users: users,
      jobs: jobs,
    });
  }
);
