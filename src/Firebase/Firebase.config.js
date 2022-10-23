// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzuVa6W1oXiceih-G-6djwlY9nmEWg9D0",
  authDomain: "react-todos-app-firebase-1da6a.firebaseapp.com",
  projectId: "react-todos-app-firebase-1da6a",
  storageBucket: "react-todos-app-firebase-1da6a.appspot.com",
  messagingSenderId: "953465930394",
  appId: "1:953465930394:web:e030b69a3812ef4aa09523",
  measurementId: "G-XJKET2ZYN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)