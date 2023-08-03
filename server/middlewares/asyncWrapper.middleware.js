export const asyncWrapperMiddleware = (cb) => {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (error) {
      // console.log("ASYNC ERROR", error);
      next(error);
    }
  };
};
