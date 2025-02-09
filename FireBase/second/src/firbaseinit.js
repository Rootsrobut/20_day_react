// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3fCdJewG2PpkkaZnHBRTbC2s01TB8cAs",
  authDomain: "app-c9cfe.firebaseapp.com",
  databaseURL: "https://app-c9cfe-default-rtdb.firebaseio.com",
  projectId: "app-c9cfe",
  storageBucket: "app-c9cfe.firebasestorage.app",
  messagingSenderId: "1094861526704",
  appId: "1:1094861526704:web:4388b2090642c953a98d75"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
