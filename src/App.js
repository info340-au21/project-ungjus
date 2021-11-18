import React from 'react';
import Navbar from './components/Navbar';
import WritePost from './components/WritePost';
import Footer from './components/Footer';
import TopSongs from './components/TopSongs';
import Header from './components/Header';
import UserPosts from './components/UserPosts';
import Friends from './components/Friends';

function App(props) {  
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Navbar/>
                <main className="mainContainer">
                    <TopSongs/>
                    <section className="containter mt-5">
                        <Header/>
                        <UserPosts/>
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
  