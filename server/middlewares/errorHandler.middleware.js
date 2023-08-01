export const errorHandlerMiddleware = async (err, req, res, next) => {
  const errorObject = {
    status: err.status || 500,
    msg: err.message || "Something went wrong",
  };

  res.status(errorObject.status).json({
    msg: errorObject.msg,
  });
};
