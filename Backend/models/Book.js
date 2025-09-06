import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    price: { type: Number, required: true, index: true },
    stock: { type: Boolean, required: true, index: true },
    rating: { type: Number, required: true, index: true },
    category: { type: String },
    detailUrl: { type: String },
    thumbnailUrl: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);


BookSchema.index({ rating: 1, price: 1, stock: 1 });

const Book = mongoose.model("Book", BookSchema);

export default Book;
