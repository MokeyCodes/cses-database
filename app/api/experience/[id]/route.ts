"use server";

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Experience from "../../../../models/experience.model.js";
import { connectDB } from "../../../../db.js";


export async function GET(
  req: Request, 
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const { id } = await params;
  
  console.log("Received ID:", id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }

  try {
    const experience = await Experience.findById(id);
    if (!experience) {
      return NextResponse.json({ message: "Experience not found" }, { status: 404 });
    }
    return NextResponse.json(experience);
  } catch (err) {
    return NextResponse.json({ message: "Failed to fetch experience", error: err }, { status: 500 });
  }
}


export async function PUT(
  req: Request, 
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const { id } = await params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }

  try {
    const body = await req.json();
    const updated = await Experience.findByIdAndUpdate(id, body, { new: true });
    if (!updated) {
      return NextResponse.json({ message: "Experience not found" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ message: "Failed to update experience", error: err }, { status: 500 });
  }
}

export async function DELETE(
  req: Request, 
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const { id } = await params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }

  try {
    const deleted = await Experience.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ message: "Experience not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Experience deleted successfully" });
  } catch (err) {
    return NextResponse.json({ message: "Failed to delete experience", error: err }, { status: 500 });
  }
}