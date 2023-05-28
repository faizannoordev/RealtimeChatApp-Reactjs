import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './src/App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHA7DgPWvSz8FAgNrHZYshgc9Ou8NRWRU",
  authDomain: "react-chat-app-cb74e.firebaseapp.com",
  databaseURL: "https://react-chat-app-cb74e-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-cb74e",
  storageBucket: "react-chat-app-cb74e.appspot.com",
  messagingSenderId: "952520915220",
  appId: "1:952520915220:web:df0037e1e015d7f32bea01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)