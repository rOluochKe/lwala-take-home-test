import { Router } from "express";
import {
  createCommodity,
  getCommodities,
} from "../controllers/commodities.routes.js";

const router = Router();

// Routes
router.post("/", createCommodity);
router.get("/", getCommodities);

export default router;