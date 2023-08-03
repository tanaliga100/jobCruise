import bcrypt from "bcryptjs";
import { UnauthenticatedError } from "../errors/CustomError.js";

export const hashedPassword = async (passwordToHash) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(passwordToHash, salt);
  return hashedPass;
};

export const comparePassword = async (
  userProvidedPassword,
  retrievedPassword
) => {
  const isMatched = await bcrypt.compare(
    userProvidedPassword,
    retrievedPassword
  );

  if (!isMatched) {
    throw new UnauthenticatedError("Password Invalid ");
  }
  return isMatched;
};
