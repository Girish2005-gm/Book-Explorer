import express from "express";
import { getBooks, getBookById } from "../controllers/bookController.js";

const router = express.Router();

// GET /api/books
router.get("/", getBooks);

// GET /api/books/:id
router.get("/:id", getBookById);


export default router;
