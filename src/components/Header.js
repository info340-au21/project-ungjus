import React from 'react';
import { NavLink} from 'react-router-dom';


function Header(props) {  
    return(
        <header>
            <div className="container">
                <h1>Waves</h1>
                <p><em>Wave your hands through the beat of the music</em></p>
                {(props.loggedIn)? "" : <NavLink to="/signUp"><button className="sign-up btn btn-lg btn-light" type="button"> Sign Up Now</button></NavLink>}
            </div>
        </header>
    );
}
export default Header;