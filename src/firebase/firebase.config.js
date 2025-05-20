// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS646Be0Gx9YFCkqgPwmONoogytldWeFY",
  authDomain: "recipe-book-90965.firebaseapp.com",
  projectId: "recipe-book-90965",
  storageBucket: "recipe-book-90965.firebasestorage.app",
  messagingSenderId: "333399501692",
  appId: "1:333399501692:web:ec275462c1c021ce5b52f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);
 export default auth;