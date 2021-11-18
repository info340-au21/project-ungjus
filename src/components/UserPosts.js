import React from 'react';
import Bernie from '../img/userprofiles/Profile-Sample-Bernie-Borges.png'
import Madeline from '../img/userprofiles/Profile-Sample-Madeline-Mann.jpeg';
import Rachel from '../img/userprofiles/Profile-Sample-Rachel-M.jpeg';
import Tynan from '../img/userprofiles/Profile-Sample-Tynan-Allan.jpeg';

function UserPosts(props) {  
    return(
        <div className="row mx-auto">
            <div className="col-sm-12 col-lg-5">
                <div className="card mb-4 shadow-sm p-3 mb-5 bg-white rounded">
                    <img className="btn mx-auto" data-bs-toggle="offcanvas" href="#content-one" role="button"
                        src="https://static.billboard.com/files/media/24-Troye-Sivan-Blue-Neighbourhood-best-album-art-2015-billboard-1500-300x300.jpg"
                        alt="The album cover of Troye Sivan' Blue Neighbourhood"/>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="content-one">
                        <div className="offcanvas-header">
                            <h3 className="offcanvas-title" id="content-one">Found this hidden gem!</h3>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <span className="border-bottom mx-3">
                            <div className="media mt-3">
                                <img src={Bernie}
                                    alt="Bernie" className="profile rounded-circle"/>
                                <div className="media-body">
                                    <div className="d-flex justify-content-between mt-1">
                                        <p className="ml-2">Bernie Borges</p>
                                        <p><em className="text-right">Posted: 10 mins ago</em></p>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <div className="offcanvas-body">

                            <img src="https://static.billboard.com/files/media/24-Troye-Sivan-Blue-Neighbourhood-best-album-art-2015-billboard-1500-300x300.jpg"
                                alt="The album cover of Troye Sivan' Blue Neighbourhood"/>
                            <p><em>Blue Neighbourhood(Album) - Troye Sivan</em></p>
                            <ul className="canvas-ul">
                                <li>Release Year: 2015</li>
                                <li>Duration: 36 min 54 sec</li>
                                <li>Genre:</li>
                                <ul>
                                    <li>Electropop</li>
                                    <li>Gloom-pop</li>
                                    <li>Synth-pop</li>
                                </ul>
                            </ul>
                            <p className="font-weight-bold">I just recently found this album recently!</p>
                        </div>
                    </div>
                    <h2 className="card-title">Found this hidden gem!</h2>
                    <p className="card-text">I just recently found this album recently!</p>
                    <span className="border-top">
                        <div className="media mt-3">
                            <img src={Bernie} alt="Bernie "
                                className="profile rounded-circle"/>
                            <div className="media-body">
                                <div className="d-flex justify-content-between mt-1">
                                    <p className="ml-2">Bernie Borges</p>
                                    <p><em className="text-right">Posted: 10 mins ago</em></p>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>

            <div className="col-sm-12 col-lg-5">
                <div className="card mb-4 shadow-sm p-3  bg-white rounded">
                    <img className="btn mx-auto" data-bs-toggle="offcanvas" href="#content-two" role="button"
                        src="https://upload.wikimedia.org/wikipedia/en/7/70/I_Knew_You_Were_Trouble.png"
                        alt="The album cover of Taylor Swift's I Knew You Were Trouble"/>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="content-two">
                        <div className="offcanvas-header">
                            <h3 className="offcanvas-title" id="content-two">All Time Classic</h3>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <span className="border-bottom mx-3">
                            <div className="media mt-3">
                                <img src={Madeline}
                                    alt="Madeline " className="profile rounded-circle"/>
                                <div className="media-body">
                                    <div className="d-flex justify-content-between mt-1">
                                        <p className="ml-2">Madeline Mann</p>
                                        <p><em className="text-right">Posted: 53 mins ago</em></p>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <div className="offcanvas-body">
                            <img src="https://upload.wikimedia.org/wikipedia/en/7/70/I_Knew_You_Were_Trouble.png"
                                alt="The album cover of Taylor Swift's I Knew You Were Trouble"/>
                            <p><em>I Knew You Were Trouble - Taylor Swift</em></p>
                            <ul className="canvas-ul">
                                <li>Release Year: 2012</li>
                                <li>Duration: 3 min 39 sec</li>
                                <li>Genre:</li>
                                <ul>
                                    <li>Pop Rock</li>
                                    <li>Dance-pop</li>
                                </ul>
                            </ul>
                            <p className="font-weight-bold">You never can't get old of Taylor Swift.</p>
                        </div>
                    </div>
                    <h2 className="card-title">All Time Classic</h2>
                    <p className="card-text">You never can't get old of Taylor Swift.</p>
                    <span className="border-top">
                        <div className="media mt-3">
                            <img src={Madeline} alt="Madeline "
                                className="profile rounded-circle"/>
                            <div className="media-body">
                                <div className="d-flex justify-content-between mt-1">
                                    <p className="ml-2">Madeline Mann</p>
                                    <p><em className="text-right">Posted: 53 mins ago</em></p>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>

            <div className="col-sm-12 col-lg-5">
                <div className="card mb-4 shadow-sm p-3 mb-5 bg-white rounded">
                    <img className="btn mx-auto" data-bs-toggle="offcanvas" href="#content-three" role="button"
                        src="https://upload.wikimedia.org/wikipedia/en/1/1a/Portugal._The_Man_Woodstock_album_cover.jpg"
                        alt="The album cover of Portugal.The Man's Woodstock"/>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="content-three">
                        <div className="offcanvas-header">
                            <h3 className="offcanvas-title" id="content-three">Look at the car!</h3>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <span className="border-bottom mx-3">
                            <div className="media mt-3">
                                <img src={Rachel}
                                    alt="Rachel " className="profile rounded-circle"/>
                                <div className="media-body">
                                    <div className="d-flex justify-content-between mt-1">
                                        <p className="ml-2">Rachel Montanez</p>
                                        <p><em className="text-right">Posted: 2 hours ago</em></p>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <div className="offcanvas-body">
                            <img src="https://upload.wikimedia.org/wikipedia/en/1/1a/Portugal._The_Man_Woodstock_album_cover.jpg"
                                alt="The album cover of Portugal.The Man's Woodstock"/>
                            <p><em>Woodstock(Album) - Portugal. The Man discrography</em></p>
                            <ul className="canvas-ul">
                                <li>Release Year: 2017</li>
                                <li>Duration: 38 min 35 sec</li>
                                <li>Genre:</li>
                                <ul>
                                    <li>Pop</li>
                                </ul>
                            </ul>
                            <p className="font-weight-bold">The album is sick! I also like how the car is on
                                fire</p>
                        </div>
                    </div>
                    <h2 className="card-title">Look at the car!</h2>
                    <p className="card-text">The album is sick! I also like how the car is on fire</p>
                    <span className="border-top">
                        <div className="media mt-3">
                            <img src={Rachel}
                                alt="Rachel " className="profile rounded-circle"/>
                            <div className="media-body">
                                <div className="d-flex justify-content-between mt-1">
                                    <p className="ml-2">Rachel Montanez</p>
                                    <p><em className="text-right">Posted: 2 hours ago</em></p>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
            <div className="col-sm-12 col-lg-5">
                <div className="card mb-4 shadow-sm p-3 mb-5 bg-white rounded">
                    <img className="btn mx-auto" data-bs-toggle="offcanvas" href="#content-four" role="button"
                        src="http://crownnote.com/sites/default/files/styles/album_artwork__300x300_/public/asea.jpg?itok=6E-K-1Nf"
                        alt="The album cover of Alvaro Soler's Eterno Agosto"/>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="content-four">
                        <div className="offcanvas-header">
                            <h3 className="offcanvas-title" id="content-four">Great Music</h3>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <span className="border-bottom mx-3">
                            <div className="media mt-3">
                                <img src={Tynan} alt="Tynan "
                                    className="profile rounded-circle"/>
                                <div className="media-body">
                                    <div className="d-flex justify-content-between mt-1">
                                        <p className="ml-2">Tynan Allan</p>
                                        <p><em className="text-right">Posted: 3 hours ago</em></p>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <div className="offcanvas-body">
                            <img src="http://crownnote.com/sites/default/files/styles/album_artwork__300x300_/public/asea.jpg?itok=6E-K-1Nf"
                                alt="The album cover of Alvaro Soler's Eterno Agosto"/>
                            <p><em>Eterno Agosto(Album) - Alvaro Soler</em></p>
                            <ul className="canvas-ul">
                                <li>Release Year: 2015</li>
                                <li>Duration: 1 min 12 sec</li>
                                <li>Genre:</li>
                                <ul>
                                    <li>Pop</li>
                                </ul>
                            </ul>
                            <p className="font-weight-bold">I like the Album</p>
                        </div>
                    </div>
                    <h2 className="card-title">Great Music</h2>
                    <p className="card-text">I like the Album</p>
                    <span className="border-top">
                        <div className="media mt-3">
                            <img src={Tynan} alt="Tynan "
                                className="profile rounded-circle"/>
                            <div className="media-body">
                                <div className="d-flex justify-content-between mt-1">
                                    <p className="ml-2">Tynan Allan</p>
                                    <p><em className="text-right">Posted: 3 hours ago</em></p>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}
export default UserPosts;