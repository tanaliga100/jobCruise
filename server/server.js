// PACKAGES
const app = express();
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

// ROUTES AND CONTROLLERS
import { connectDB } from "./config/connectDB.js";
import { authenticationMiddleware } from "./middlewares/authentication.middleware.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandler.middleware.js";
import { notFoundMiddleware } from "./middlewares/notFound.middleware.js";
import AuthRoute from "./routes/auth.routes.js";
import JobsRoute from "./routes/jobs.routes.js";
import UserRoute from "./routes/user.routes.js";

// HEAD MIDDLEWARES
dotenv.config();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cookieParser());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Alive ");
});
app.use(`/api/v1/auth`, AuthRoute);
app.use(`/api/v1/users`, authenticationMiddleware, UserRoute);
app.use(`/api/v1/jobs`, authenticationMiddleware, JobsRoute);

// // simulation express validator
// app.post("/api/v1/test", validationMiddleware(testSCHEMA), (req, res) => {
//   console.log(req.body);
//   res.status(200).json({ msg: "data received", ...req.body });
// });

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

// [
//   {
//     company: "Innovative Solutions Inc.",
//     position: "Data Scientist",
//     salary: 90000,
//     jobStatus: "pending",
//     jobType: "full-time",
//     jobLocation: {
//       address: "567 Pine Avenue",
//       city: "Chicago",
//       country: "USA",
//     },
//     jobQualifications: {
//       degree: "Master's Degree in Data Science",
//       experience: 7,
//       skills: ["Python", "Machine Learning", "Data Analysis"],
//     },
//   },
//   {
//     company: "TechCorp",
//     position: "Software Engineer",
//     salary: 80000,
//     jobStatus: "interview",
//     jobType: "full-time",
//     jobLocation: {
//       address: "123 Oak Street",
//       city: "San Francisco",
//       country: "USA",
//     },
//     jobQualifications: {
//       degree: "Bachelor's Degree in Computer Science",
//       experience: 5,
//       skills: ["Java", "Spring Boot", "SQL"],
//     },
//   },
//   {
//     company: "Globex Corporation",
//     position: "Marketing Manager",
//     salary: 75000,
//     jobStatus: "pending",
//     jobType: "full-time",
//     jobLocation: {
//       address: "789 Maple Avenue",
//       city: "New York",
//       country: "USA",
//     },
//     jobQualifications: {
//       degree: "Bachelor's Degree in Marketing",
//       experience: 4,
//       skills: ["Digital Marketing", "SEO", "Social Media"],
//     },
//   },
//   {
//     company: "TechSolutions",
//     position: "Frontend Developer",
//     salary: 70000,
//     jobStatus: "pending",
//     jobType: "full-time",
//     jobLocation: {
//       address: "456 Elm Street",
//       city: "Los Angeles",
//       country: "USA",
//     },
//     jobQualifications: {
//       degree: "Bachelor's Degree in Computer Science",
//       experience: 3,
//       skills: ["JavaScript", "React", "HTML", "CSS"],
//     },
//   },
//   {
//     company: "GlobalTech",
//     position: "Network Administrator",
//     salary: 85000,
//     jobStatus: "declined",
//     jobType: "full-time",
//     jobLocation: {
//       address: "321 Birch Road",
//       city: "Seattle",
//       country: "USA",
//     },
//     jobQualifications: {
//       degree: "Bachelor's Degree in Computer Science",
//       experience: 6,
//       skills: ["Network Security", "Cisco", "Firewalls"],
//     },
//   },
//   {
//     company: "Data Analytics Solutions",
//     position: "Data Analyst",
//     salary: 65000,
//     jobStatus: "pending",
//     jobType: "full-time",
//     jobLocation: {
//       address: "987 Willow Lane",
//       city: "Boston",
//       country: "USA",
//     },
//     jobQualifications: {
//       degree: "Bachelor's Degree in Statistics",
//       experience: 2,
//       skills: ["Data Analysis", "SQL", "Excel"],
//     },
//   },
//   {
//     company: "Design Innovations",
//     position: "UX/UI Designer",
//     salary: 75000,
//     jobStatus: "interview",
//     jobType: "full-time",
//     jobLocation: {
//       address: "654 Cedar Street",
//       city: "Austin",
//       country: "USA",
//     },
//     jobQualifications: {
//       degree: "Bachelor's Degree in Design",
//       experience: 5,
//       skills: ["User Research", "Adobe XD", "Wireframing"],
//     },
//   },
//   {
//     company: "HealthTech Solutions",
//     position: "Medical Doctor",
//     salary: 120000,
//     jobStatus: "pending",
//     jobType: "full-time",
//     jobLocation: {
//       address: "1234 Oak Avenue",
//       city: "Dallas",
//       country: "USA",
//     },
//     jobQualifications: {
//       degree: "Doctor of Medicine",
//       experience: 8,
//       skills: ["Medical Diagnosis", "Patient Care"],
//     },
//   },
//   {
//     company: "Financial Services Ltd.",
//     position: "Financial Analyst",
//     salary: 70000,
//     jobStatus: "interview",
//     jobType: "full-time",
//     jobLocation: {
//       address: "876 Elm Lane",
//       city: "Houston",
//       country: "USA",
//     },
//     jobQualifications: {
//       degree: "Bachelor's Degree in Finance",
//       experience: 4,
//       skills: ["Financial Modeling", "Budgeting", "Excel"],
//     },
//   },
//   {
//     company: "TechStartups",
//     position: "Business Development Manager",
//     salary: 90000,
//     jobStatus: "pending",
//     jobType: "full-time",
//     jobLocation: {
//       address: "543 Birch Avenue",
//       city: "San Diego",
//       country: "USA",
//     },
//     jobQualifications: {
//       degree: "Master's Degree in Business Administration",
//       experience: 6,
//       skills: ["Sales", "Negotiation", "Market Research"],
//     },
//   },
// ];
