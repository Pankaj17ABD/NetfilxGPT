// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwVIWdZbOKHA60a-TDhAD1mDgiH44YABU",
  authDomain: "netfixgpt-4c00f.firebaseapp.com",
  projectId: "netfixgpt-4c00f",
  storageBucket: "netfixgpt-4c00f.appspot.com",
  messagingSenderId: "529094100876",
  appId: "1:529094100876:web:dc4c77189491078a3438a9",
  measurementId: "G-14FW4ZEZVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();
