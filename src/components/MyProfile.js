import React from 'react';
import { Image } from 'react-bootstrap';
import { Redirect } from 'react-router';


function MyProfile(props) { 
    if (!props.loggedIn){
        return <Redirect to="/signUp"/>
    }
    let user = props.user;
    
    let profilePic = user["Profile Pic"];
    let gender = user["Gender"].charAt(0);

    return(
        <div className="container userProfile">
            <div className="header">
                <h1>{user["First Name"] + " " + user["Last Name"]}</h1>
            </div>
            <div className='container main'>
                <Image className="profile-pic" src={profilePic} alt={profilePic} rounded/>
                <div className="content">
                    <h2>{user.Age + " " + gender} </h2>
                    <p >{user.Email}</p>                
                </div> 
            </div>
            

        </div>
    );
    
    
}
export default MyProfile;