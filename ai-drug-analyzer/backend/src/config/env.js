import dotenv from "dotenv";

dotenv.config();


export const config={
  PORT:process.env.PORT,
  Google_API_KEY: process.env.Google_API_KEY
}