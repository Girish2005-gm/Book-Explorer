import express from "express";
import cors from "cors";

const app = express();

// ✅ Allowed origins (local + production + preview)
const allowedOrigins = [
  "http://localhost:3000", // dev
  "https://book-explorer-qr61.vercel.app", // production (final domain)
  /\.vercel\.app$/ // regex → allow any vercel.app preview domain
];

// ✅ CORS setup
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
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// Example API
app.get("/api/books", (req, res) => {
  res.json({ message: "Books API working!" });
});

// ✅ Use Render's PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
