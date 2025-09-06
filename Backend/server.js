import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();
connectDB();

const app = express();

// ✅ Enable CORS
app.use(cors({
  origin: "*", // or restrict to your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
