import { useState } from "react";
import { FaHeart } from "react-icons/fa"; // Import heart icon
import meme from "../assets/meme.jpeg"; // Import a sample meme image

const memes = [
  { id: 1, title: "Meme 1", image: meme },
  { id: 2, title: "Meme 2", image: meme },
  { id: 3, title: "Meme 3", image: meme },
  { id: 4, title: "Meme 4", image: meme },
  { id: 5, title: "Meme 5", image: meme },
  { id: 6, title: "Meme 6", image: meme },
  { id: 7, title: "Meme 7", image: meme },
  { id: 8, title: "Meme 8", image: meme },
];

const Home = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-white mb-4">🔥 Latest Memes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </div>
  );
};

// Meme Card Component
const MemeCard = ({ meme }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition transform duration-200">
      <img src={meme.image} alt={meme.title} className="w-full h-60 object-cover" />
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold">{meme.title}</h3>
        {/* Like Button */}
        <button onClick={() => setLiked(!liked)} className="text-gray-400 hover:text-red-500 transition">
          <FaHeart className={`text-2xl ${liked ? "text-red-500" : "text-gray-400"}`} />
        </button>
      </div>
    </div>
  );
};

export default Home;
