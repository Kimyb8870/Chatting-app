import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk9fUUxDGGAO6BQ1URo3mI8psnQkddn1M",
  authDomain: "chatting-app-1ab58.firebaseapp.com",
  projectId: "chatting-app-1ab58",
  storageBucket: "chatting-app-1ab58.appspot.com",
  messagingSenderId: "184400940803",
  appId: "1:184400940803:web:fccf3597a2b1a1b7a0e336",
  measurementId: "G-QF0Q1FF342",
};

firebase.initializeApp(firebaseConfig);
