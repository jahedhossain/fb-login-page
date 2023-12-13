import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBNRD05XWZLAYkPegTt6-2Ro7eK_XCKzas",
  authDomain: "fake-fb-ba176.firebaseapp.com",
  projectId: "fake-fb-ba176",
  storageBucket: "fake-fb-ba176.appspot.com",
  messagingSenderId: "946509984225",
  appId: "1:946509984225:web:025df52ef84abf059a62a0",
  measurementId: "G-WDVSLHE1TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
