import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { config } from "../../config/env.js";

export const llm = new ChatGoogleGenerativeAI({
  apiKey: config.GEMINI_API_KEY,
  model: "gemini-1.5-flash",
  temperature: 0.3,
});