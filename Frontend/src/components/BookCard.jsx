import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function BookCard({ book }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={book.thumbnailUrl}
          alt={book.title}
          className="h-60 w-full object-cover"
        />
        {/* Stock Badge */}
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${
            book.stock
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {book?.stock === true ? "In stock" : book?.stock === false ? "Out of stock" : "Loading..."}

        </span>
      </div>

      {/* Card Body */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {book.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, idx) => (
            <FaStar
              key={idx}
              className={`w-5 h-5 ${
                idx < book.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">({book.rating}/5)</span>
        </div>

        {/* Price + Button */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold text-blue-600">£{book.price}</p>
          <Link
            to={`/book/${book._id}`}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
