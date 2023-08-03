import jwt from "jsonwebtoken";
import { UnauthenticatedError } from "../errors/CustomError.js";

export const createToken = (payload) => {
  const secret = process.env.JWT_SECRET;
  const options = process.env.JWT_EXPIRES_IN;
  const token = jwt.sign(payload, secret, {
    expiresIn: options,
  });
  return token;
};

export const verifyToken = (payload) => {
  const secret = process.env.JWT_SECRET;
  const decoded = jwt.verify(payload, secret);
  if (!decoded) {
    throw new UnauthenticatedError("Invalid Token");
  }
  return decoded;
};
