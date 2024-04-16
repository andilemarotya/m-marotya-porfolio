import React from 'react';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Profile = () => {
  return (
    <div className='bg-black min-h-40 flex flex-col justify-center items-center text-white text-[Inter]'>
      <div className='bg-black text-white flex justify-between items-center mb-4  w-[90%] p-4'>
        <div>
          <a><PhoneIphoneIcon/>+27 63 591 1462</a><br/>
          <a><EmailIcon/>marotyamandile@gmail.com</a>
          <p><LocationOnIcon/>Port Elizabeth, South Africa</p>
        </div>
        <div className='flex'>
          <div className='mr-2'>
            <h1>Mandile Marotya</h1>
            <p>Fullstack Software Engineer</p>
            <p>BSc Computer Scientist</p>
            
          </div>
          <img src={`${process.env.PUBLIC_URL}/images/profile-pic.JPG`} alt='Profile Pic' className='w-20 h-22 rounded-lg' />
        </div>
      </div>
      <hr className='bg-white w-[90%]' />
      <div className='p-4 mb-8'>
        <h2 className='text-gold'>About Me</h2>
        <p>
          	I'm highly peer and self-driven Computer Scientist/ Fullstack engineer seeking full-time employment in
            the Software Engineering industry.<br/> I am team player, I have impressive good problem solving skills,
            communication skills, data analysis and visualization skills. 
        </p>
      </div>
    </div>
  );
};

export default Profile;