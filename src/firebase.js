// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7Ef8WPWEQsnK5ahHdE6-asere-jW0hFE",
  authDomain: "auth-dev-avtaar.firebaseapp.com",
  projectId: "auth-dev-avtaar",
  storageBucket: "auth-dev-avtaar.appspot.com",
  messagingSenderId: "427865989861",
  appId: "1:427865989861:web:3715ac07003711960eaa0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
