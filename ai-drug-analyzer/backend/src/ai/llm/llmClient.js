import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { config } from "../../config/env.js";

export const llm = new ChatGoogleGenerativeAI({
  apiKey: config.Google_API_KEY,
  model: "gemini-2.5-flash",
  temperature: 0.3,
});