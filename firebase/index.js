// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_88WDP241L2WoX8i8J0r6dxQW2ECil-E",
  authDomain: "myqnmaker.firebaseapp.com",
  projectId: "myqnmaker",
  storageBucket: "myqnmaker.appspot.com",
  messagingSenderId: "43672168684",
  appId: "1:43672168684:web:a5a5ba32e5923a83a05dc9"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export {firebase};