import React from "react";
import { useNavigate } from "react-router-dom";

export default function FarCastPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white p-10">
      <h1 className="text-4xl font-bold text-center text-gold mb-8">
        FarCast Game
      </h1>

      <div className="max-w-3xl mx-auto bg-[#2B2924] border border-black rounded-2xl p-6 shadow-lg">
        <p className="mb-6 text-lg text-center">
          Welcome to the <span className="text-gold font-semibold">FarCast</span> page!  
          This is where you can showcase gameplay, screenshots, or a demo of the game.
        </p>

        {/* Example Logo or Image */}
        <img
          src={`${process.env.PUBLIC_URL}/images/FarcastLogo.png`}
          alt="FarCast Logo"
          className="w-64 h-auto mx-auto mb-6"
        />

        {/* Placeholder for game description */}
        <p className="mb-6 text-center">
          FarCast is a futuristic strategy game where players must outsmart their
          opponents using tactical abilities and sharp reflexes. 
        </p>

        {/* Example action buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1N4g49_KRU3-dqJV1XqPfcDj-ZhbTQ8yx/view?usp=drive_link",
                "_blank"
              )
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
          >
            Play / Download
          </button>

          <button
            onClick={() => navigate("/")}
            className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
