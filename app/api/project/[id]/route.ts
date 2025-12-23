"use server";
import { NextResponse } from "next/server";
import Project from "../../../../models/project.model";
import { connectDB } from "../../../../db.js";

export async function GET(
  req: Request, 
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const { id } = await params;
  
  try {
    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json({ message: "Failed to fetch project", error: err }, { status: 500 });
  }
}

export async function PUT(
  req: Request, 
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const { id } = await params;
  
  try {
    const body = await req.json();
    const updated = await Project.findByIdAndUpdate(id, body, { new: true });
    if (!updated) {
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ message: "Failed to update project", error: err }, { status: 500 });
  }
}

export async function DELETE(
  req: Request, 
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const { id } = await params;
  
  try {
    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (err) {
    return NextResponse.json({ message: "Failed to delete project", error: err }, { status: 500 });
  }
}