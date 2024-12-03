import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDiRovpXBkDRoPOA6XhX31uHJqsNSnGc_w",
  authDomain: "todo-reactjs-43c6e.firebaseapp.com",
  projectId: "todo-reactjs-43c6e",
  storageBucket: "todo-reactjs-43c6e.appspot.com",
  messagingSenderId: "744993165818",
  appId: "1:744993165818:web:f1bd9cfb6e00e2c023d443"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);