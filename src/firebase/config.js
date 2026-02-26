import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqP6CtCoMYbQYo4CIViVGsTp-iUdEhcb8",
  authDomain: "book-list-firebase-app.firebaseapp.com",
  projectId: "book-list-firebase-app",
  storageBucket: "book-list-firebase-app.firebasestorage.app",
  messagingSenderId: "993593824738",
  appId: "1:993593824738:web:899024e1ae727a5ceb95bb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);