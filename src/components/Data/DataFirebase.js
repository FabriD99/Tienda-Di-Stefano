import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6F1C2YFcRM448bW2Z7kRRLxqNSbmy0do",
  authDomain: "curso-react-coder-9dce5.firebaseapp.com",
  projectId: "curso-react-coder-9dce5",
  storageBucket: "curso-react-coder-9dce5.appspot.com",
  messagingSenderId: "990530950478",
  appId: "1:990530950478:web:1fe01be8c36a406071ba1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app);