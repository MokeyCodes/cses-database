import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Experience from "./experience.model.js";
import Project from "./project.model.js";

const MONGO_URI = process.env.MONGO_URI;


async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

async function addSampleData() {
  await Experience.create({
    company: "CSES",
    title: "Developer for Runway Avenue",
    location: "San Diego, CA",
    startDate: new Date("2025-10-22"),
    endDate: null,
    description: "Web Developer for Runway Avenue.",
  });

  await Project.create({
    projectName: "JATS: Job Application Tracking Service",
    startDate: new Date("2025-01-10"),
    description: "Google Chrome Extension that scrapes data (Job Title, Company, Date applied) on the hovered website to Google Sheets with a click of a button.",
    githubLink: "https://github.com/MokeyCodes/JATS",
    deploymentLink: null,
  });
  
  await Project.create({
    projectName: "Minecraft Biome Classifier",
    startDate: new Date("2025-11-08"),
    description: "Used Transfer learning on a pre-trained ResNet-18, froze early layers and trained to recognize 29 different Minecraft biomes with ~80% public and ~84% private leaderboard accuracy.",
    githubLink: "https://github.com/MokeyCodes/minecraft-biome-classifier",
    deploymentLink: null,
  });

  await Project.create({
    projectName: "Market Value Prediction for Soccer Players",
    startDate: new Date("2025-10-01"),
    description: "Built and implemented a linear regression model from scratch that predicts the market value of soccer players using a 2019 dataset of soccer players' stats with corresponding market values.",
    githubLink: "https://github.com/MokeyCodes/Soccer-Market-Value-Linear-Regression",
    deploymentLink: null,
  });

  console.log("✨ Sample documents inserted!");
}

connectDB().then(addSampleData);
