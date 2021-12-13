import React from 'react';
import {NavLink} from 'react-router-dom'

function Footer() {  
    return(
        <footer>
            <NavLink to="/">
                <div className="logo">Waves</div>
            </NavLink>
            <p>&copy; Waves 2021</p>
    </footer>
    );
}
export default Footer;