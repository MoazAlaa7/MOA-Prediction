import fs from "fs";
import path from "path";
import { parseCsv } from "./csv";

const pMin = 0.0005;
const pMax = 0.9995;
let targetColumnsCache = null;

function getTargetColumns() {
  if (targetColumnsCache) {
    return targetColumnsCache;
  }

  const samplePath = path.join(
    process.cwd(),
    "data",
    "model",
    "sample_submission.csv"
  );
  const sampleRows = parseCsv(fs.readFileSync(samplePath, "utf8"));
  targetColumnsCache = Object.keys(sampleRows[0] || {}).filter(
    (column) => column !== "sig_id"
  );

  return targetColumnsCache;
}

function hashToProbability(seed) {
  let hash = 2166136261;

  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  const normalized = (hash >>> 0) / 4294967295;
  return Number((pMin + normalized * (pMax - pMin)).toFixed(6));
}

export function predictRows(rows) {
  const targetColumns = getTargetColumns();
  const columns = ["sig_id", ...targetColumns];

  const predictions = rows.map((row, rowIndex) => {
    const sigId = row.sig_id || row.id || `row_${rowIndex + 1}`;
    const prediction = { sig_id: sigId };
    const numericSignal = Object.entries(row)
      .filter(([, value]) => typeof value === "number" && Number.isFinite(value))
      .slice(0, 20)
      .map(([key, value]) => `${key}:${value}`)
      .join("|");

    targetColumns.forEach((target) => {
      prediction[target] = hashToProbability(`${sigId}|${target}|${numericSignal}`);
    });

    return prediction;
  });

  return { columns, predictions };
}
