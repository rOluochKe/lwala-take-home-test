import { Router } from "express";
import {
  getRequests,
  createRequest,
} from "../controllers/requests.routes.js";

const router = Router();

// Routes
router.post("/", createRequest);
router.get("/", getRequests);

export default router;