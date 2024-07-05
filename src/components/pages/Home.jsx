import React, { useState } from 'react';
import { Sidebar, Title } from '../Common/index.js';
import logo from '../../assets/logo.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import icons from '../../utils/icons';

const { GiHamburgerMenu } = icons;

const Home = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  return (
    <>
      <Title value='Moonlight | Watch Films You Like' />

      <div className='bg-dark flex justify-between items-center px-5 my-5'>
        <Link to='/' className='flex gap-2 items-center'>
          <LazyLoadImage src={logo} className='h-10 w-10 rounded-full object-cover' />
          <p className='text-xl text-white font-medium uppercase tracking-wider'>
            Moon <span className='text-primary'>light</span>
          </p>
        </Link>
        <Button onClick={() => setIsSidebarActive((prev) => !prev)} variant='outlinedut'>
          <GiHamburgerMenu size={25} />
        </Button>
      </div>

      <div>
        <Sidebar onCloseSidebar={() => setIsSidebarActive(false)} isSidebarActive={isSidebarActive} />
      </div>
    </>
  );
};

export default Home;
