// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMxWkSUqt4Iz_OCugnWvD22n57PF741Vg",
  authDomain: "twitter-clone-6161.firebaseapp.com",
  projectId: "twitter-clone-6161",
  storageBucket: "twitter-clone-6161.appspot.com",
  messagingSenderId: "1017970978610",
  appId: "1:1017970978610:web:78f02cbb5596384634b12b",
  measurementId: "G-ELTVDXQD70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db1 = getFirestore(app);



