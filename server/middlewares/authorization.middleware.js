import { UnauthorizedError } from "../errors/CustomError.js";

export const authorizationMiddleware = (roles) => {
  // checked the token payload
  // if admin then return
  // else throw unauthorized
  return (req, res, next) => {
    console.log("AUTHORIZATION USER", req.currentUser);
    if (req.currentUser.role.toLowerCase() !== roles[0].toLowerCase()) {
      throw new UnauthorizedError(
        "You are not authorized to perform this operation"
      );
    }
    next();
  };
};
