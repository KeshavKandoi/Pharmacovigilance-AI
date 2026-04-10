import { runAnalysisChain } from "../ai/chains/analysisChain.js";

export const analyzeDrugData = async (drugName, symptoms) => {
  return await runAnalysisChain({ drugName, symptoms });
};