// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8SqLZCs7vxsz1F9hcjGA9Br8CbWALU0w",
  authDomain: "organizemymoney-3e5ba.firebaseapp.com",
  projectId: "organizemymoney-3e5ba",
  storageBucket: "organizemymoney-3e5ba.firebasestorage.app",
  messagingSenderId: "446628010803",
  appId: "1:446628010803:web:6022dfd8f4a9f1c103fc46",
  measurementId: "G-JK9Z06T23Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);