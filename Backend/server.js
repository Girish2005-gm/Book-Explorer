// // backend/server.js
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const MONGO_URI = "mongodb://127.0.0.1:27017/book_explorer";

// // Schema
// const bookSchema = new mongoose.Schema({
//   title: String,
//   price: Number,
//   stock: Boolean,
//   rating: Number,
//   detailUrl: String,
//   thumbnailUrl: String,
// });
// const Book = mongoose.model("Book", bookSchema);

// mongoose.connect(MONGO_URI).then(() => {
//   console.log("📦 MongoDB connected");
// });

// // -------------------- ROUTES --------------------

// // GET /api/books (pagination + filters + search)
// app.get("/api/books", async (req, res) => {
//   try {
//     const { page = 1, limit = 12, q, rating, inStock, minPrice, maxPrice } = req.query;
//     let filter = {};

//     if (q) filter.title = { $regex: q, $options: "i" };
//     if (rating) filter.rating = Number(rating);
//     if (inStock) filter.stock = inStock === "true";
//     if (minPrice || maxPrice) {
//       filter.price = {};
//       if (minPrice) filter.price.$gte = Number(minPrice);
//       if (maxPrice) filter.price.$lte = Number(maxPrice);
//     }

//     const books = await Book.find(filter)
//       .skip((page - 1) * limit)
//       .limit(Number(limit));

//     const total = await Book.countDocuments(filter);

//     res.json({ total, page: Number(page), books });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // GET /api/books/:id (single book details)
// app.get("/api/books/:id", async (req, res) => {
//   try {
//     const book = await Book.findById(req.params.id);
//     if (!book) return res.status(404).json({ message: "Book not found" });
//     res.json(book);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`🚀 Backend running at http://localhost:${PORT}`));

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();
connectDB();

const app = express();

// ✅ Enable CORS (before routes)
app.use(cors({
  origin: "http://localhost:5173", // your React dev server
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


