import Book from "../models/Book.js";

const escapeRegex = (str = "") => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const getBooks = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 12,
      q,
      rating,
      inStock,
      minPrice,
      maxPrice,
    } = req.query;

    const filter = {};

    if (q && q.trim() !== "") {
      filter.title = { $regex: escapeRegex(q.trim()), $options: "i" };
    }

    if (rating) filter.rating = { $gte: Number(rating) };
    if (inStock === "true") filter.stock = true;
    if (inStock === "false") filter.stock = false;

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const skip = (Number(page) - 1) * Number(limit);

    const [books, total] = await Promise.all([
      Book.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit)),
      Book.countDocuments(filter),
    ]);

    const normalizedBooks = books.map((book) => ({
      ...book.toObject(),
      stock: !!book.stock && book.stock !== "false",
    }));

    return res.json({
      success: true,
      message: "Books fetched successfully",
      data: {
        books: normalizedBooks,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total,
          totalPages: Math.ceil(total / Number(limit)),
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

export const getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    const normalizedBook = {
      ...book.toObject(),
      stock: !!book.stock && book.stock !== "false",
    };

    return res.json({
      success: true,
      message: "Book fetched successfully",
      data: normalizedBook,
    });
  } catch (err) {
    next(err);
  }
};
