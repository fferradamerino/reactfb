// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLtMc26s3a5tWnQozgAc_IcAgc2Kfme-I",
  authDomain: "reactfb-b0151.firebaseapp.com",
  projectId: "reactfb-b0151",
  storageBucket: "reactfb-b0151.firebasestorage.app",
  messagingSenderId: "419429670482",
  appId: "1:419429670482:web:984994ea9c19723976498b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar la DB
export const db = getFirestore(app);