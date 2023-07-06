import React from 'react';
import ReactDom from 'react-dom/client'
import App from './src/App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3i9NWXKfcnU382QlmQTS5oIw_WIHVckw",
    authDomain: "chatroom-9dfe0.firebaseapp.com",
    projectId: "chatroom-9dfe0",
    storageBucket: "chatroom-9dfe0.appspot.com",
    messagingSenderId: "576563157577",
    appId: "1:576563157577:web:f009dffa27196e95c23d98",
    measurementId: "G-LH3YRFDQR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <App />,
)