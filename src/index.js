import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import POST_DATA from './data/data.json';


ReactDOM.render(
  <BrowserRouter>
    <App postData={POST_DATA}/>
  </BrowserRouter>,
  document.getElementById('root')
);
