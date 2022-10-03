import express from "express";
import morgan from "morgan";
import cors from 'cors';

const app = express();

// Import routes
import requestRoutes from "./routes/requests.routes.js";
import commodityRoutes from "./routes/commodities.routes.js";

// Middlewares
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/requests", requestRoutes);
app.use("/api/commodities", commodityRoutes);

export default app;