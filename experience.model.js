import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  title: { type: String, required: true },
  location: String,
  startDate: { type: Date, required: true },
  endDate: Date,
  description: String,
});

export default mongoose.model("Experience", experienceSchema);
