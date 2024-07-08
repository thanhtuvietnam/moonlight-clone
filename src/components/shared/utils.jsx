import { IMAGE_URL } from "./constants";

export const converErrorCodeToMessage = (errorCode) => {
  if (errorCode === 'auth/email-already-in-use') return 'Your email is already in use.';
  if (errorCode === 'auth/user-not-found') return 'Your email may be incorrect';
  if (errorCode === 'auth/wrong-password') return 'Your password is incorrect.';
  if (errorCode === 'auth/invalid-email') return 'Your email is invalid';
  if (errorCode === 'auth/too-many-requests') return 'You request too many times!';
  return 'something weird happened';
};

export const getRandomAvatar =()=>{
  const avatars = [
    "https://i.ibb.co/zrXfKsJ/catface-7.jpg",
    "https://i.ibb.co/CJqGvY6/satthudatinh.jpg",
    "https://i.ibb.co/rd3PGq5/catface-9.png",
    "https://i.ibb.co/Htq4LWJ/catface-8.png",
    "https://i.ibb.co/9mPr2ds/catface-3.jpg",
    "https://i.ibb.co/b6TT6Y4/catface-6.jpg",
    "https://i.ibb.co/0pNx0nv/catface-4.jpg",
    "https://i.ibb.co/StzXrVH/catface.jpg",
    "https://i.ibb.co/KDdd4zN/catface-2.jpg",
    "https://i.ibb.co/stB42Nb/catface-5.jpg"
  ]
  return avatars[Math.floor(Math.random()* avatars.length)]
}

export const resizeImage = (imageUrl,width='original') => `${IMAGE_URL}/${width}${imageUrl}`
