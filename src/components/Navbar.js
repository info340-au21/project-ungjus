import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar(props) {
    
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
                        <NavLink className="navLink" to="/">Connect</NavLink>
                    </li>
                    <li className="nav-item mr-5">
                        <NavLink className="navLink" to="/explore">Explore</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="navLink" to="/about">About Us</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <a className="navLink" href="about.html">Top Songs</a>
                    </li>
                    <li className="nav-item">
                        <a className="navLink" href="about.html">Friends</a>
                    </li> */}

                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <label htmlFor="search" hidden> Search for something! </label>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn my-2 my-sm-0 search" type="submit">
                        <span className="material-icons search" aria-label="Search Button">search</span>
                    </button>
                </form>
                <a className="btn my-2 my-sm-0 profile" href="#" aria-label="Profile">
                    <span className="material-icons profile">account_circle</span>
                </a>
            </div>
        </nav>
    );
}
export default Navbar;