import mongoose from "mongoose";

export const connectDB = async (connectionString) => {
  return mongoose.connect(connectionString);
};
