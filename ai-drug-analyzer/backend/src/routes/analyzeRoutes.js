import express from "express";

import {analyzeDrug} from "../controllers/analyzeController.js"

const router=express.Router();

router.post("/",analyzeDrug)

export default router;