import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          MemeVerse
        </Link>

        {/* Nav Links Centered */}
        <div className="hidden md:flex space-x-6 mx-auto">
          <Link to="/home" className="hover:text-gray-400 transition">
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

        {/* Dark Mode Toggle on the Right */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
          >
            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden flex flex-col bg-gray-800 p-4 mt-2 space-y-4"
        >
          <Link to="/home" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>
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
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
          >
            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
