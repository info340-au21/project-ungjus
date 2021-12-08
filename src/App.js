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
import Connect from './components/Connect';
import About from './components/About';
import Profile from './components/Profile';
import * as d3 from "d3";
import { Alert } from 'react-bootstrap';


function App() {  
    //const postData = props.postData; // Declare for now, Most likely be using UseState
    // const songData = props.songData;
    const [postData, setPostData] = useState([]);
    const [spotifyData, setSpotifyData] = useState([]);
    const [friends, setFriends] = useState([]);
    const [peopleData, setPeopleData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    async function fetchData(){
        try {
            const data = await d3.json("/data/spotify-data.json");
            setSpotifyData(data);
        } catch (error) {
            setErrorMessage(error);
        }
        try {
            const data = await d3.json("/data/data.json");
            setPostData(data);
        } catch (error) {
            setErrorMessage(error);
        }
        try {
            const data = await d3.json("/data/friends.json");
            setFriends(data);
        } catch (error) {
            setErrorMessage(error);
        }
        
        
    }
    useEffect(() => {
        fetchData();
        
    }, [])
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Navbar/>
                {errorMessage && 
                    <Alert variant="danger" dismissible onClose={() => setErrorMessage(null)}>{errorMessage}</Alert>
                }
                <Switch>
                    <Route exact path="/"> <Main postData={postData} setPostData= {setPostData} songData={spotifyData} friends={friends}/></Route>
                    <Route path="/connect"> <Connect peopleData={peopleData} setPeopleData ={setPeopleData}/> </Route>
                    <Route path="/explore"> <Explore songData={spotifyData}/> </Route>
                    <Route path="/about"> <About/> </Route>
                    <Route path={"/profile/:userName"}><Profile peopleData={peopleData}/></Route>
                    <Redirect to="/"/>
                </Switch>
            </div>
            
            <Footer/>
        </div>


    );
}
  
export default App;

function Main(props) {
    // const [postData, setPostData] = useState(props.postData);
    // console.log(props.songData);
    const addPost = (titleContent, textContent) => {
        const newPost = {
            title: titleContent,
            user: "to be named", //placeHolder
            userPic: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg", //placeHolder
            timePost: "un-named", //placeHolder or to be removed
            albumPhoto: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440", //placeHolder
            songTitle: "doesn't have one", //placeHolder
            songArtist: "unknown", //placeHolder
            songYear: "3000", //placeHolder
            songDuration: "infinite", //placeHolder
            songGenre: [], //placeHolder
            comment: textContent,
            postNumber: Date.now()
        }
        const newPostData = [...props.postData, newPost];
        props.setPostData(newPostData);
    }
    // const getRandomSong = () => {

    // }

    return (
        <div>
            <main className="mainContainer">
                <TopSongs songData={props.songData}/>
                <section className="containter mt-5">
                    <Header/>
                    <UserPosts postData={props.postData}/>
                </section>
                <Friends friends={props.friends}/>
            </main>
            <WritePost onSubmit={addPost}/>
        </div>
        
    )
}
  