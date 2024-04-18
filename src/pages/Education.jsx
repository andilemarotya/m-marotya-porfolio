import React from 'react';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  return (
    <div className='bg-black min-h-40 flex flex-col justify-center items-center text-white text-[Inter]'>
      <hr className='bg-white w-[90%] mt-5'/>
      <h1 className='text-gold  w-[84%] flex justify-end'><SchoolIcon /> Education</h1>

      {/*Education body*/}
      <div className='flex w-[88%]'>
        <div>
          <h3 className='font-bold'>University of the Western Cape</h3>
          <p>Cape Town</p>
          <span>2019 - 2022</span>

        </div>
        <div class="timeline">
          <div class="relative">
            <div class="dot">

            </div>
            <div class="pl-10">
              <span class="timeline-course">BSc Computer Science</span>
              
              <ul class="list-disc list-inside">

                <li >
                  Java, Python, C, Assembly,
                  Data Structures &
                  Algorithms, Networking,
                  Machine Learning, OS,
                  Human-Computer
                  Interaction, Software
                  Engineering, Databases,
                  Data Analysis, Modern
                  Algebra, Real Analysis,
                  Calculus, Advanced Calculus, Physical Science.
                
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education