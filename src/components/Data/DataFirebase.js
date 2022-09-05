import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6F1C2YFcRM448bW2Z7kRRLxqNSbmy0do",
  authDomain: "curso-react-coder-9dce5.firebaseapp.com",
  projectId: "curso-react-coder-9dce5",
  storageBucket: "curso-react-coder-9dce5.appspot.com",
  messagingSenderId: "990530950478",
  appId: "1:990530950478:web:1fe01be8c36a406071ba1f",
};

const app = initializeApp(firebaseConfig);

export const DB = getFirestore(app);
