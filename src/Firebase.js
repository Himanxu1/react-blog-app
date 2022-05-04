// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuPAN7nQ48mYBoNZ_avsXMd5une1UY9Ms",
  authDomain: "blogproject-5512b.firebaseapp.com",
  projectId: "blogproject-5512b",
  storageBucket: "blogproject-5512b.appspot.com",
  messagingSenderId: "675177796667",
  appId: "1:675177796667:web:a7ad88a070a8b96bd2781e",
  measurementId: "G-K9LRPYVLQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
