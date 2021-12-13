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
import SignUp from './components/SignUp'
import * as d3 from "d3";
import { Alert } from 'react-bootstrap';
import { getDatabase, ref, onValue, push as firebasePush } from 'firebase/database'


function App() {  
    //const postData = props.postData; // Declare for now, Most likely be using UseState
    // const songData = props.songData;
    const [postData, setPostData] = useState([]);
    const [displayData, setDisplayData] = useState([]);
    const [spotifyData, setSpotifyData] = useState([]);
    const [friends, setFriends] = useState([]);
    const [peopleData, setPeopleData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [sidebarClicked, setSidebarClicked] = useState(false);
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);

    //Load the firebase
    const db = getDatabase();
    const postsRef = ref(db, "allPosts");

    async function fetchData(){
        try {
            const data = await d3.json("/data/spotify-data.json");
            setSpotifyData(data);
        } catch (error) {
            setErrorMessage(error);
        }
        // try {
        //     const data = await d3.json("/data/data.json");
        //     setPostData(data);
        //     setDisplayData(data);
        // } catch (error) {
        //     setErrorMessage(error);
        // }
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
        
        //Extract the data
        const offFunction = onValue(postsRef, (snapshot) => {
            const allPosts = snapshot.val();
            // console.log(allPosts);
            const postKeys = Object.keys(allPosts);
            const postArray = postKeys.map((key) => {
                const thePost = allPosts[key];
                return thePost;
            })
            console.log(postArray);
            setPostData(postArray);
            setDisplayData(postArray);
            // console.log("PostData:", postData);
        })
        
        function cleanup() {
            offFunction();
        }
        return cleanup;
    }, [])

    const handleDisplayData = (data) => {
        setDisplayData(data);
    }

    const handlePeopleData = (data) => {
        setPeopleData(data);
    }

    const handleSetUser = (input) => {
        setUser(input);
        setLoggedIn(true);
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
                <Navbar handleSidebarClicked={setSidebarClicked} handleDisplayData={handleDisplayData} postData={postData} loggedIn={loggedIn} profilePic={user["Profile Pic"]}/>
                {errorMessage && 
                    <Alert variant="danger" dismissible onClose={() => setErrorMessage(null)}>{errorMessage}</Alert>
                }
                <Switch>
                    <Route exact path="/"> <Main postsRef={postsRef} postData={displayData} songData={spotifyData} friends={friends} loggedIn={loggedIn}/></Route>
                    <Route path="/connect"> <Connect peopleData={peopleData} setPeopleData ={handlePeopleData} handleFollowing={handleFollowing}/> </Route>
                    <Route path="/explore"> <Explore songData={spotifyData}/> </Route>
                    <Route path="/about"> <About/> </Route>
                    <Route path="/friends"> <Friends friends={friends} sidebarClicked={sidebarClicked}/> </Route>
                    <Route path="/topSongs"> <TopSongs songData={spotifyData} sidebarClicked={sidebarClicked}/> </Route>
                    <Route path="/signUp"><SignUp handleSetUser={handleSetUser}/></Route>
                    <Route path="/myProfile"> <MyProfile user={user} loggedIn={loggedIn}/> </Route>
                    <Route path={"/profile/:userName"}><Profile peopleData={peopleData} handleFollowing={handleFollowing}/> </Route>
                    <Redirect to="/"/>
                </Switch>
            </div>
            
            <Footer/>
        </div>


    );
}
  
export default App;

function Main(props) {
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
        // const newPostData = [...props.postData, newPost];
        // props.setPostData(newPostData); //push the local json file
        firebasePush(props.postsRef, newPost); //push the firebase
    }

    return (
        <div>
            <main className="mainContainer">
                <TopSongs songData={props.songData}/>
                <section className="mt-5">
                    <Header loggedIn={props.loggedIn}/>
                    <UserPosts postData={props.postData}/>
                    <WritePost onSubmit={addPost}/>
                </section>
                <Friends friends={props.friends}/>
            </main>
            
        </div>
        
    )
}
  