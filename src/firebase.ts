import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOgDT1K4gmQFA8oN0mvdex2EeK2_48yK8",
  authDomain: "would-you-rather-4aed6.firebaseapp.com",
  projectId: "would-you-rather-4aed6",
  storageBucket: "would-you-rather-4aed6.appspot.com",
  messagingSenderId: "599157198669",
  appId: "1:599157198669:web:f8fcd574e4f5ca2971f104",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
