function createBarJson(labels, values, title) {
  return {
    data: [
      {
        type: "bar",
        orientation: "h",
        y: labels,
        x: values,
        marker: {
          color: labels.map((_, index) => `rgb(0, 0, ${Math.round(40 + index * 8)})`),
        },
      },
    ],
    layout: {
      title,
      yaxis: { autorange: "reversed" },
      autosize: false,
      width: 900,
      height: 600,
      plot_bgcolor: "white",
      paper_bgcolor: "rgb(247, 250, 252)",
    },
  };
}

export function targetSummaryChart(predictions, columns, mode) {
  const summary = columns
    .filter((column) => column !== "sig_id")
    .map((column) => ({
      column,
      value: predictions.reduce((sum, row) => sum + Number(row[column] || 0), 0),
    }))
    .sort((a, b) => b.value - a.value);

  const selected = mode === "lowest" ? summary.slice(-20) : summary.slice(0, 20);
  const title =
    mode === "lowest"
      ? "Observing the Lowest 20 Predicted Targets"
      : "Observing the Top 20 Predicted Targets";

  return createBarJson(
    selected.map((item) => item.column),
    selected.map((item) => Number(item.value.toFixed(4))),
    title
  );
}

export function datasetChart(rows, nameColumn) {
  if (!rows.length) {
    return null;
  }

  if (["cp_type", "cp_time", "cp_dose"].includes(nameColumn)) {
    const counts = rows.reduce((accumulator, row) => {
      const key = String(row[nameColumn] ?? "Unknown");
      accumulator[key] = (accumulator[key] || 0) + 1;
      return accumulator;
    }, {});

    const labels = Object.keys(counts);
    const values = labels.map((label) => Number(((counts[label] * 100) / rows.length).toFixed(2)));

    return {
      data: [
        {
          type: "bar",
          name: nameColumn,
          x: labels,
          y: values,
          text: values.map((value) => `${value}%`),
          textposition: "auto",
        },
      ],
      layout: {
        title: nameColumn,
        xaxis: { title: nameColumn },
        yaxis: { title: "% Treatment" },
        barmode: "stack",
      },
    };
  }

  const prefix = nameColumn === "gene_expression" ? "g-" : "c-";
  const featureColumns = Object.keys(rows[0]).filter((column) => column.startsWith(prefix));

  return {
    data: featureColumns.slice(0, 20).map((column) => ({
      type: "histogram",
      name: column,
      x: rows.map((row) => Number(row[column])).filter(Number.isFinite),
      opacity: 0.75,
    })),
    layout: {
      title:
        nameColumn === "gene_expression"
          ? "Distribution of Gene Features"
          : "Distribution of Cell Features",
      xaxis: { title: "Value" },
      yaxis: { title: "Count" },
      bargap: 0.2,
      bargroupgap: 0.1,
      barmode: "overlay",
    },
  };
}
