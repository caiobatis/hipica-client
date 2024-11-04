// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbl0E_3hkip-Bn-xdsYyW8t7rvurI9IxA",
  authDomain: "hipica-c1bb4.firebaseapp.com",
  projectId: "hipica-c1bb4",
  storageBucket: "hipica-c1bb4.firebasestorage.app",
  messagingSenderId: "700172472092",
  appId: "1:700172472092:web:a7e8794ffd4165496834d9",
  measurementId: "G-T7FPJPR9T4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
