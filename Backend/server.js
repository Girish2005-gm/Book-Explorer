import express from "express";
import cors from "cors";

const app = express();

// ✅ Allowed origins list
const allowedOrigins = [
  "http://localhost:3000", // local dev
  "https://book-explorer-qr61.vercel.app", // final production
  "https://book-explorer-qr61-dgrdoge8t-girishs-projects-6c8b3ef6.vercel.app" // preview deploy
];

// ✅ CORS setup
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Example route
app.get("/api/books", (req, res) => {
  res.json({ message: "Books API working!" });
});

// ✅ Use Render's PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
