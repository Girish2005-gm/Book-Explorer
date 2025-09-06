import express from "express";
import cors from "cors";

const app = express();

// ✅ Allow localhost + production + all vercel.app previews
const allowedOrigins = [
  "http://localhost:3000",
  "https://book-explorer-qr61.vercel.app",
  /\.vercel\.app$/ // regex: any vercel.app subdomain
];

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

app.use(express.json());

app.get("/api/books", (req, res) => {
  res.json({ message: "Books API working!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
