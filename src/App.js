import React from 'react';
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
    const songData = props.songData
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Navbar/>
                <Switch>
                    <Route exact path="/"> <Main postData={postData}/></Route>
                    <Route path="/explore"> <Explore songData={songData}/> </Route>
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
    const postData = props.postData;
    return (
        <div>
            <main className="mainContainer">
                <TopSongs/>
                <section className="containter mt-5">
                    <Header/>
                    <UserPosts postData={postData}/>
                </section>
                <Friends/>
            </main>
            <WritePost/>
        </div>
        
    )
}
  