import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5IasDOrb4YDs3ObK22zRT33Cntgep0HM",
  authDomain: "crud-9a8fb.firebaseapp.com",
  databaseURL: "https://crud-9a8fb-default-rtdb.firebaseio.com",
  projectId: "crud-9a8fb",
  storageBucket: "crud-9a8fb.appspot.com",
  messagingSenderId: "582801962599",
  appId: "1:582801962599:web:4cf623ce26712d16a646c2",
  measurementId: "G-G4F5GLWXE8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
