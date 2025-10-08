// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb7tOcB7k2WpMtX90SOsSC8zZ4_iPwri4",
  authDomain: "web-504-dd.firebaseapp.com",
  projectId: "web-504-dd",
  storageBucket: "web-504-dd.firebasestorage.app",
  messagingSenderId: "617753977472",
  appId: "1:617753977472:web:6d0222f3a155f42ad0fc65",
  measurementId: "G-MECYN578X7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);