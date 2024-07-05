import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA0hdyKbR9MhBUTM848gNhl0U6KCjY-ZCk',
  authDomain: 'moonlight-clone.firebaseapp.com',
  projectId: 'moonlight-clone',
  storageBucket: 'moonlight-clone.appspot.com',
  messagingSenderId: '701798173576',
  appId: '1:701798173576:web:a26b15f83db23dd46b083d',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
