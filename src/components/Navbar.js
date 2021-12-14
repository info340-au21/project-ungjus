import React from 'react';
import { NavLink } from 'react-router-dom';
import { SearchForm } from './SearchForm';
import { Image } from 'react-bootstrap'

function Navbar(props) {
    const postData = props.postData;
    let profilePic = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
    if (props.user.photoURL !== null) {
        profilePic = props.user.photoURL;
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light nav-custom">
            <NavLink className="navbar-brand brand" to="/" aria-label="Logo and Home Button">
                <div className="logo">Waves</div>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ml-auto">

                    <li className="nav-item mr-5">
                        <NavLink className="navLink" to="/connect">Connect</NavLink>
                    </li>
                    <li className="nav-item mr-5">
                        <NavLink className="navLink" to="/explore">Explore</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="navLink" to="/about">About Us</NavLink>
                    </li>

                    {/* only show these link if small screen */}
                    <li className="nav-item sidebar-link">
                        <NavLink className="navLink" to="/topSongs" onClick={props.handleSidebarClicked}>Top Songs</NavLink>
                    </li>
                    <li className="nav-item sidebar-link">
                        <NavLink className="navLink" to="/friends" onClick={props.handleSidebarClicked}>Friends</NavLink>
                    </li>

                </ul>
                <SearchForm postData={postData} handleDisplayData={props.handleDisplayData}/>
                
                <NavLink className="btn my-2 my-sm-0 profile" to="/myProfile" aria-label="Profile">
                    {(props.loggedIn) ? <Image src={profilePic} alt={profilePic} 
                                className="small-profile-pic" roundedCircle/>: <span className="material-icons profile">account_circle</span>}
                    
                </NavLink>
            </div>
        </nav>
    );
}
export default Navbar;
