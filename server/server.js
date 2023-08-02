// PACKAGES
const app = express();
import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

// ROUTES AND CONTROLLERS
import { connectDB } from "./config/connectDB.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandler.middleware.js";
import { notFoundMiddleware } from "./middlewares/notFound.middleware.js";
import { validationMiddleware } from "./middlewares/validationMiddleware.js";
import AuthRoute from "./routes/auth.routes.js";
import JobsRoute from "./routes/jobs.routes.js";
import { default as testSCHEMA } from "./validators/schemas.js";

// HEAD MIDDLEWARES
dotenv.config();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ROUTES
app.get("/", (req, res) => {
  res.send("Alive ");
});
app.use(`/api/v1/auth`, AuthRoute);
app.use(`/api/v1/jobs`, JobsRoute);

// simulation express validator
app.post("/api/v1/test", validationMiddleware(testSCHEMA), (req, res) => {
  console.log(req.body);
  res.status(200).json({ msg: "data received", ...req.body });
});

// TAIL MIDDLEWARES
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// SERVER INSTANCE
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log("ALIVE and CONNECTED");
    });
  } catch (error) {
    console.log("SOMETHING WENT WRONG", error.message);
  }
};
start();

// username: username,
// password: password,
// birth_year: birth_year,
// email: email,
