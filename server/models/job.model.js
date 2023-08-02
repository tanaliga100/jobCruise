import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["pending", "interview", "declined"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "intern", "part-time"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "Manila, Philippines",
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", JobSchema);
export default Job;
