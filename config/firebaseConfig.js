// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "working-a448d.firebaseapp.com",
  projectId: "working-a448d",
  storageBucket: "working-a448d.appspot.com",
  messagingSenderId: "972893924150",
  appId: "1:972893924150:web:7637483ff1de7570a52197",
  measurementId: "G-LFQSGN5KHQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
