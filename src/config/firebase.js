// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import firebase from 'firebase/app';

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from 'firebase/firestore';

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
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// export const addCarsData = async () => {
//   console.log('db');

//   const Cars = [
//     {
//       carName: 'Mini Cooper',
//       passenger: 4,
//       pricePerDay: 200,
//       type: 'Manual',
//       imageUrl:
//         'https://firebasestorage.googleapis.com/v0/b/car-dashboard-d6648.appspot.com/o/cars%2Fbooking-car-1.svg?alt=media&token=3b665cc8-8279-4b44-93de-e08a22284649',
//       isLiked: 0,
//     },

//     {
//       carName: 'Porshe 718 Cayman S',
//       passenger: 6,
//       pricePerDay: 300,
//       type: 'Automatic',
//       imageUrl:
//         'https://firebasestorage.googleapis.com/v0/b/car-dashboard-d6648.appspot.com/o/cars%2Fbooking-car-2.svg?alt=media&token=6dbcf5f4-38c4-41af-9783-e5cec9c95147',
//       isLiked: 0,
//     },
//     {
//       carName: 'Porshe 718 Cayman S',
//       passenger: 5,
//       pricePerDay: 400,
//       type: 'Manual',
//       imageUrl:
//         'https://firebasestorage.googleapis.com/v0/b/car-dashboard-d6648.appspot.com/o/cars%2Fbooking-car-3.svg?alt=media&token=07631824-860c-4d72-b29c-b9683ff5c694',
//       isLiked: 0,
//     },
//     {
//       carName: 'Porshe 718 Cayman S',
//       passenger: 4,
//       pricePerDay: 500,
//       type: 'Automatic',
//       imageUrl:
//         'https://firebasestorage.googleapis.com/v0/b/car-dashboard-d6648.appspot.com/o/cars%2Fbooking-car-4.svg?alt=media&token=228195cd-ca1a-49e4-995e-fc5225464399',
//       isLiked: 0,
//     },
//     {
//       carName: 'Porshe 718 Cayman S',
//       passenger: 6,
//       pricePerDay: 550,
//       type: 'Manual',
//       imageUrl:
//         'https://firebasestorage.googleapis.com/v0/b/car-dashboard-d6648.appspot.com/o/cars%2Fbooking-car-5.svg?alt=media&token=ef716f61-aaa8-41ee-a492-ad8bf8294ec9',
//       isLiked: 0,
//     },
//   ];
//   console.log('sayed');

//   // try {
//   //   const docRef = await addDoc(collection(db, 'users'), {
//   //     first: 'Ada',
//   //     last: 'Lovelace',
//   //     born: 1815,
//   //   });
//   //   console.log('Document written with ID: ', docRef.id);
//   // } catch (e) {
//   //   console.error('Error adding document: ', e);
//   // }

//   const carsCollection = collection(db, 'cars');
//   Cars.map(async car => {
//     // console.log(car);
//     addDoc(carsCollection, car);
//   });
//   console.log('db');
// };
export const loginU = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log('Signed');
  } catch (error) {
    console.log('Done', error.message);
  }
};
// export logining = () => {
//   try {
//     await fir
//   } catch (error) {

//   }
// }

export default app;
