import { NextResponse } from "next/server";
import { targetSummaryChart } from "@/lib/prediction/charts";
import { state } from "@/lib/prediction/store";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    json: JSON.stringify(
      targetSummaryChart(state.prediction, state.predictionColumns, "top")
    ),
  });
}
