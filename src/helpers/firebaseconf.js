// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrwwMpAYsg_A1z3h-vMptHxpTYlBg4Mzo",
  authDomain: "chest-x-summarizer.firebaseapp.com",
  projectId: "chest-x-summarizer",
  storageBucket: "chest-x-summarizer.appspot.com",
  messagingSenderId: "568683652362",
  appId: "1:568683652362:web:fae3d92e1c6f38e0b206f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
