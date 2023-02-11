import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDJalR3cj4oPPx4N5jTO4fWmHZ3umlbFw8",
  authDomain: "agbackend-94d37.firebaseapp.com",
  projectId: "agbackend-94d37",
  storageBucket: "agbackend-94d37.appspot.com",
  messagingSenderId: "825689430506",
  appId: "1:825689430506:web:47d82723ce438efe5dfa93"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
