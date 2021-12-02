import React, { useState } from 'react';
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


function App(props) {  
    const postData = props.postData; // Declare for now, Most likely be using UseState
    // const songData = props.songData;
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Navbar/>
                <Switch>
                    <Route exact path="/"> <Main postData={postData} songData={props.spotifyData}/></Route>
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
    const [postData, setPostData] = useState(props.postData);
    //const postData = props.postData;

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
        const newPostData = [...postData, newPost];
        setPostData(newPostData);
    }

    return (
        <div>
            <main className="mainContainer">
                <TopSongs songData={props.songData}/>
                <section className="containter mt-5">
                    <Header/>
                    <UserPosts postData={postData}/>
                </section>
                <Friends/>
            </main>
            <WritePost onSubmit={addPost}/>
        </div>
        
    )
}
  