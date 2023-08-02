// PACKAGES
const app = express();
import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

// ROUTES AND CONTROLLERS
import { connectDB } from "./config/connectDB.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandler.middleware.js";
import { notFoundMiddleware } from "./middlewares/notFound.middleware.js";
import AuthRoute from "./routes/auth.routes.js";
import JobsRoute from "./routes/jobs.routes.js";

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
