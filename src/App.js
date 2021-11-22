import React from 'react';
import Navbar from './components/Navbar';
import WritePost from './components/WritePost';
import Footer from './components/Footer';
import TopSongs from './components/TopSongs';
import Header from './components/Header';
import UserPosts from './components/UserPosts';
import Friends from './components/Friends';

function App(props) {  
    const postData = props.postData; // Declare for now, Most likely be using UseState
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Navbar/>
                <main className="mainContainer">
                    <TopSongs/>
                    <section className="containter mt-5">
                        <Header/>
                        <UserPosts postData={postData}/>
                    </section>
                    <Friends/>
                </main>
            </div>
            <WritePost/>
            <Footer/>
        </div>


    );
}
  
export default App;
  