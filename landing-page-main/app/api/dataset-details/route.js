import { NextResponse } from "next/server";
import { state } from "@/lib/prediction/store";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!state.datasetDetails) {
    return NextResponse.json({ message: "No dataset details available" });
  }

  return NextResponse.json(state.datasetDetails);
}
