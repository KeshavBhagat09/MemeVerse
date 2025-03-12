import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"; // Ensure the correct path
import Explore from "./Components/Explore"; // Ensure the correct path

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Default Route - Redirects to Home */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/upload" element={<h1 className="text-white">Upload Page</h1>} />
        <Route path="/profile" element={<h1 className="text-white">Profile Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
