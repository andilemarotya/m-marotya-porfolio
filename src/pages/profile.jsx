import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Profile = () => {
  return (
    <div className='bg-black min-h-screen flex flex-col justify-center items-center text-white text-[Inter]'>
      <div className='bg-black text-white flex flex-col sm:flex-row justify-between items-center mb-4 w-full sm:w-5/6 p-4'>
        <div className='mb-4 sm:mb-0 sm:mr-4'>
          <h1 className='text-2xl sm:text-3xl font-bold'>Mandile Marotya</h1>
          <p className='text-lg sm:text-xl'>Fullstack Software Engineer</p>
          <p className='text-lg sm:text-xl'>BSc Computer Scientist</p>
          <div className='mt-2'>
            <a className='flex items-center mb-2'><PhoneIphoneIcon className='mr-2' />+27 63 591 1462</a>
            <a className='flex items-center mb-2'><EmailIcon className='mr-2' />marotyamandile@gmail.com</a>
            <p className='flex items-center'><LocationOnIcon className='mr-2' />Port Elizabeth, South Africa</p>
          </div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/images/profile-pic.JPG`}
          alt='Profile Pic'
          className='w-32 h-32 sm:w-40 sm:h-40 rounded-lg'
        />
      </div>
      <hr className='bg-white w-full sm:w-5/6' />
      <div className='p-4 mb-8 w-full sm:w-5/6'>
        <h2 className='text-gold text-xl sm:text-2xl'>About Me</h2>
        <p className='text-lg sm:text-xl'>
          I'm a highly peer and self-driven Computer Scientist/Fullstack engineer seeking full-time employment in
          the Software Engineering industry. I am a team player, possessing impressive problem-solving,
          communication, data analysis, and visualization skills.
        </p>
      </div>
    </div>
  );
};

export default Profile;
