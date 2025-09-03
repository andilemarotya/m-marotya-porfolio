import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react"; // install lucide-react if not already

export default function BananaSolver() {
  const navigate = useNavigate();

  // Put all slideshow images here
  const images = [
    `${process.env.PUBLIC_URL}/images/BananaGame/BananaFrame.png`,
    `${process.env.PUBLIC_URL}/images/BananaGame/BananaFrame2.png`,
    `${process.env.PUBLIC_URL}/images/BananaGame/BananaFrame3.png`,
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
      <h1 className="text-4xl font-bold text-center text-gold mb-8"> BANANA SOLVER </h1>

      <div className="max-w-3xl mx-auto bg-[#2B2924] border border-black rounded-2xl p-6 shadow-lg">
        <p className="mb-6 text-lg text-center">
          Welcome to the <span className="text-gold font-semibold">Banana Solver</span> prototype!
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
        <p className="mb-6 ">
            The Banana Solver is an educational 2D mobile game developed in Godot.<br/>
            The player controls a character to collect bananas that fall from the sky, each with a math equation.<br/>
            Correct answers increase score, while incorrect answers reduce score.
        </p>
        <br/>
        <p className="mb-6 text-center">
          Developed using Godot 4.4.1 and GdScript
        </p><br/><br/>

        {/* Installation Guide */}
        <p>
            <h1 className="font-bold text-gold">Installation Guide: </h1><br></br>
            <p className="ml-6">•	Download the APK file “Banana Solver.apk”.</p>
            <h2 className="font-semibold ml-[10%] text-gold">Which APK to install?</h2>
            <p className="ml-[12%]">
                o	Most modern Android devices (new Samsung, Huawei, etc.) → arm64-v8a (64-bit)<br/> 
                <a href="https://drive.google.com/file/d/1fhYhZsDm8UiterDV5fHxq6-XS6tAgWi3/view?usp=drive_link" target="_blank" rel="noopener noreferrer " className="underline font-bold text-blue-500"> 
                    Download arm64-v8a (64-bit) apk
                </a>
            </p><br/>

            <p className="ml-[12%]">
                o	Some budget or mid-range phones (older phones/low cost ) → armeabi-v7a (32-bit)<br/>
                <a href="https://drive.google.com/file/d/1ycZ7MbqJbj_83jwYzi55k6G6lipOC2bt/view?usp=drive_link" target="_blank" rel="noopener noreferrer " className="underline font-bold text-blue-500"> 
                    Download armeabi-v7a (32-bit) apk
                </a>
            </p><br/>

            <p className="ml-[12%]">
                o	If you're not sure which CPU architecture your phone has: <br/>
                <a href="https://drive.google.com/file/d/1jMx5nuaEYRF0bfA6aDlb6N2vSEFmydYM/view?usp=drive_link" target="_blank" rel="noopener noreferrer " className="underline font-bold text-blue-500"> 
                    Download APK
                </a>
            </p><br/>
            
            <h2 className="font-semibold ml-[10%] text-gold">Note:</h2>
            <p className="ml-[10%]">
                If your device is new but the 64-bit APK doesn’t install, try the 32-bit APK (armeabi-v7a).{/*Link*/ }
                Otherwise, Install the bundled apk file (consists of both, has larger size).

            </p><br/>

            <p className="ml-6">•	Enable "Install Unknown Apps" in settings.</p><br/>
            <p className="ml-6">•	Tap the APK to install..</p><br/>
            <p className="ml-6">•	Launch it from your apps.</p>

        </p><br/>
        <a href="https://docs.google.com/document/d/1Gus5vyaQQOgFmodUAF-Wtu64wim-H3kL/edit?usp=drive_link&ouid=107778151672265960682&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer " className="underline font-bold text-blue-500"> 
            Documentation (prototype)
        </a><br/>
        


        {/* Action buttons */}
        <div className="flex justify-center gap-4">

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
