import React from 'react';

const Projects = () => {
  return (
    <div className='bg-black min-h-40 flex flex-col justify-center items-center text-white text-[Inter]'>
      <hr className='bg-white w-[90%] my-5' />
      <h1 className='text-gold w-[84%] flex font-bold text-lg'>Projects</h1>

      {/* Body */}
      <div className='mt-6 w-[90%] max-w-screen-lg ml-4 mb-8'>
        {/* Full Stack */}
        <h1 className='text-gold mb-4'>Full Stack:</h1>
        <div className='flex justify-between mb-8'>
          {/* Store admin */}
          <div className='project-item bg-[#2B2924] border border-black rounded-xl p-3 w-[45%]'>
            <img src={`${process.env.PUBLIC_URL}/images/admin.png`} alt='Store admin' className='w-full h-auto mx-auto' />
            <p className='my-5 text-center'>Full stack Store admin app, using React, Node.js, and MongoDB.</p>
            <a href='https://msstoreadmin-frontend.onrender.com/' target='_blank' rel='noopener noreferrer'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View</button>
            </a>
          </div>
          {/* CRUD app */}
          <div className='project-item bg-[#2B2924] border border-black rounded-xl p-3 w-[45%]'>
            <img src={`${process.env.PUBLIC_URL}/images/crud.png`} alt='CRUD app' className='w-full h-auto mx-auto' />
            <p className='my-5 text-center'>Full stack CRUD app, using React, Spring Boot, and MySQL.</p>
            <a href='https://msstoreadmin-frontend.onrender.com/' target='_blank' rel='noopener noreferrer'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View</button>
            </a>
          </div>
        </div>

        {/* Frontend */}
        <h1 className='text-gold my-8'>Frontend:</h1>
        <div className='flex justify-between mb-8'>
          {/* Blockchain */}
          <div className='project-item bg-[#2B2924] border border-black rounded-xl p-3 w-[30%]'>
            <img src={`${process.env.PUBLIC_URL}/images/blockchain.png`} alt='Blockchain app' className='w-full h-auto mx-auto' />
            <p className='my-5 text-center'>Blockchain application using React and Node.js.</p>
            <a href='https://ms-blockchain.netlify.app/' target='_blank' rel='noopener noreferrer'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View</button>
            </a>
          </div>
          {/* Restaurant */}
          <div className='project-item bg-[#2B2924] border border-black rounded-xl p-3 w-[30%]'>
            <img src={`${process.env.PUBLIC_URL}/images/myira.png`} alt='Restaurant app' className='w-full h-auto mx-auto' />
            <p className='my-5 text-center'>Restaurant app using React and Spring Boot.</p>
            <a href='https://myira-restaurant.netlify.app/' target='_blank' rel='noopener noreferrer'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View</button>
            </a>
          </div>
          {/* Panel Beating */}
          <div className='project-item bg-[#2B2924] border border-black rounded-xl p-3 w-[30%]'>
            <img src={`${process.env.PUBLIC_URL}/images/dumza.png`} alt='Panel Beating app' className='w-full h-auto mx-auto' />
            <p className='my-5 text-center'>Panel Beating app using React and Spring Boot.</p>
            <a href='https://dumzapanelb.onrender.com/' target='_blank' rel='noopener noreferrer'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View</button>
            </a>
          </div>
        </div>

        {/* Games */}
        <h1 className='text-gold my-8'>Games:</h1>
        <div className='flex justify-between mb-8'>
          {/* Angry Balls */}
          <div className='project-item bg-[#2B2924] border border-black rounded-xl p-3 w-[30%]'>
            <iframe
              title='Angry Balls Video'
              src='https://drive.google.com/file/d/120IELQKlQp0o5n6SvZ5tM-HAZReeoiTX/preview'
              width='280'
              height='200'
              frameBorder='0'
              allow='autoplay; encrypted-media'
              className='w-full h-auto mx-auto'
            />
            <p className='my-5 text-center'>Angry Balls game demo.</p>
            <a href='https://drive.google.com/file/d/1N4g49_KRU3-dqJV1XqPfcDj-ZhbTQ8yx/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Download</button>
            </a>
          </div>
          {/* Color Blender */}
          <div className='project-item bg-[#2B2924] border border-black rounded-xl p-3 w-[30%]'>
            <iframe
              title='Color Blender Video'
              src='https://drive.google.com/file/d/1qO6h2sC4mkGOs331BOKvLkd5rkJifkeJ/preview'
              width='280'
              height='200'
              frameBorder='0'
              allow='autoplay; encrypted-media'
              className='w-full h-auto mx-auto'
            />
            <p className='my-5 text-center'>Color Blender game demo.</p>
            <a href='https://drive.google.com/file/d/1XIfNOwRQzbXT4Ey8LhaKk3I-ck-CoJCr/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Download</button>
            </a>
          </div>
          {/* Dodging blocks */}
          <div className='project-item bg-[#2B2924] border border-black rounded-xl p-3 w-[30%]'>
            <iframe
              title='Dodging Blocks Video'
              src='https://drive.google.com/file/d/1H7YIheD4VjjQy3GUH8yfOX80pRXQQEXc/preview'
              width='280'
              height='200'
              frameBorder='0'
              allow='autoplay; encrypted-media'
              className='w-full h-auto mx-auto'
            />
            <p className='my-5 text-center'>Dodging Blocks game demo.</p>
            <a href='https://drive.google.com/file/d/12BUE_Fcq00R8aDd5E9Xzpsk1lzRyqJ8Q/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Download</button>
            </a>
          </div>
        </div>

        {/* Mobile */}
        <h1 className='text-gold my-8'>Mobile:</h1>
        <div className='flex justify-center mb-8'>
          {/* News APP */}
          <div className='project-item bg-[#2B2924] border border-black rounded-xl p-3 w-[30%]'>
            <img src={`${process.env.PUBLIC_URL}/images/news.png`} alt='News app' className='w-full h-auto mx-auto' />
            <p className='my-5 text-center'>News app for mobile devices.</p>
            <a href='https://play.google.com/store/apps/details?id=com.marotyastudios.mswwnews&hl=en_ZA&gl=US' target='_blank' rel='noopener noreferrer'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Download</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

