export const state = {
  dataset: [],
  datasetDetails: null,
  previewData: null,
  prediction: [],
  predictionColumns: [],
};

export function setPredictionState(nextState) {
  Object.assign(state, nextState);
}
