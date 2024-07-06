import React, { useState } from 'react';
import { Title } from '../Common/index.js';
import { useCurrentViewportView } from '../hooks/useCurrentViewportView.jsx';
import { SignIn, SignUp } from '../Auth/index.js';

const Auth = () => {
  const { ismobile } = useCurrentViewportView();
  const { isShowSignInBox, setIsShowSignInBox } = useState(true);
  return (
    <>
      <Title value={'Sign In | Moonlight'} />
      {!ismobile && (
        <video autoPlay muted loop id='myVideo' className='fixed md:-top-[130px] -top-[155px] object-cover left-0 h-[135vh] w-full -z-10'>
          <source src='https://raw.githubusercontent.com/fuocy/video/master/endgame.mp4' type='video/mp4' />
        </video>
      )}
     
      <div className='md:bg-black/80 bg-dark */   min-h-screen'>
        {!isShowSignInBox && <SignUp setIsShowSignInBox={setIsShowSignInBox} />}
        {isShowSignInBox && <SignIn setIsShowSignInBox={setIsShowSignInBox} />}       
      </div>
    </>
  );
};

export default Auth;
