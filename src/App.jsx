import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Explore from "./Components/Explore"; // Ensure the correct path

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="text-white">Welcome to MemeVerse</h1>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/upload" element={<h1 className="text-white">Upload Page</h1>} />
        <Route path="/profile" element={<h1 className="text-white">Profile Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
