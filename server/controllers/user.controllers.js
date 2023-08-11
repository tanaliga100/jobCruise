import { asyncWrapperMiddleware } from "../middlewares/asyncWrapper.middleware.js";

import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/CustomError.js";
import Job from "../models/job.model.js";
import User from "../models/user.model.js";

export const LOGOUT = asyncWrapperMiddleware(async (req, res, next) => {
  console.log("TOKEN", req.currentUser);
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  const response = `${
    req.currentUser.name.charAt(0).toUpperCase() + req.currentUser.name.slice(1)
  }`;
  res.status(StatusCodes.OK).json({
    msg: `${response} just logged out`,
  });
});

export const CURRENT_USER = asyncWrapperMiddleware(async (req, res, next) => {
  const currentUserLoggedIn = req.currentUser;

  res.status(StatusCodes.OK).json({
    msg: `${currentUserLoggedIn.name}`,
  });
});

export const GET_ALL_USERS = asyncWrapperMiddleware(async (req, res, next) => {
  const allusers = await User.find({}).select(
    "firstName lastName gender email role"
  );
  res.status(StatusCodes.OK).json({
    msg: "ALL USERS",
    counts: allusers.length,
    allusers,
  });
});

export const UPDATE_USER = asyncWrapperMiddleware(async (req, res, next) => {
  const currentUserLoggedIn = req.currentUser;
  console.log(currentUserLoggedIn);
  const {
    firstName,
    lastName,
    age,
    gender,
    phoneNumber,
    email,
    address: { addressLine, state, country, zipCode },
  } = req.body;

  // checked the req body inputs
  if (
    !firstName ||
    !lastName ||
    !age ||
    !gender ||
    !phoneNumber ||
    !email ||
    !addressLine ||
    !state ||
    !country ||
    !zipCode
  ) {
    throw new BadRequestError("All Fields must not be empty");
  }

  const updatedUser = await User.findOne({ _id: req.currentUser.userId });

  updatedUser.firstName = firstName;
  updatedUser.lastName = lastName;
  updatedUser.age = age;
  updatedUser.gender = gender;
  updatedUser.phoneNumber = phoneNumber;
  updatedUser.firstName = firstName;
  updatedUser.email = email;
  updatedUser.addressLine = addressLine;
  updatedUser.state = state;
  updatedUser.country = country;
  updatedUser.zipCode = zipCode;

  await updatedUser.save(); // actual changes

  const newProfile = await User.find({ _id: req.currentUser.userId }).select(
    "firstName lastName"
  );
  res.status(StatusCodes.OK).json({
    msg: `Congrats ${newProfile[0].firstName}, you successfully updated your profile`,
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

// if (!userUpdated) {
//   throw new BadRequestError(
//     "No User Found with that id" + req.currentUser.userId
//   );
// }

//   const updatedUser = {
//     firstName,
//     lastName,
//     age,
//     gender,
//     phoneNumber,
//     email,
//     address: { addressLine, state, country, zipCode },
//   };

// const {
//   firstName,
//   lastName,
//   age,
//   gender,
//   phoneNumber,
//   email,
//   password,
//   address: { addressLine, state, country, zipCode },
// } = req.body;

// if (
//   !firstName ||
//   !lastName ||
//   !age ||
//   !gender ||
//   !phoneNumber ||
//   !email ||
//   !password ||
// !addressLine ||
// !state ||
// ! country ||
// !zipCode
// ) {
//   throw new BadRequestError("All Fields must not be empty");
// }
