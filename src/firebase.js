// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxVGH2MUt62Ngbf3w_xYIQ_ALgTWBsFmY",
  authDomain: "web-class-361fc.firebaseapp.com",
  projectId: "web-class-361fc",
  storageBucket: "web-class-361fc.appspot.com",
  messagingSenderId: "508412262961",
  appId: "1:508412262961:web:4d34c2e39b4f55f53b3310",
  measurementId: "G-76X59B24TC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
