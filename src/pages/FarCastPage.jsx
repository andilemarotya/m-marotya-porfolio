import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react"; // install lucide-react if not already

export default function FarCastPage() {
  const navigate = useNavigate();

  // Put all slideshow images here
  const images = [
    `${process.env.PUBLIC_URL}/images/FarcastLogo.png`,
    `${process.env.PUBLIC_URL}/images/farcast/Assembly Area.png`,
    `${process.env.PUBLIC_URL}/images/farcast/CompassFix0.png`,
    `${process.env.PUBLIC_URL}/images/farcast/CompassFix1.png`,
    `${process.env.PUBLIC_URL}/images/farcast/InClass.png`,
    `${process.env.PUBLIC_URL}/images/farcast/Map.png`,
    `${process.env.PUBLIC_URL}/images/farcast/Menu.png`,
    `${process.env.PUBLIC_URL}/images/farcast/PopUpScreen.png`,
    `${process.env.PUBLIC_URL}/images/farcast/PopUpScreen1.png`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Auto-play every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white p-10">
      <img
        src={`${process.env.PUBLIC_URL}/images/FarcastLogo.png`}
        alt="FarCast Logo"
        className="w-80 h-auto mx-auto mb-6"
      />

      <div className="max-w-3xl mx-auto bg-[#2B2924] border border-black rounded-2xl p-6 shadow-lg">
        <p className="mb-6 text-lg text-center">
          Welcome to the <span className="text-gold font-semibold">FarCast</span> page!
        </p>

        {/* Slideshow */}
        <div
          className={`relative flex items-center justify-center mb-6 transition-all duration-500 ${
            fullscreen ? "fixed inset-0 bg-black z-50" : ""
          }`}
        >
          {/* Prev button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 bg-black/50 text-white p-2 rounded-full hover:bg-black"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt="FarCast"
            className={`rounded-lg transition-all duration-700 ${
              fullscreen ? "w-[90%] h-[90%] object-contain" : "w-64 h-auto mx-auto"
            }`}
          />

          {/* Next button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black"
          >
            <ChevronRight size={24} />
          </button>

          {/* Fullscreen toggle button */}
          <button
            onClick={() => setFullscreen(!fullscreen)}
            className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black"
          >
            {fullscreen ? <Minimize2 size={22} /> : <Maximize2 size={22} />}
          </button>
        </div>

        {/* Description */}
        <p className="mb-6 text-center">
          FarCast is a game-based course, that focuses on primary school kids that are under the CAPS syllabus from grade 4 to grade 7.
          The game initially had math and Social Sciences related games.
        </p>

        {/* Action buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1t5ypOO8YRMIEGCV0oLmRdoHtV7mMs1RM/view?usp=drive_link",
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
