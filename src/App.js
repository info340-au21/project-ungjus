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
import MyProfile from './components/MyProfile';
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
    const [sidebarClicked, setSidebarClicked] = useState(false);

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
        try {
            const data = await d3.json("/data/people.json");
            setPeopleData(data);

        } catch (error) {
            setErrorMessage(error);
        }
        
        
    }
    useEffect(() => {
        fetchData();
        
    }, [])

    const handlePostData = (data) => {
        setPostData(data);
    }

    const handlePeopleData = (data) => {
        setPeopleData(data);
    }

    const checkIsFriend = (person) =>{
        let bool = friends.some((friend) => friend["First Name"] === person["First Name"] &&
                                        friend["Last Name"] === person["Last Name"])
        return bool;
    }

    const handleFollowing = (person) => {
        if( checkIsFriend(person)){
            let removedFriends = friends.filter((friend) => friend["First Name"] !== person["First Name"] &&
                                                            friend["Last Name"] !== person["Last Name"]);
            setFriends(removedFriends);
        } else {
            setFriends([...friends, person]);
        }
        
    }  
    // const handleSidebarClicked = () => {
    //     if(sidebarClicked) {
    //         setSidebarClicked(false);
    //     } else {
    //         setSidebarClicked(true);
    //     }
        
    // }   
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Navbar handleSidebarClicked={setSidebarClicked}/>
                {errorMessage && 
                    <Alert variant="danger" dismissible onClose={() => setErrorMessage(null)}>{errorMessage}</Alert>
                }
                <Switch>
                    <Route exact path="/"> <Main postData={postData} setPostData= {handlePostData} songData={spotifyData} friends={friends}/></Route>
                    <Route path="/connect"> <Connect peopleData={peopleData} setPeopleData ={handlePeopleData} handleFollowing={handleFollowing}/> </Route>
                    <Route path="/explore"> <Explore songData={spotifyData}/> </Route>
                    <Route path="/about"> <About/> </Route>
                    <Route path="/friends"> <Friends friends={friends} sidebarClicked={sidebarClicked}/> </Route>
                    <Route path="/topSongs"> <TopSongs songData={spotifyData} sidebarClicked={sidebarClicked}/> </Route>
                    <Route path="/myProfile"> <MyProfile/> </Route>
                    <Route path={"/profile/:userName"}><Profile peopleData={peopleData} handleFollowing={handleFollowing}/></Route>
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
    const addPost = (titleContent, textContent, albumContent) => {
        const newPost = {
            title: titleContent,
            user: "to be named", //placeHolder
            userPic: "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg", //placeHolder
            timePost: Date().toString(),
            albumPhoto: albumContent.artworkUrl100.replace('100x100bb', '400x400bb'),
            songTitle: albumContent.collectionName,
            songArtist: albumContent.artistName,
            songYear: albumContent.releaseDate.substring(0, 4),
            comment: textContent,
            postNumber: Date.now(),
            collectionID: albumContent.collectionId
        }
        const newPostData = [...props.postData, newPost];
        props.setPostData(newPostData);
    }

    return (
        <div>
            <main className="mainContainer">
                <TopSongs songData={props.songData}/>
                <section className="containter mt-5">
                    <Header/>
                    <UserPosts postData={props.postData}/>
                    <WritePost onSubmit={addPost}/>
                </section>
                <Friends friends={props.friends}/>
            </main>
            
        </div>
        
    )
}
  