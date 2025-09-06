import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Boolean, default: true },
  rating: { type: Number, default: 0 },
  detailUrl: { type: String },
  thumbnailUrl: { type: String },
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);
export default Book;
