import React from 'react';

function Header(props) {  
    return(
        <header>
            <div className="container">
                <h1>Waves</h1>
                <p><em>Wave you hands through the beat of the music</em></p>
                <button className="sign-up btn btn-lg btn-light" type="button"> Sign Up Now</button>
            </div>
        </header>
    );
}
export default Header;