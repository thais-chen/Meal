import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8LXWNV5OhE7HbklA4vq8zgXzM_feze3M",
  authDomain: "mealease-7bf7f.firebaseapp.com",
  databaseURL: "https://mealease-7bf7f-default-rtdb.firebaseio.com",
  projectId: "mealease-7bf7f",
  storageBucket: "mealease-7bf7f.appspot.com",
  messagingSenderId: "792708407205",
  appId: "1:792708407205:web:ffb058b5badb6eee1c124c",
  measurementId: "G-3D6BSF0991",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
