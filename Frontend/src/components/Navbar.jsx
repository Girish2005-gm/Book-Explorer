// Navbar.jsx
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-blue-600">
          Book Explorer
        </Link>

        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown (empty for now since no extra pages) */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
        </div>
      )}
    </nav>
  );
}
