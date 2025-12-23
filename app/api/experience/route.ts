"use server";

import { NextResponse } from "next/server";
import Experience from "../../../models/experience.model";
import { connectDB } from "../../../db.js";

export async function GET() {
  await connectDB();

  try {
    const experiences = await Experience.find().sort({ startDate: -1 });
    return NextResponse.json(experiences);
  } catch (err) {
    return NextResponse.json({ message: "Failed to fetch experiences", error: err }, { status: 500 });
  }
}

export async function POST(req: Request) {
  await connectDB();

  try {
    const body = await req.json();
    const experience = await Experience.create(body);
    return NextResponse.json(experience, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Failed to create experience", error: err }, { status: 500 });
  }
}