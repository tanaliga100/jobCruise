import { UnauthorizedError } from "../errors/CustomError.js";

export const authorizationMiddleware = (roles) => {
  // checked the token payload
  // if admin then return
  // else throw unauthorized
  return (req, res, next) => {
    console.log("AUTHORIZED ROLES ARE :", roles);
    const userRole = req.currentUser.role.toLowerCase().trim();
    const allowedRoles = roles.map((role) => role.toLowerCase().trim());
    if (allowedRoles.includes(userRole)) {
      return next();
    }
    throw new UnauthorizedError(
      "You are not authorized to perform this operation"
    );
  };
};

// console.log("AUTHORIZATION USER", req.currentUser);
// if (req.currentUser.role.toLowerCase() !== roles[0].toLowerCase()) {
//   throw new UnauthorizedError(
//     "You are not authorized to perform this operation"
//   );
// }
