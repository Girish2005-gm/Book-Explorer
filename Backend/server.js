import express from "express";
import cors from "cors";

const app = express();
// Allow specific origin (your Vercel frontend)
app.use(cors({
  origin: "https://book-explorer-qr61-dgrdoge8t-girishs-projects-6c8b3ef6.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Your routes
app.get("/api/books", (req, res) => {
  res.json({ message: "Books API working!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
