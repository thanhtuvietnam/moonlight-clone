import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import icons from '../../utils/icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useLocation} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useCurrentViewportView } from '../hooks/useCurrentViewportView';
import { auth } from '../shared/firebase';
import { useAppSelector } from '../store/hooks';
import logo from '../../assets/logo.png';

const { AiOutlineHistory, AiOutlineHome, BiSearch, BsBookmarkHeart, HiOutlineLogin, HiOutlineLogout, MdOutlineExplore, BiUserCircle } = icons;

const Sidebar = ({ isSidebarActive, onCloseSidebar }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const { isMobile } = useCurrentViewportView();

  return (
    <>
      <ToastContainer />
      {isLoading && (
        <div className="z-10 tw-flex-center fixed top-0 left-0 w-full h-full">
          <div className="w-28 h-28 border-[10px] rounded-full border-primary border-t-transparent animate-spin "></div>
        </div>
      )}

        <div
        className={`shrink-0 md:max-w-[260px] w-[70vw] pl-8 top-0 pt-10  
      md:sticky md:translate-x-0 md:bg-transparent md:shadow-none
  
    -translate-x-full fixed h-screen shadow-md transition duration-300 bg-dark-lighten z-50 ${isSidebarActive &&
      "translate-x-0"}`}
      >
        {!isMobile && (
          <Link to="/" className={`flex items-center gap-3 ${isSidebarActive && 'hidden trasition duration-300'}`}>
            <LazyLoadImage
              alt="Logo"
              src={logo}
              effect="opacity"
              className="w-10 h-10"
            />
            <h1 className="text-xl text-white tracking-widest font-semibold uppercase">
              <span>Moon</span>
              <span className="text-primary font-semibold">light</span>
            </h1>
          </Link>
          
        )}

        <div
          className={`text-white text-lg font-medium ${
            isSidebarActive ? "-mt-6" : "mt-12"
          }`}
        >
          MENU
        </div>
        <div className='mt-8 ml-4 flex flex-col gap-6'>
          <Link
            to='/'
            className={`flex gap-6 items-center ${location.pathname === '/' && '!text-primary border-r-4 border-primary font-medium'} hover:text-white transition duration-300
            }`}>
            <AiOutlineHome size={25} />
            <p>Home</p>
          </Link>

          <Link
            to='/explore'
            className={`flex gap-6 items-center ${location.pathname === '/explore' && '!text-primary border-r-4 border-primary font-medium'} hover:text-white transition duration-300
            }`}>
            <MdOutlineExplore size={25} />
            <p>Explore</p>
          </Link>

          <Link
            to='/search'
            className={`flex gap-6 items-center ${location.pathname === '/search' && '!text-primary border-r-4 border-primary font-medium'} hover:text-white transition duration-300
              
            }`}>
            <BiSearch size={25} />
            <p>Search</p>
          </Link>
        </div>

        <div className='text-white text-lg font-medium mt-12'>PERSONAL</div>

        <div className='mt-8 ml-4 flex flex-col gap-6'>
          <button className={`flex gap-6 items-center ${location.pathname === '/bookmarked' && '!text-primary border-r-4 border-primary font-medium'} hover:text-white transition duration-300}`}>
            <BsBookmarkHeart size={25} />
            <p>Bookmarked</p>
          </button>
          <button
            className={`flex gap-6 items-center ${location.pathname === 'history' && '!text-primary border-r-4 border-primary font-medium'} hover:text-white transition duration-300
          }`}>
            <AiOutlineHistory size={25} />
            <p>History</p>
          </button>
        </div>
        <div>
          <div className='text-white text-lg mt-12 font-medium'>GENERAL</div>
          <div className='mt-8 ml-4 flex flex-col gap-6'>
            <button
              className={`flex gap-6 items-center ${location.pathname === '/profile' && '!text-primary border-r-4 border-primary font-medium'} hover:text-white transition duration-300
            }`}>
              <BiUserCircle size={25} />
              <p>Profile</p>
            </button>
            <Link to={`/auth`} className='flex gap-6 items-center'>
              <HiOutlineLogin size={25} />
              <p>Login</p>
            </Link>
          </div>
        </div>
      </div>
      <div
        onClick={onCloseSidebar}
        className={`bg-black/60 z-[5] fixed top-0 left-0 w-full h-full md:opacity-0 transition duration-300 ${
          isSidebarActive ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </>
  );
};

export default Sidebar;
