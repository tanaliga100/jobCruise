import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  UnauthenticatedError,
} from "../errors/CustomError.js";
import { asyncWrapperMiddleware } from "../middlewares/asyncWrapper.middleware.js";
import User from "../models/user.model.js";
import { comparePassword, hashedPassword } from "../utils/password.utils.js";
import { createToken } from "../utils/token.utils.js";

// CONTROLLERS
export const REGISTER = asyncWrapperMiddleware(async (req, res, next) => {
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

export const LOGIN = asyncWrapperMiddleware(async (req, res, next) => {
  // cheched the req body

  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Both fields are required");
  }
  const user = await User.findOne({ email: email });
  if (!user) throw new UnauthenticatedError("Email doesn't exists...");
  // compare the password
  await comparePassword(password, user.password);

  // sends token
  const token = createToken({
    userId: user._id,
    email: user.email,
    role: user.role,
    name: user.firstName,
  });
  const oneDay = 1000 * 60 * 60 * 24;
  const seconds = 1000 * 10;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json({
    msg: `${user.firstName} just logged in`,
  });
});

export const LOGOUT = async (req, res, next) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({
    msg: `User just logged out`,
  });
};
