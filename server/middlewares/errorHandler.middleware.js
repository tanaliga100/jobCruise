import { StatusCodes } from "http-status-codes";

export const errorHandlerMiddleware = async (err, req, res, next) => {
  // error object
  const errorObject = {
    status: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong",
  };
  res.status(errorObject.status).json({
    msg: errorObject.msg,
  });

  // catch the custom error here...
  // if (err instanceof NotFoundError) {
  //   console.log("CUSTOM ERROR RUNS...");
  //   return res.status(errorObject.status).json({
  //     msg: errorObject.msg,
  //   });
  // }
};
