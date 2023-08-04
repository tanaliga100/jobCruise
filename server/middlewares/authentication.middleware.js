import { UnauthenticatedError } from "../errors/CustomError.js";
import { verifyToken } from "../utils/token.utils.js";

export const authenticationMiddleware = (req, res, next) => {
  try {
    // checked if the cookie is present

    if (!req.cookies || req.cookies.token) {
      throw new UnauthenticatedError("Authentication Invalid");
    }
    // verify the token
    const result = verifyToken(req.cookies.token);
    const { userId, email, role, name } = result;
    // const currentUser = { userId, role, email };
    req.currentUser = {
      userId,
      role,
      email,
      name,
    };
    next();
  } catch (error) {
    console.log("AUTH ERROR", error);
    throw new UnauthenticatedError(" Please Login | Register");
  }
};
