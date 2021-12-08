import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WritePost from './components/WritePost';
import Footer from './components/Footer';
import TopSongs from './components/TopSongs';
import Header from './components/Header';
import UserPosts from './components/UserPosts';
import Friends from './components/Friends';
import { Switch, Route, Redirect } from 'react-router-dom';
import Explore from './components/Explore';
import About from './components/About';
import * as d3 from "d3";


function App(props) {  
    //const postData = props.postData; // Declare for now, Most likely be using UseState
    // const songData = props.songData;
    const [postData, setPostData] = useState([]);
    const [spotifyData, setSpotifyData] = useState([]);

    async function fetchData(){
        try {
            const data = await d3.json("/data/spotify-data.json");
            setSpotifyData(data);
        } catch (error) {
            console.log(error);
        }
        try {
            const data = await d3.json("/data/data.json");
            setPostData(data);
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(() => {
        fetchData();
        
    }, [])
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Navbar/>
                <Switch>
                    <Route exact path="/"> <Main postData={postData} songData={spotifyData}/></Route>
                    <Route path="/explore"> <Explore songData={props.spotifyData}/> </Route>
                    <Route path="/about"> <About/> </Route>
                    <Redirect to="/"/>
                </Switch>
            </div>
            
            <Footer/>
        </div>


    );
}
  
export default App;

function Main(props) {
    const [postData, setPostData,] = useState(props.postData);

    const addPost = (titleContent, textContent, albumContent) => {
        console.log(albumContent);
        const newPost = {
            title: titleContent,
            user: "to be named", //placeHolder
            userPic: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg", //placeHolder
            timePost: "un-named", //placeHolder or to be removed
            albumPhoto: albumContent.artworkUrl100.replace('100x100bb', '500x500bb'),
            songTitle: albumContent.collectionName,
            songArtist: albumContent.artistName,
            songYear: albumContent.releaseDate.substring(0, 4),
            songDuration: "infinite", //placeHolder
            songGenre: [], //placeHolder
            comment: textContent,
            postNumber: Date.now()
        }
        const newPostData = [...postData, newPost];
        setPostData(newPostData);
    }

    return (
        <div>
            <main className="mainContainer">
                <TopSongs songData={props.songData}/>
                <section className="containter mt-5">
                    <Header/>
                    <UserPosts postData={(postData.length == 0) ? props.postData:  postData}/>
                </section>
                <Friends/>
            </main>
            <WritePost onSubmit={addPost}/>
        </div>
        
    )
}
  