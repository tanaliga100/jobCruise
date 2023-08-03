import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  UnauthenticatedError,
} from "../errors/CustomError.js";
import { asyncMiddleware } from "../middlewares/asyncMiddleware.js";
import User from "../models/user.model.js";
import { comparePassword, hashedPassword } from "../utils/passwordUtils.js";

// CONTROLLERS
export const REGISTER = asyncMiddleware(async (req, res, next) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  console.log(isFirstAccount);
  req.body.role = isFirstAccount ? "Admin" : "User";
  // validate the users' existence
  const foundUser = await User.findOne({ email: req.body.email });
  if (foundUser) {
    throw new BadRequestError("Email already exists...");
  }
  // password encryption...
  const hashedPass = await hashedPassword(req.body.password);
  req.body.password = hashedPass;
  // submission...
  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({
    msg: "Account Created... Please Log in...",
  });
});

export const LOGIN = asyncMiddleware(async (req, res, next) => {
  // cheched the req body
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Both fields are required");
  }
  const user = await User.findOne({ email: email });
  if (!user) throw new UnauthenticatedError("Email doesn't exists...");
  // compare the password
  await comparePassword(password, user.password);

  res.status(200).json({
    msg: "Logging in...",
  });
});

export const LOGOUT = async (req, res, next) => {
  try {
    res.status(200).json({
      msg: "USER LOGOUT",
    });
  } catch (error) {
    res.status(400).json({
      msg: "SOMETHING WENT WRONG",
    });
  }
};
