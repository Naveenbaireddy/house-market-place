import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCMZl6BqwWPX22uOZ_VfQ4cNGX5gtz7CCA",
  authDomain: "house-market-app-9a1bc.firebaseapp.com",
  projectId: "house-market-app-9a1bc",
  storageBucket: "house-market-app-9a1bc.appspot.com",
  messagingSenderId: "349596428261",
  appId: "1:349596428261:web:f95baf45a6365458dff10c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore()