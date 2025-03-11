import React, { useState } from "react";
import { FaHeart } from "react-icons/fa"; // Import heart icon

const MemeCard = ({ meme }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition transform duration-200">
      <img src={meme.image} alt={meme.title} className="w-full h-60 object-cover" />
      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{meme.title}</h3>
          <p className="text-gray-400 text-sm">{meme.description}</p>
        </div>
        {/* Like Button */}
        <button
          onClick={() => setLiked(!liked)}
          className="text-gray-400 hover:text-red-500 transition"
        >
          <FaHeart className={`text-2xl ${liked ? "text-red-500" : "text-gray-400"}`} />
        </button>
      </div>
    </div>
  );
};

export default MemeCard;
