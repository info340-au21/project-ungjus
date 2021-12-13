import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'whatwg-fetch'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEXFRuGNlP9Z3W3TRrA3tvK-dsZFukhi0",
  authDomain: "waves-app-info340.firebaseapp.com",
  databaseURL: "https://waves-app-info340-default-rtdb.firebaseio.com",
  projectId: "waves-app-info340",
  storageBucket: "waves-app-info340.appspot.com",
  messagingSenderId: "992835245723",
  appId: "1:992835245723:web:fd1853314f7f824d13583e",
  measurementId: "G-QXHRZB142G"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
