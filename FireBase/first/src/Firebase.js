import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC3fCdJewG2PpkkaZnHBRTbC2s01TB8cAs",
  authDomain: "app-c9cfe.firebaseapp.com",
  projectId: "app-c9cfe",
  storageBucket: "app-c9cfe.firebasestorage.app",
  messagingSenderId: "1094861526704",
  appId: "1:1094861526704:web:504df642f7e197aba98d75",
  databaseURL:'https://app-c9cfe-default-rtdb.firebaseio.com/'
};

const app = initializeApp(firebaseConfig);
export default app;