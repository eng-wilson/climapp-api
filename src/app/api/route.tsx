import { NextResponse } from "next/server";
import cities from "@/data/cities.json";

export async function GET() {
  return NextResponse.json({ data: cities });
}
