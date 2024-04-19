import React from 'react';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  return (
    <div className='bg-black min-h-40 flex flex-col justify-center items-center text-white text-[Inter]'>
      <hr className='bg-white w-[90%] my-5'/>
      <h1 className='text-gold  w-[84%] flex'><WorkIcon /> Experience</h1>

      {/*Body*/}
      <div className='justify-start items-start w-[80%] my-4'>
        <h1 className='font-bold'>Company: TechSprung</h1>
        <span>(July 2023 - March 2024)</span>
        <p>Fullstack Software Engineer / Game programmer
          I was working on an Educational game, game-based course. 
          The game is called Farcast.
        </p>

        <div className='mt-8 w-[75%] ml-6'>
          <h3>The Tech stack being used / I worked with is -:</h3>
          <ul className='ml-10'>
            <li>1.Godot Game Engine: (uses python/GDscript) for Game mechanics.</li>
            <li>2. MySQL database: I was storing and pulling game data so they can monitor their weekly performance on a website, the database I hosted on clevercloud.</li>
            <li>3. NodeJS : Writing APIs and SQL queries to store data from godot to MySQL database, since godot doesn't have a driver to directly connect.</li>
            <li>4.Springboot: redesigning the database and add necessary relationships, to accommodate the game data and my data visualization/ figma design/dashboard designs.</li>
            <li></li>
          </ul>

        </div>
        <div className='mt-8 w-[75%] ml-6'>
          <h3>Design Patterns I worked with / used.-:</h3>
          <ul className='ml-10'>
            <li> 1.Singleton as a GameManager so whenever we change scenes data from previous scenes is still accessible and is accessible anywhere.</li>
            <li> 2. State Pattern : for switching between Animations ( idle state, jump state, runstate,attackstate).</li>
          </ul>
        </div>
        <div className='mt-8 w-[75%] ml-6'>
          <p>
            What I didn't do : Implementation of the admin dashboards I designed with figma for the website, 
            however I did implement data visuals on the game (game progress) once a task is finished.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Experience