import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0RY5H9HwH5tqg4nCTsLnOvci2zpRtWxs",
  authDomain: "todolist-39d79.firebaseapp.com",
  projectId: "todolist-39d79",
  storageBucket: "todolist-39d79.appspot.com",
  messagingSenderId: "967075920834",
  appId: "1:967075920834:web:e3272e40c256016ff0f45b",
  measurementId: "G-FE830MR97G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
