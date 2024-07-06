import React from 'react';
import icons from '../../utils/icons';

const { BsFacebook, AiFillGithub } = icons;

export const Footer = () => {
  return (
    <div className='bg-dark-lighten text-white flex justify-between items-center py-3 px-4 shadow-md mt-3'>
      <p className='flex gap-2'>
        <span>Copyright _Tuluu</span>
        <span className='hidden md:block'>&copy; 6/7/2024</span>
      </p>
      <div className='flex gap-3 items-center'>
        <p className='hidden md:block'>Contact me:</p>
        <div className='flex gap-2'>
          <a target='blank' rel='noreferrer' href='https://github.com/thanhtuvietnam' className='hover:text-[#6e5494] transition duration-300'>
            <AiFillGithub size={25} />
          </a>
          <a href='https://www.facebook.com/' target='blank' rel='noreferrer' className='hover:text-primary transition duration-300'>
            <BsFacebook size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};
