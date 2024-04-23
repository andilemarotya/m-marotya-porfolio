import React from 'react';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  return (
    <div className='bg-black min-h-56 flex flex-col justify-center items-center text-white text-[Inter]'>
      <hr className='bg-white w-[90%] mt-5'/>
      <h1 className='text-gold w-[90%] sm:w-84% flex justify-end px-4'><SchoolIcon /> Education</h1>

      {/* Education body */}
      <div className='flex flex-col sm:flex-row w-[90%] sm:w-88% px-4'>
        <div className='mb-4 sm:mb-0 sm:mr-4'>
          <h3 className='font-bold'>University of the Western Cape</h3>
          <p>Cape Town</p>
          <span>2019 - 2022</span>
        </div>
        <div className='timeline flex-1'>
          <div className='relative'>
            <div className='dot'></div>
            <div className='pl-10'>
              <span className='timeline-course'>BSc Computer Science</span>
              <ul className='list-disc list-inside'>
                <li>
                  Java, Python, C, Assembly,
                  Data Structures & Algorithms,
                  Networking, Machine Learning,
                  OS, Human-Computer Interaction,
                  Software Engineering, Databases,
                  Data Analysis, Modern Algebra,
                  Real Analysis, Calculus,
                  Advanced Calculus, Physical Science.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
