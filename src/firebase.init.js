// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9_jp9qzqkGukeCfOl_9XNzvdFWjk6Rlo",
  authDomain: "the-car-doctor-limited.firebaseapp.com",
  projectId: "the-car-doctor-limited",
  storageBucket: "the-car-doctor-limited.appspot.com",
  messagingSenderId: "212271650845",
  appId: "1:212271650845:web:eafed9a2d6cb351fb38ef4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
