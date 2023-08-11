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
  // validate the users' existence
  const foundUser = await User.findOne({ email: req.body.email });
  if (foundUser) {
    throw new BadRequestError("Email already exists...Please log in instead");
  }

  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "Admin" : "User";

  // password encryption...
  const hashedPass = await hashedPassword(req.body.password);
  req.body.password = hashedPass;
  // submission...
  const user = await User.create(req.body);
  // omit the password
  const userWithOutPassword = { ...user.toObject() };
  delete userWithOutPassword.password;
  if (isFirstAccount) {
    return res.status(StatusCodes.CREATED).json({
      msg: "ADMIN Account Created... Please Log In",
      user: userWithOutPassword,
    });
  }

  res.status(StatusCodes.CREATED).json({
    msg: "USER Acccount Created... Please Log in...",
    user: userWithOutPassword,
  });
});

export const LOGIN = asyncWrapperMiddleware(async (req, res, next) => {
  const currentUserLoggedIn = req.currentUser;

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
  const response = `Welcome, ${
    user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)
  } ${user.lastName.charAt(0).toUpperCase()}.`;

  res.status(StatusCodes.OK).json({
    msg: `${response}`,
    role: `${user.role}`,
  });
});

export const FORGOT_PASSWORD = asyncWrapperMiddleware(
  async (req, res, next) => {
    res.status(StatusCodes.OK).json({
      msg: `You successfully update you password`,
    });
  }
);
