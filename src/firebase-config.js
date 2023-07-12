// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_aU7Vfzgi9qK2bxjQCRy_1XnoAIfv7ZI",
  authDomain: "chatapp-a795a.firebaseapp.com",
  projectId: "chatapp-a795a",
  storageBucket: "chatapp-a795a.appspot.com",
  messagingSenderId: "985074541998",
  appId: "1:985074541998:web:2d7649b01aceba5ebd543f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);