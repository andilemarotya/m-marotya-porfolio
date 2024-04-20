import React from 'react'

const Projects = () => {

  const videoId1 = process.env.REACT_APP_VIDEO_ID_1;
  const videoId2 = process.env.REACT_APP_VIDEO_ID_2;
  const videoId3 = process.env.REACT_APP_VIDEO_ID_3;

  return (
    <div className='bg-black min-h-40 flex flex-col justify-center items-center text-white text-[Inter]'>
      <hr className='bg-white w-[90%] my-5'/>
      <h1 className='text-gold  w-[84%] flex font-bold text-lg'>Projects</h1>

      {/*Body*/}
      <div className='mt-6 w-[75%] ml-4 mb-8'>
        {/*Full Stack*/}
        <h1 className='text-gold mb-4'>Full Stack:</h1>
        <div className='flex justify-between ml-10 space-x-8'>
          {/*store admin */}
          <div className='border border-black rounded-xl justify-center items-center p-3 bg-[#2B2924]'>
            <img src={`${process.env.PUBLIC_URL}/images/admin.png`} alt='image' className='mx-auto'/>
            <p className='my-5 text-center'>Full stack Store admin app, using React , NodeJS and MongoDB.</p>
            <a href='https://msstoreadmin-frontend.onrender.com/' target='_blank'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View</button>
            </a>
          </div>
          {/*crud app */}
          <div className='items-center border border-black rounded-xl p-3 bg-[#2B2924]'>
            <img src={`${process.env.PUBLIC_URL}/images/crud.png`} alt='image' className='mx-auto'/>
            <p className='my-5 text-center'>Full stack CRUD app, using React , Springboot and MySQL.</p>
            <a href='https://msstoreadmin-frontend.onrender.com/' target='_blank'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View</button>
            </a>
          </div>      
        </div>

        {/*Frontend*/}
        <h1 className='text-gold my-8'>Frontend:</h1>
        <div className='flex justify-between ml-10 space-x-8 my-8'>
          {/*Blockchain */}
          <div className='border border-black rounded-xl justify-center items-center p-3 bg-[#2B2924]'>
            <img src={`${process.env.PUBLIC_URL}/images/blockchain.png`} alt='image' className='mx-auto'/>
            <p className='my-5 text-center'>Full stack Store admin app, using React , NodeJS and MongoDB.</p>
            <a href='https://ms-blockchain.netlify.app/' target='_blank'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View</button>
            </a>
          </div>
          {/*Restaurant */}
          <div className='items-center border border-black rounded-xl p-3 bg-[#2B2924]'>
            <img src={`${process.env.PUBLIC_URL}/images/myira.png`} alt='image' className='mx-auto'/>
            <p className='my-5 text-center'>Full stack CRUD app, using React , Springboot and MySQL.</p>
            <a href='https://myira-restaurant.netlify.app/' target='_blank'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View</button>
            </a>
          </div>
          {/*Panel Beating */}
          <div className='items-center border border-black rounded-xl p-3 bg-[#2B2924]'>
            <img src={`${process.env.PUBLIC_URL}/images/dumza.png`} alt='image' className='mx-auto'/>
            <p className='my-5 text-center'>Full stack CRUD app, using React , Springboot and MySQL.</p>
            <a href='https://dumzapanelb.onrender.com/' target='_blank'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View</button>
            </a>
          </div>        
        </div>

        {/*Mobile*/}
        <h1 className='text-gold my-8'>Mobile:</h1>
        <div className='flex justify-center'>
          {/*News APP */}
          <div className='border border-black rounded-xl justify-center items-center p-3 bg-[#2B2924]'>
            <img src={`${process.env.PUBLIC_URL}/images/news.png`} alt='image' className='mx-auto'/>
            <p className='my-5 text-center'>Full stack Store admin app, using React , NodeJS and MongoDB.</p>
            <a href='https://play.google.com/store/apps/details?id=com.marotyastudios.mswwnews&hl=en_ZA&gl=US' target='_blank'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Download</button>
            </a>
          </div>
        </div>

        {/*Games*/}
        <h1 className='text-gold my-8'>Games:</h1>
        <div className='flex justify-between ml-10 space-x-8'>
          {/*Angry Balls */}
          <div className='border border-black rounded-xl justify-center items-center p-3 bg-[#2B2924]'>
            <iframe
              title='My Video'
              src={`https://drive.google.com/file/d/120IELQKlQp0o5n6SvZ5tM-HAZReeoiTX/preview`}
              width='280'
              height='200'
              frameBorder='0'
              allow='autoplay; encrypted-media'
            />
            <p className='my-5 text-center'>Full stack Store admin app, using React , NodeJS and MongoDB.</p>
            <a href='https://drive.google.com/file/d/1N4g49_KRU3-dqJV1XqPfcDj-ZhbTQ8yx/view?usp=drive_link' target='_blank'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Download</button>
            </a>
          </div>
          {/*Color Blender */}
          <div className='items-center border border-black rounded-xl p-3 bg-[#2B2924]'>
            <iframe
              title='My Video'
              src={`https://drive.google.com/file/d/1qO6h2sC4mkGOs331BOKvLkd5rkJifkeJ/preview`}
              width='280'
              height='200'
              frameBorder='0'
              allow='autoplay; encrypted-media'
            />
            <p className='my-5 text-center'>Full stack CRUD app, using React , Springboot and MySQL.</p>
            <a href='https://drive.google.com/file/d/1XIfNOwRQzbXT4Ey8LhaKk3I-ck-CoJCr/view?usp=drive_link' target='_blank'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Download</button>
            </a>
          </div>
          {/*Dodging blocks */}
          <div className='items-center border border-black rounded-xl p-3 bg-[#2B2924]'>
            <iframe
              title='My Video'
              src={`https://drive.google.com/file/d/1H7YIheD4VjjQy3GUH8yfOX80pRXQQEXc/preview`}
              width='280'
              height='200'
              frameBorder='0'
              allow='autoplay; encrypted-media'
            />
            <p className='my-5 text-center'>Full stack CRUD app, using React , Springboot and MySQL.</p>
            <a href='https://drive.google.com/file/d/12BUE_Fcq00R8aDd5E9Xzpsk1lzRyqJ8Q/view?usp=drive_link' target='_blank'>
              <button className='block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Download</button>
            </a>
          </div>        
        </div>
       

      </div>
      
        
    </div>
  )
}

export default Projects