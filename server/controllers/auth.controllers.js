export const REGISTER = async (req, res, next) => {
  try {
    return res.status(200).json({
      msg: "REGISTER CONTROLLER",
    });
  } catch (error) {
    res.status(400).json({
      msg: "SOMETHING WENT WRONG",
    });
  }
};

export const LOGIN = async (req, res, next) => {
  try {
    res.status(200).json({
      msg: "LOGIN CONTROLLER",
    });
  } catch (error) {
    res.status(400).json({
      msg: "SOMETHING WENT WRONG",
    });
  }
};
export const LOGOUT = async (req, res, next) => {
  try {
    res.status(200).json({
      msg: "LOGOUT CONTROLLER",
    });
  } catch (error) {
    res.status(400).json({
      msg: "SOMETHING WENT WRONG",
    });
  }
};
