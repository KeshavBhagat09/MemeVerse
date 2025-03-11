import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          MemeVerse
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link to="/explore" className="hover:text-gray-400 transition">
            Explore
          </Link>
          <Link to="/upload" className="hover:text-gray-400 transition">
            Upload
          </Link>
          <Link to="/profile" className="hover:text-gray-400 transition">
            Profile
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden flex flex-col bg-gray-800 p-4 mt-2 space-y-4"
        >
          <Link to="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/explore" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Explore
          </Link>
          <Link to="/upload" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Upload
          </Link>
          <Link to="/profile" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
            Profile
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;