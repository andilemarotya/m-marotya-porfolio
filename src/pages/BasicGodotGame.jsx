import React from "react";
import { useNavigate } from "react-router-dom";

export default function BasicGodotGame() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white p-10">
      <h1 className="text-4xl font-bold text-center text-gold mb-8">
        Basic Godot Game
      </h1>

      <div className="max-w-3xl mx-auto bg-[#2B2924] border border-black rounded-2xl p-6 shadow-lg">
        <p className="mb-6 text-lg text-center">
          Welcome to my first <span className="text-gold font-semibold">godot mini</span> game 
          This project showcases my basic godot skills, such as player movement, UI, and AI nodes(enemies).
        </p>

        {/* Example Logo or Image */}
        <img
          src={`${process.env.PUBLIC_URL}/images/Godot_icon.svg`}
          alt="Logo"
          className="w-64 h-auto mx-auto mb-6"
        />

        {/* Placeholder for game description */}
        <p className="mb-6">
          The tasks were to:<br/>
            (1.1) Add a player to the game with all core mechanics (movement and collisions). Movements should be binded to "WASD" keys.<br/>
            (1.2) Add a camera to the game, which will follow the player and you have to be able to rotate the camera to look around the scene.<br/><br/>

            (2.1) Add coins to the scene which will increase a coin count by 1<br/>
            (2.2) Add obstacles that deal -25 damage to the player health<br/>
            (2.3) Add a hud that will display the following player information:<br/>
            (a) Player health. With max health being 100, This can be shown as a progress bar or numbers<br/>
            (b) Coins collected. This must be shown using numbers, with the max being 5 coins.<br/>
            (2.4) Add health coins that will give +25 health to the player<br/><br/>

            (3.1) Create a simple menu with "Start Game" and "Quit Game" buttons.<br/>
            (3.2) When the player health reaches 0, take them back to the menu and disable the "Start Game" button.<br/>
            (3.3) When the player collects 5 coins with health being greater than 75, take them to the menu and disable the "Start Game" button.
 
        </p>

        {/* Example action buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/12X5Ob3kdxp85_tzCLz8yWOOal8ymz8Mh/view?usp=drive_link",
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
