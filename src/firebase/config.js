import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDACPjmHWl3vd2OUED4PItHCLPmHG81HYQ",
  authDomain: "halalitcar.firebaseapp.com",
  projectId: "halalitcar",
  storageBucket: "halalitcar.appspot.com",
  messagingSenderId: "191051081126",
  appId: "1:191051081126:web:f7bbc0ecf07bda6ab69b67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
