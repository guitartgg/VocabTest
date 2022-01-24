import {initializeApp} from 'firebase/app'
// import {} from 'firebase/SERVICENAME'
// import {} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = initializeApp({
   // need connection to firebase here 
   apiKey: "AIzaSyBi9CnwIHvvDhfabn8LZ0sQXE0-ghW-2m0",
   authDomain: "vocab-77f73.firebaseapp.com",
   projectId: "vocab-77f73",
   storageBucket: "vocab-77f73.appspot.com",
   messagingSenderId: "286128000118",
   appId: "1:286128000118:web:5819ce79e0e32f6dfbe357",
   measurementId: "G-B26WQ7BB9W"
})

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);