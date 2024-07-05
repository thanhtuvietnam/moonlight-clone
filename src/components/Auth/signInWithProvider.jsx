import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../shared/firebase';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';

export const signInWithProvider = (provider, type) => {
  signInWithPopup(auth, provider).then(async (result) => {
    const user = result.user;
    let isStored = false;
    const querySnapshot = await getDocs(collection(db, 'users'));
    querySnapshot.forEach((doc) => {
      if (doc.id === user.uid) {
        isStored = true;
      }
    });

    if (isStored) return;

    let token;

    if (type === 'facebook') {
      const credential = FacebookAuthProvider.credentialFromResult(result);
      token = credential?.accessToken;
    }

    setDoc(doc(db, 'user', user.uid), {
      firstName: user.displayName,
      lastName: '',
      ...(type === 'google' && { photoUrl: user.photoURL }),
      ...(type === 'facebook' && {
        photoUrl: user.photoURL + '?access_token' + token,
      }),
      bookmark: [],
      recentlyWatch: [],
      ...(type === 'facebook' && { token }),
    });
  });
};
