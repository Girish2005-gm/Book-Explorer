import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";


dotenv.config();
const app = express();

// ✅ Connect DB
connectDB();

// ✅ Allowed Origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://book-explorer-qr61.vercel.app",
  /\.vercel\.app$/, // all vercel.app subdomains
];

// ✅ CORS Middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.some((o) => {
        if (o instanceof RegExp) return o.test(origin);
        return o === origin;
      })) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Body parser
app.use(express.json());

// ✅ Routes
app.use("/api/books", bookRoutes);

// ✅ Health check
app.get("/", (req, res) => {
  res.json({ message: "📚 Book Explorer API is running!" });
});

// ✅ Error Middleware
app.use(errorHandler);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
