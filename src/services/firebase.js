// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
} from 'firebase/firestore/lite';
import {setUserData} from '../redux/user';
import {useDispatch} from 'react-redux';

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

export const addAccountsData = async () => {
  const Accounts = [
    {
      name: 'Ayman',
      // icon: require('../../../assets/images/ProfilePage/HomePageImages/Accounts/account1.png'),
      icon: 'https://firebasestorage.googleapis.com/v0/b/nbe-project-7c641.appspot.com/o/Accounts%2Faccount1.png?alt=media&token=bae213bd-b339-4015-9a4b-fd76e67f1b4b',
    },
    {
      name: 'Alex',
      // icon: require('../../../assets/images/ProfilePage/HomePageImages/Accounts/account2.png'),
      icon: 'https://firebasestorage.googleapis.com/v0/b/nbe-project-7c641.appspot.com/o/Accounts%2Faccount2.png?alt=media&token=8c081a0f-a24e-4653-afd9-d59179175069',
    },
    {
      name: 'Soha',
      // icon: require('../../../assets/images/ProfilePage/HomePageImages/Accounts/account3.png'),
      icon: 'https://firebasestorage.googleapis.com/v0/b/nbe-project-7c641.appspot.com/o/Accounts%2Faccount3.png?alt=media&token=3d2c9f48-89aa-415c-b66c-e22e0ac68985',
    },
    {
      name: 'Alaa',
      // icon: require('../../../assets/images/ProfilePage/HomePageImages/Accounts/account4.png'),

      icon: 'https://firebasestorage.googleapis.com/v0/b/nbe-project-7c641.appspot.com/o/Accounts%2Faccount6.png?alt=media&token=ce784a8c-4fb3-4023-8a23-1bee3e7a1eb7',
    },
    {
      name: 'Mohamed',
      // icon: require('../../../assets/images/ProfilePage/HomePageImages/Accounts/account5.png'),
      icon: 'https://firebasestorage.googleapis.com/v0/b/nbe-project-7c641.appspot.com/o/Accounts%2Faccount4.png?alt=media&token=1e621221-4af4-4457-a475-6fa86bb46df0',
    },
    {
      name: 'Hala',
      // icon: require('../../../assets/images/ProfilePage/HomePageImages/Accounts/account6.png'),
      icon: 'https://firebasestorage.googleapis.com/v0/b/nbe-project-7c641.appspot.com/o/Accounts%2Faccount5.png?alt=media&token=389de0bd-c07f-44b4-9f6c-2057a4d60a31',
    },
  ];

  const docRef = doc(db, 'users', 'user1');

  const colRef = collection(docRef, 'accounts');
  // const docRef2 = doc(colRef, 'UIi9VQ24G5urkAaHxv5p');
  // const colRef2 = collection(docRef2, 'sayed');
  Accounts.map(account => addDoc(colRef, account));
};

export const getAccountsData = async () => {
  const docRef = doc(db, 'users', 'user1');
  const colRef = collection(docRef, 'accounts');
  const snapshot = await getDocs(colRef);
  const Accounts = [];
  snapshot.forEach(doc => Accounts.push(doc.data()));
  // console.log(Accounts);
  return Accounts;
};

export const addHistoryData = async () => {
  const HistoryData = [
    {
      name: 'Carrefour',
      date: '15-12-2021',
      amount: 250.21,
      icon: 'https://firebasestorage.googleapis.com/v0/b/nbe-project-7c641.appspot.com/o/History%2FCarrefour.png?alt=media&token=e43594e1-37fd-4a18-941c-18e7783a0dfa',
      // icon: require('../../../assets/images/ProfilePage/HomePageImages/History/Carrefour.png'),
    },
    {
      name: 'Amazon',
      date: '02-12-2021',
      amount: 3004.21,
      // icon: require('../../../assets/images/ProfilePage/HomePageImages/History/Amazon.png'),
      icon: 'https://firebasestorage.googleapis.com/v0/b/nbe-project-7c641.appspot.com/o/History%2FAmazon.png?alt=media&token=389de0bd-c07',
    },
    {
      name: 'Jumia',
      date: '28-11-2021',
      amount: 2146.63,
      // icon: require('../../../assets/images/ProfilePage/HomePageImages/History/Jumia.png'),
      icon: 'https://firebasestorage.googleapis.com/v0/b/nbe-project-7c641.appspot.com/o/History%2FJumia.png?alt=media&token=389de0bd-c0',
    },
    {
      name: 'Carrefour2',
      date: '15-12-2021',
      amount: 250.21,
      icon: 'https://firebasestorage.googleapis.com/v0/b/nbe-project-7c641.appspot.com/o/History%2FCarrefour.png?alt=media&token=e43594e1-37fd-4a18-941c-18e7783a0dfa',
    },
  ];

  const docRef = doc(db, 'users', 'user1');

  const colRef = collection(docRef, 'history');
  // const docRef2 = doc(colRef, 'UIi9VQ24G5urkAaHxv5p');
  // const colRef2 = collection(docRef2, 'sayed');
  HistoryData.map(history => addDoc(colRef, history));
};

export const getHistoryData = async () => {
  const docRef = doc(db, 'users', 'user1');
  const colRef = collection(docRef, 'history');
  const snapshot = await getDocs(colRef);
  const HistoryData = [];
  snapshot.forEach(doc => HistoryData.push(doc.data()));
  // console.log(HistoryData);
  return HistoryData;
};

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
    // const dispatch = useDispatch();

    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    // console.log(response.user.displayName);
    // console.log('Signed', await response.user?.getIdToken());

    const userData = {
      userName: response.user.displayName,
      uid: response.user.uid,
      token: await response.user.getIdToken(),
      accounts: await getAccountsData(),
      history: await getHistoryData(),
    };
    return userData;
    // dispatch(setUserData(userData));
  } catch (error) {
    console.log('Done', error.message);
  }
};
