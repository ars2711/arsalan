// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBXM77qOr90jg7XMEDIlAZjEjS4hqbsi0w",
  authDomain: "arsalan-27.firebaseapp.com",
  projectId: "arsalan-27",
  storageBucket: "arsalan-27.appspot.com",
  messagingSenderId: "140539769160",
  appId: "1:140539769160:web:8aa68595dc936318e2037d",
  measurementId: "G-49802MNVE9",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
