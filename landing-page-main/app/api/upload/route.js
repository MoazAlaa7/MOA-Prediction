import { NextResponse } from "next/server";
import { parseCsv } from "@/lib/prediction/csv";
import { predictRows } from "@/lib/prediction/engine";
import { setPredictionState } from "@/lib/prediction/store";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }

    const rows = parseCsv(await file.text());
    const { columns, predictions } = predictRows(rows);

    setPredictionState({
      dataset: rows,
      datasetDetails: [
        { Item: "Dataset Name", Value: file.name },
        { Item: "Data Source", Value: "CSV File" },
        { Item: "Total Rows", Value: rows.length },
        { Item: "Total Columns", Value: Object.keys(rows[0] || {}).length },
        {
          Item: "Total Data Points",
          Value: rows.length * Object.keys(rows[0] || {}).length,
        },
      ],
      previewData: {
        data: predictions,
        columns,
      },
      prediction: predictions,
      predictionColumns: columns,
    });

    return NextResponse.json({
      file_ready: true,
      engine: "javascript-baseline",
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "File processing failed." },
      { status: 400 }
    );
  }
}
