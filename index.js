import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './src/App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsQSqGE1JS3_AgXBAmjkJUTQuN05GY_1M",
  authDomain: "chat-app-a3462.firebaseapp.com",
  databaseURL: "https://chat-app-a3462-default-rtdb.firebaseio.com",
  projectId: "chat-app-a3462",
  storageBucket: "chat-app-a3462.appspot.com",
  messagingSenderId: "525283744964",
  appId: "1:525283744964:web:78c7b87b1c6d9335917d91",
  measurementId: "G-5Y53MJW7TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)