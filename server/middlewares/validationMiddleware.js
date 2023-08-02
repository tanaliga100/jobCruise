export const validationMiddleware = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    // checked here...
    if (!error) {
      next();
    } else {
      // error assignment
      const errorDetails = error.details.map((err) => {
        return {
          field: err.context.label,
          message: err.message,
        };
      });

      console.log(errorDetails);
      res.status(422).json({
        error: errorDetails,
      });
    }
  };
};
