import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../api";
import { FaStar, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

useEffect(() => {
  axios.get(`${API_URL}/books/${id}`).then((res) => setBook(res.data.data));
}, [id]);


  if (!book) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto mt-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition">
        <div className="flex justify-center mb-6">
          <img
            src={book.thumbnailUrl}
            alt={book.title}
            className="w-48 h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-3">
          {book.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-600">Price:</span>
            <span className="text-xl font-bold text-blue-600">
              £{book.price}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-600">Stock:</span>
            {book.stock ? (
              <span className="flex items-center gap-1 text-green-600 font-medium">
                <FaCheckCircle className="w-5 h-5" /> Available
              </span>
            ) : (
              <span className="flex items-center gap-1 text-red-600 font-medium">
                <FaTimesCircle className="w-5 h-5" /> Out of Stock
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-600">Rating:</span>
            <span className="flex items-center gap-1 text-yellow-500">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={`w-5 h-5 ${
                    i < book.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </span>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <span className="px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-700 font-medium">
            {book.category}
          </span>
        </div>

        <p className="text-gray-700 text-center leading-relaxed">
          {book.description}
        </p>
      </div>
    </div>
  );
}
