import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2abeb.firebaseapp.com",
  projectId: "mern-estate-2abeb",
  storageBucket: "mern-estate-2abeb.appspot.com",
  messagingSenderId: "193703905957",
  appId: "1:193703905957:web:d7aa0d05dd6fd0efff1b4c",
  measurementId: "G-8JX8D0ZTR5"
};

export const app = initializeApp(firebaseConfig);
