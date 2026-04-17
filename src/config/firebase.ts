import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase konfiguracija
const firebaseConfig = {
  apiKey: "AIzaSyBOG1TyQvTqBrljvaetqAiTT2SObYqKOe4",
  authDomain: "helloworld-d6cf3.firebaseapp.com",
  databaseURL: "https://helloworld-d6cf3-default-rtdb.firebaseio.com",
  projectId: "helloworld-d6cf3",
  storageBucket: "helloworld-d6cf3.firebasestorage.app",
  messagingSenderId: "5547576635",
  appId: "1:5547576635:web:3ae2abd72950da9a93fb1e",
  measurementId: "G-641E84M8B6"
};

// Inicijalizacija Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
