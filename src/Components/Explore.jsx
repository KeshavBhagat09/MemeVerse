import React, { useState, useEffect } from "react";
import MemeCard from "../Components/MemeCard.jsx";

const Explore = () => {
  const [memes, setMemes] = useState([]);

  // Fetch memes (You can replace this with API call or MongoDB data)
  useEffect(() => {
    const sampleMemes = [
      {
        id: 1,
        title: "Funny Cat",
        description: "When you wake up late for work",
        image: "https://i.imgflip.com/4t0m5.jpg",
      },
      {
        id: 2,
        title: "Office Meme",
        description: "Me explaining my code",
        image: "https://i.imgflip.com/1bij.jpg",
      },
    ];
    setMemes(sampleMemes);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-white mb-4">Explore Memes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
