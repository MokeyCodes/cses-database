"use server";

import { NextResponse } from "next/server";
import Project from "../../../models/project.model";
import { connectDB } from "../../../db.js";

export async function GET() {
  await connectDB();

  try {
    const projects = await Project.find().sort({ startDate: -1 });
    return NextResponse.json(projects);
  } catch (err) {
    return NextResponse.json({ message: "Failed to fetch projects", error: err }, { status: 500 });
  }
}

export async function POST(req: Request) {
  await connectDB();

  try {
    const body = await req.json();
    const project = await Project.create(body);
    return NextResponse.json(project, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Failed to create project", error: err }, { status: 500 });
  }
}
