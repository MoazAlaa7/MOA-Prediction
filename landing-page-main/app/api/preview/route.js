import { NextResponse } from "next/server";
import { state } from "@/lib/prediction/store";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!state.previewData) {
    return NextResponse.json({ message: "No preview data available" });
  }

  return NextResponse.json(state.previewData);
}
