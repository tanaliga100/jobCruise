import { StatusCodes } from "http-status-codes";

export const validateRequestBody = (schema) => {
  return (req, res, next) => {
    // FOR REQUEST BODY
    const { error } = schema.validate(req.body, { abortEarly: false });

    // checked here...
    if (!error) {
      next();
    } else {
      // error assignment
      const errorDetails = error.details.map((err) => {
        const formattedMessage = err.message.replace(/"/g, "");
        return {
          field: err.context.label,
          message:
            formattedMessage.charAt(0).toUpperCase() +
            formattedMessage.slice(1),
        };
      });
      console.log(errorDetails);
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: errorDetails,
      });
    }
  };
};

export const validateIdParam = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.params, { abortEarly: false });
    console.log("idparams", error);

    // conditions
    if (!error) {
      next();
    } else {
      // errror assignment
      const errorDetails = error.details.map((err) => {
        const formattedMessage = err.message.replace(/"/g, "");
        return {
          message: formattedMessage,
        };
      });
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: errorDetails,
      });
    }
  };
};
