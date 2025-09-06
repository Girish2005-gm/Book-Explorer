import express from "express";
import { getBooks, getBookById } from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getBooks);       // GET /api/books
router.get("/:id", getBookById); // GET /api/books/:id

export default router;
