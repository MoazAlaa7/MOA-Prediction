import { state } from "@/lib/prediction/store";
import { toCsv } from "@/lib/prediction/csv";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!state.prediction.length || !state.predictionColumns.length) {
    return new Response("", {
      status: 404,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  const csv = toCsv(state.prediction, state.predictionColumns);

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=prediction.csv",
    },
  });
}
