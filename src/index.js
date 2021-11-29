import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import POST_DATA from './data/data.json';
import SONG_DATA from './data/songs.json';
import SPOTIFY_DATA from './data/spotify-data.json'


ReactDOM.render(
  <BrowserRouter>
    <App postData={POST_DATA} songData={SONG_DATA} spotifyData={SPOTIFY_DATA}/>
  </BrowserRouter>,
  document.getElementById('root')
);
