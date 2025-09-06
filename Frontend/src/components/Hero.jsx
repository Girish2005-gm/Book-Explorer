// Hero.jsx
export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 px-6 bg-gradient-to-r from-blue-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Discover Your Next{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Favorite Book
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore thousands of books, filter by rating, price, and stock.  
          Build your reading list with ease.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">1000+</h2>
            <p className="text-gray-600 text-sm sm:text-base">Books</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600">4.2 ⭐</h2>
            <p className="text-gray-600 text-sm sm:text-base">Avg. Rating</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">750+</h2>
            <p className="text-gray-600 text-sm sm:text-base">In Stock</p>
          </div>
        </div>
      </div>
    </section>
  );
}
