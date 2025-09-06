// scraper/index.js
import axios from "axios";
import * as cheerio from "cheerio";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

// Schema
const bookSchema = new mongoose.Schema({
  title: String,
  price: Number,
  stock: Boolean,
  rating: Number,
  detailUrl: String,
  thumbnailUrl: String,
});
const Book = mongoose.model("Book", bookSchema);

const BASE_URL = "https://books.toscrape.com/catalogue/page-";

async function scrapeBooks() {
  await mongoose.connect(MONGO_URI);
  await Book.deleteMany({}); // clear old data

  let allBooks = [];

  for (let page = 1; page <= 50; page++) {
    try {
      const { data } = await axios.get(`${BASE_URL}${page}.html`);
      const $ = cheerio.load(data);

      $(".product_pod").each((_, el) => {
        const title = $(el).find("h3 a").attr("title");
        const price = parseFloat($(el).find(".price_color").text().replace("£", ""));
        const stock = $(el).find(".availability").text().includes("In stock");
        const ratingText = $(el).find("p.star-rating").attr("class").split(" ")[1];
        const ratingMap = { One: 1, Two: 2, Three: 3, Four: 4, Five: 5 };
        const rating = ratingMap[ratingText] || 0;
        const detailUrl = "https://books.toscrape.com/catalogue/" + $(el).find("h3 a").attr("href");
        const thumbnailUrl = "https://books.toscrape.com/" + $(el).find("img").attr("src").replace("../", "");

        allBooks.push({ title, price, stock, rating, detailUrl, thumbnailUrl });
      });

      console.log(`Page ${page} scraped`);
    } catch (err) {
      console.error(`Error scraping page ${page}`, err.message);
    }
  }

  // Insert after scraping all pages
  await Book.insertMany(allBooks);
  console.log(`Inserted ${allBooks.length} books into DB`);

  await mongoose.disconnect();
}

scrapeBooks();
