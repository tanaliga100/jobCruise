import { StatusCodes } from "http-status-codes";
import { UnauthenticatedError } from "../errors/CustomError.js";

export const errorHandlerMiddleware = async (err, req, res, next) => {
  // error object
  const errorObject = {
    status: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong",
  };
  if (err instanceof UnauthenticatedError) {
    return res.status(errorObject.status).json({
      message: errorObject.msg,
    });
  }
  res.status(errorObject.status).json({
    message: errorObject.msg,
  });

  // catch the custom error here...
  // if (err instanceof NotFoundError) {
  //   console.log("CUSTOM ERROR RUNS...");
  //   return res.status(errorObject.status).json({
  //     msg: errorObject.msg,
  //   });
  // }
};
