import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../api";
import BookCard from "../components/BookCard";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");
  const [inStock, setInStock] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError("");
      const params = { page, limit: 12 };
      if (search) params.q = search;
      if (rating) params.rating = rating;
      if (inStock) params.inStock = inStock;
      if (minPrice) params.minPrice = minPrice;
      if (maxPrice) params.maxPrice = maxPrice;

      const res = await axios.get(`${API_URL}/books`, { params });
      setBooks(res.data.data?.books || res.data.books || []);
      const totalCount = res.data.data?.pagination?.total ?? res.data.total ?? 0;
      setTotal(totalCount);
    } catch (e) {
      setError(e?.response?.data?.message || "Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Fetch when filters change
  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line
  }, [page, rating, inStock, minPrice, maxPrice]);

  // 🔥 Debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      setPage(1);
      fetchBooks();
    }, 500);

    return () => clearTimeout(handler);
    // eslint-disable-next-line
  }, [search]);

  const totalPages = Math.ceil(total / 12);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Error banner */}
      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Filters */}
      <Filters
        search={search}
        setSearch={setSearch}
        rating={rating}
        setRating={(val) => {
          setRating(val);
          setPage(1);
        }}
        inStock={inStock}
        setInStock={(val) => {
          setInStock(val);
          setPage(1);
        }}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        onPriceFilter={() => {
          setPage(1);
          fetchBooks();
        }}
      />

      {/* Loading */}
      {loading && (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
        </div>
      )}

      {/* Empty state */}
      {!loading && books.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl shadow border border-gray-100">
          <p className="text-xl font-semibold text-gray-800">No results found</p>
          <p className="text-gray-500 mt-1">
            Try changing filters or clearing the search.
          </p>
        </div>
      )}

      {/* Books Grid */}
      {!loading && books.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      )}
    </div>
  );
}
