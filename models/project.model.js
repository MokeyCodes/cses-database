import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  startDate: Date,
  endDate: Date,
  description: String,
  deploymentLink: String,
  githubLink: String,
});

export default mongoose.model("Project", projectSchema);
