import mongoose from "mongoose";

const jobQualificationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
});

const jobLocationSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    jobStatus: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
    jobSetting: {
      type: String,
      enum: ["remote", "on-site"],
    },
    jobType: {
      type: String,
      enum: ["full-time", "contractual", "part-time"],
      default: "full-time",
    },
    jobLocation: jobLocationSchema,
    jobQualifications: jobQualificationSchema,
    postedBy: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    // postedBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", JobSchema);
export default Job;
