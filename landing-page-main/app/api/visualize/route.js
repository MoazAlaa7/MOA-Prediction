import { NextResponse } from "next/server";
import { datasetChart } from "@/lib/prediction/charts";
import { state } from "@/lib/prediction/store";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const chart = datasetChart(state.dataset, searchParams.get("name_column"));

  if (!chart) {
    return NextResponse.json({ error: "Column not found" }, { status: 404 });
  }

  return NextResponse.json({ json: JSON.stringify(chart) });
}
