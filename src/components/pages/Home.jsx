import React, { useState } from 'react';
import { SearchBox, Sidebar, Title } from '../Common/index.js';
import logo from '../../assets/logo.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import icons from '../../utils/icons';
import { useCurrentViewportView } from '../hooks/useCurrentViewportView.jsx';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { MainHomeFilms, RecommendGenres, TrendingNow } from '../Home/index.js';
import { Footer } from '../Footer/Footer';

const { GiHamburgerMenu } = icons;

const Home = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const { ismobile } = useCurrentViewportView();
  const [parent] = useAutoAnimate();
  const [currentTab, setCurrentTab] = useState(
    localStorage.getItem('currentTab')|| 'tv'
  );

  return (
    <>
      <Title value='Moonlight | Watch Films You Like' />

      <div className='bg-dark md:hidden flex justify-between items-center px-5 my-5'>
        <Link to='/' className='flex gap-3 items-center'>
          <LazyLoadImage src={logo} className='h-10 w-10 rounded-full object-cover' />
          <p className='text-xl text-white font-semibold uppercase tracking-widest'>
            Moon <span className='text-primary'>light</span>
          </p>
        </Link>
        {ismobile && (
          <Button onClick={() => setIsSidebarActive((prev) => !prev)} variant='outlinedut'>
            <GiHamburgerMenu size={25} />
          </Button>
        )}
      </div>
     
      <div className='flex items-start'>
        <Sidebar onCloseSidebar={() => setIsSidebarActive(false)} isSidebarActive={isSidebarActive} />

        <div ref={parent} className='flex-grow md:pt-7 pt-0 pb-7 border-x md:px-[2vw] px-[4vw] border-gray-darken min-h-screen'>
          <div className='flex justify-between md:items-end items-center'>
            <div className='inline-flex gap-[40px] pb-[14px] border-b border-gray-darken relative'>
              <button
                onClick={()=>{
                  setCurrentTab('tv')
                  localStorage.setItem('currentTab','tv')
                }}
                className={`${currentTab==='tv'&& 'text-white font-medium after:absolute after:bottom-0 after:left-[13%] after:bg-white after:h-[3px] after:w-5'} transition duration-300 hover:text-white`}
              
              >TV Show</button>
              <button
                onClick={()=>{
                  setCurrentTab('movie')
                  localStorage.setItem('currentTab','movie')
                }}
                className={`${currentTab==='movie'&& 'text-white font-medium after:absolute after:bottom-0 after:right-[9%] after:bg-white after:h-[3px] after:w-5'} transition duration-300 hover:text-white`}
              
              >Movie</button>
            </div>
            <div className='flex gap-6 items-center'>
              <p>CurrentUser</p>
              <LazyLoadImage src='https://photo.znews.vn/w960/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg' alt='User Aatar' className='w-7 h-7 rounded-full object-cover' effect='opacity' referrerPolicy='no-referrer' />
            </div>
          </div>
          <MainHomeFilms />
        </div>

        <div className='shrink-0 max-w-[310px] w-full hidden lg:block px-6 top-0 sticky'>
          <SearchBox />
          <RecommendGenres />
          <TrendingNow />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
