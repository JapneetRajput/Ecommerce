 import { initializeApp } from "firebase/app";
 import { getFirestore } from '@firebase/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyAJS-TscGgZgvvLqDp0UojfHEeyq6iD72o",
  authDomain: "electronix-1f08b.firebaseapp.com",
  projectId: "electronix-1f08b",
  storageBucket: "electronix-1f08b.appspot.com",
  messagingSenderId: "733925107864",
  appId: "1:733925107864:web:24e774d2f4a9cba1d188ed",
  measurementId: "G-5J2F1M1Y8J"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();