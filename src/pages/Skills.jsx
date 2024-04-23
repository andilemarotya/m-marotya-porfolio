import React from 'react';

const Skills = () => {
  const imageFileNames = [
    'JAVA.png','spring.png','node.png','Python.png','JAVASCRIPT.png','CS.png','unity.png',
    'MySQL.png','MongoDB.png','oracle.png', 'GODOT.png', 'C.png', 'C++.png', 'Dart.png',
    'unreal.png', 'git.png', 'github.png', 'GitLab.png', 'API.png',
    // Add more image filenames as needed
  ];

  // Function to render a grid of images
  const renderImageGrid = () => {
    const itemsPerRow = 7; // Number of items to display per row
    const rows = [];

    // Iterate over image filenames and generate image elements
    for (let i = 0; i < imageFileNames.length; i += itemsPerRow) {
      const rowImages = imageFileNames.slice(i, i + itemsPerRow);

      const rowElements = rowImages.map((fileName, index) => {
        const imageUrl = `/images/skills/${fileName}`; // Construct the image URL
        return (
          <div key={index} className="flex justify-center items-center w-1/7 p-2">
            <img src={imageUrl} alt={`Image ${index}`} className="max-w-full h-auto sm:max-w-xs" />
          </div>
        );
      });

      rows.push(
        <div key={i} className="flex flex-wrap justify-center items-center">
          {rowElements}
        </div>
      );
    }

    return rows;
  };

  return (
    <div className='bg-black min-h-40 flex flex-col justify-center items-center text-white text-[Inter]'>
      <hr className='bg-white w-[90%] my-5'/>
      <h1 className='text-gold w-84 flex font-bold text-lg'>Skills</h1>

      {/* Body */}
      <div className='mt-6 w-11/12 sm:w-[75%] ml-4 mb-4'>
        <h1 className='text-gold mb-4'>Set 1:</h1>
        {/* Grid of images here with responsive sizing */}
        {renderImageGrid()}

        <h1 className='text-gold my-4'>Set 2:</h1>
        <p>
          Data Analysis, Team Player, Work under pressure, Problem Solving, Good Communication Skills, Work Extra Hours,
          Independent Part-time Guitarist, Team Leader, Business Owner, CEO at a startup Marotya Studios.
        </p>
      </div>
    </div>
  );
};

export default Skills;
