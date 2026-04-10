import dotenv from "dotenv";

dotenv.config();


export const config={
  PORT:process.env.PORT,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
}