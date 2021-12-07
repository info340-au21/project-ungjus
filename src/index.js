import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'whatwg-fetch'
import POST_DATA from './data/data.json';
import SPOTIFY_DATA from './data/spotify-data.json'


ReactDOM.render(
  <BrowserRouter>
    <App postData={POST_DATA} spotifyData={SPOTIFY_DATA}/>
  </BrowserRouter>,
  document.getElementById('root')
);
