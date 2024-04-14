// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b845d.firebaseapp.com",
  projectId: "mern-estate-b845d",
  storageBucket: "mern-estate-b845d.appspot.com",
  messagingSenderId: "86744120076",
  appId: "1:86744120076:web:c68c3e003da5164efc6729",
  measurementId: "G-445Z0MGMWV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
