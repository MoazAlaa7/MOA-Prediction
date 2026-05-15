import Papa from "papaparse";

export function parseCsv(text) {
  const result = Papa.parse(text, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
  });

  if (result.errors.length > 0) {
    const [error] = result.errors;
    throw new Error(error.message || "Unable to parse CSV file.");
  }

  return result.data;
}

export function toCsv(rows, columns) {
  return Papa.unparse(rows, { columns });
}
