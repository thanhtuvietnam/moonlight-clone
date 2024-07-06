import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

import { auth, db } from '../shared/firebase';
import { doc, setDoc } from 'firebase/firestore';

import React, { useState } from 'react';
import { useAppSelector } from '../store/hooks';
import ModalNotification from './ModalNotification';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { converErrorCodeToMessage, getRandomAvatar } from '../shared/utils';

import icons from '../../utils/icons';
import { signInWithProvider } from './signInWithProvider';
import { Button } from '@mui/material';

const { FcGoogle, FaFacebookF, CgProfile, AiOutlineMail, RiLockPasswordLine } = icons;

const SignUp = ({ setIsShowSignInBox }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const currentUser = useAppSelector((state) => state.auth.user);

  const signUpHandler = async (values) => {
    try {
      setIsLoading(true);
      const user = (await createUserWithEmailAndPassword(auth, values.email, values.password)).user;
      setDoc(doc(db, 'users', user.id), {
        firstName: values.firstName,
        lastname: values.lastname,
        photoUrl: getRandomAvatar(),
        bookmarks: [],
        recentlywatch: [],
      });
    } catch (error) {
      setError(converErrorCodeToMessage(error.code));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {currentUser && <ModalNotification type='succes' message={'Sign up succesfully'} />}
      {isLoading && (
        <div className='absolute top-1/2 left-1/2 transform: -translate-x-1/2 transform: -translate-y-1/2 inline-block z-30w-full z-30'>
          <div className='w-28 h-28 border-[10px] rounded-full border-primary border-t-transparent animate-spin'></div>
        </div>
      )}
      {error && <ModalNotification type={'error'} message={error} onCloseModal={() => setError('')} />}
      <div className=' px-4 py-2 rounded-xl max-w-xl w-full min-h-[500px] text-white/70 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
        <div className='flex flex-col items-center mb-5'>
          <div className='text-[50px] font-semibold mb-1 mx-auto text-center md:text-left'>
            <div className='uppercase tracking-wider text-xl font-medium mb-2'>Start for free</div>
            <div className='text-primary leading-none mb-4'>Create Account</div>
          </div>

          <div className='flex gap-4 mb-8'>
            <button onClick={() => signInWithProvider(new GoogleAuthProvider(), 'google')} className='h-12 w-12 rounded-full bg-white tw-flex-center hover:brightness-75 trasition duration-300'>
              <FcGoogle style={{ marginLeft: '10px' }} size={25} className='text-primary' />
            </button>
            <button onClick={() => signInWithProvider(new FacebookAuthProvider(), 'facebook')} className='bg-white rounded-full h-12 w-12 tw-flex-center hover:brightness-75 transition duration-300'>
              <FaFacebookF style={{ marginLeft: '12px' }} size={25} color='#3d5bbf' />
            </button>
          </div>
          <p className='text-lg'>or use your email account:</p>
        </div>

        <Formik
          initialValues={{
            firstName: '',
            lastname: '',
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required').min(6, 'Password is too short - should be 6 chars minimum.'),
          })}
          onSubmit={signUpHandler}>
          <Form>
            <div className='flex gap-8 md:gap-0 mb-6 md:justify-between'>
              <div className='relative'>
                <Field name='firstName' type='text' id='firstName' placeholder='First Name' className='w-full bg-[#333335] px-5 py-4 pr-12 rounded-xl outline-none peer text-white' />
                <label
                  htmlFor='firstName'
                  className={`absolute left-5 text-gray-400 transition duration-500 pointer-events-none 
              translate-y-[-50%] visible peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible peer-placeholder-shown:translate-y-[-10%] ease-in-out
              `}>
                  First name
                </label>
                <CgProfile size={25} className='absolute top-1/2 -translate-y-1/2 right-4' />
                <p className='absolute top-[95%] left-[3%] text-red-600 font-bold'>
                  <ErrorMessage name='firstName' />
                </p>
              </div>
              <div className='relative'>
                <Field name='lastName' type='text' id='lastName' placeholder='Last Name' className='w-full bg-[#333335] px-5 py-4 pr-12 rounded-xl outline-none peer text-white' />
                <label
                  htmlFor='lastName'
                  className={`absolute left-5 text-gray-400 transition duration-500 pointer-events-none 
              translate-y-[-50%] visible peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible peer-placeholder-shown:translate-y-[-10%] ease-in-out
              `}>
                  Last name
                </label>
                <CgProfile size={25} className='absolute top-1/2 -translate-y-1/2 right-4' />
                <p className='absolute top-[95%] left-[3%] text-red-600 font-bold'>
                  <ErrorMessage name='lastName' />
                </p>
              </div>
            </div>
            <div className='relative mb-6 py-2'>
              <Field name='email' id='email' placeholder='Email' className='w-full bg-[#333335] px-5 py-4 pr-12 rounded-xl outline-none peer text-white' />
              <label
                htmlFor='email'
                className={`absolute left-5 text-gray-400 transition duration-500 pointer-events-none 
              translate-y-[-50%] visible peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible peer-placeholder-shown:translate-y-[-10%] ease-in-out
              `}>
                Email
              </label>
              <AiOutlineMail size={25} className='absolute top-1/2 -translate-y-1/2 right-4' />
              <p className='absolute top-[95%] left-[3%] text-red-600 font-bold'>
                <ErrorMessage name='email' />
              </p>
            </div>
            <div className='relative mb-12'>
              <Field name='password' id='password' placeholder='Password' className='w-full bg-[#333335] px-5 py-4 pr-12 rounded-xl outline-none peer text-white' />
              <label
                htmlFor='password'
                className={`absolute left-5 text-gray-400 transition duration-500 pointer-events-none 
              translate-y-[-50%] visible peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible peer-placeholder-shown:translate-y-[-10%] ease-in-out`}>
                Password
              </label>
              <RiLockPasswordLine size={25} className='absolute top-1/2 -translate-y-1/2 right-4' />
              <p className='font-bold absolute top-[95%] left-[3%] text-red-600'>
                <ErrorMessage name='password' />
              </p>
            </div>
            <button className='rounded-full bg-primary absolute px-12 py-3 text-lg text-white uppercase left-1/2 -translate-x-1/2 hover:bg-[#4161cc] transition duration-300'>Register</button>
          </Form>
        </Formik>
        <p className='text-xl flex gap-2 mt-32 justify-center'>
          <span>Already a member?</span>
          <button onClick={() => setIsShowSignInBox(true)} className='text-primary/90 underline'>
            Sign In
          </button>
        </p>
      </div>
    </>
  );
};

export default SignUp;
