// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';

import {getFirestore, collection, addDoc} from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyANre1jo8f6Uuayi1q-cwwnKq328JWYxJU',
  authDomain: 'nbe-project-7c641.firebaseapp.com',
  projectId: 'nbe-project-7c641',
  storageBucket: 'nbe-project-7c641.appspot.com',
  messagingSenderId: '189884068886',
  appId: '1:189884068886:web:fe40b0f87e1ef3a1877137',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

export const signUp = async (email, password) => {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      response.user.updateProfile({
        displayName: 'Fathy Nabil',
      });
      console.log('Added');
    });
};

export const login = async (email, password) => {
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(response.user.displayName);
    console.log('Signed', await response.user?.getIdToken());
  } catch (error) {
    console.log('Done', error.message);
  }
};
