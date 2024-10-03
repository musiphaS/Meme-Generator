// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from './firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7t04togl1KlHow9x3FzZs9IAIhZ_ite0",
  authDomain: "memeauth-68030.firebaseapp.com",
  projectId: "memeauth-68030",
  storageBucket: "memeauth-68030.appspot.com",
  messagingSenderId: "517094846461",
  appId: "1:517094846461:web:bc86db58529f3d20bd7394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
export {auth ,app};