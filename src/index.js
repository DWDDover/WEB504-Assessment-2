// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCupXktGrfhD1izsV_-lAkwi08g7ytXRFw",
  authDomain: "portfolio-6eda8.firebaseapp.com",
  projectId: "portfolio-6eda8",
  storageBucket: "portfolio-6eda8.firebasestorage.app",
  messagingSenderId: "116994030640",
  appId: "1:116994030640:web:3f0485ed9680c2419e01f5",
  measurementId: "G-9JQC3G7VTP"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);