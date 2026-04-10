import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyzeRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app=express();

app.use(cors());
app.use(express.json())

app.use("/api/analyze",analyzeRoutes);

app.use(errorHandler);

export default app;