// MODULES
// PACKAGES
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { errorHandlerMiddleware } from "./middlewares/errorHandler.middleware.js";
import { notFoundMiddleware } from "./middlewares/notFound.middleware.js";
import AuthRoute from "./routes/auth.routes.js";
import JobsRoute from "./routes/jobs.routes.js";

dotenv.config();
const app = express();
// TOP MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));

// ROUTES
app.get("/", (req, res) => {
  res.send("Alive ");
});
app.use(`/api/v1/auth`, AuthRoute);
app.use(`/api/v1/jobs`, JobsRoute);

// BOTTOM MIDDLEWARES
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// SERVER INSTANCE
const start = async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log("SERVER ALIVE");
    });
  } catch (error) {
    console.log("SOMETHING WENT WRONG", error.message);
  }
};
start();
