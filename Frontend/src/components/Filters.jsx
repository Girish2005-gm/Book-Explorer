import { FaSearch, FaStar } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

export default function Filters({
  search,
  setSearch,
  rating,
  setRating,
  inStock,
  setInStock,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  onPriceFilter,
}) {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-4 justify-center mb-8 bg-white/80 backdrop-blur-md shadow-md rounded-2xl px-6 py-4 border border-gray-200">
      {/* 🔍 Search */}
      <div className="flex items-center bg-gray-100 rounded-lg px-3 w-full md:w-64">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none py-2 w-full text-gray-700"
        />
      </div>

      {/* ⭐ Rating filter */}
      <div className="flex items-center bg-gray-100 px-3 rounded-lg w-full md:w-auto">
        <FaStar className="text-yellow-400 mr-2" />
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="bg-transparent outline-none py-2 w-full"
        >
          <option value="">All Ratings</option>
          <option value="1">⭐ 1+</option>
          <option value="2">⭐ 2+</option>
          <option value="3">⭐ 3+</option>
          <option value="4">⭐ 4+</option>
          <option value="5">⭐ 5</option>
        </select>
      </div>

      {/* 📦 Stock filter */}
      <div className="flex items-center bg-gray-100 px-3 rounded-lg w-full md:w-auto">
        <MdInventory className="text-gray-600 mr-2" />
        <select
          value={inStock}
          onChange={(e) => setInStock(e.target.value)}
          className="bg-transparent outline-none py-2 w-full"
        >
          <option value="">All Stock</option>
          <option value="true">In Stock</option>
          <option value="false">Out of Stock</option>
        </select>
      </div>

      {/* 💰 Price range filter */}
      <div className="flex items-center bg-gray-100 px-3 rounded-lg gap-2 w-full md:w-auto">
        <FaMoneyBillWave className="text-green-600 mr-1" />
        <input
          type="number"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full md:w-20 bg-transparent outline-none py-2 text-gray-700"
        />
        <span>-</span>
        <input
          type="number"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full md:w-20 bg-transparent outline-none py-2 text-gray-700"
        />
        <button
          onClick={onPriceFilter}
          className="ml-2 bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition w-full md:w-auto"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
