import { PromptTemplate } from "@langchain/core/prompts";
import { llm } from "../llm/llmClient.js";
import { analysisPrompt } from "../prompts/analysisPrompt.js";
import { retrieveDrugInfo } from "../retriever/retriever.js";

export const runAnalysisChain = async ({ drugName, symptoms }) => {
  const context = retrieveDrugInfo(drugName, symptoms);

  const prompt = PromptTemplate.fromTemplate(analysisPrompt);

  const chain = prompt.pipe(llm);

  const response = await chain.invoke({
    context,
    drugName,
    symptoms: symptoms.join(", "),
  });

  return response.content;
};