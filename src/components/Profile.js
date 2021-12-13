import React, { useState } from 'react';
import { useParams } from 'react-router';
import _ from 'lodash';
import { Image, Button } from 'react-bootstrap';

function Profile(props) {
    let userName = useParams().userName;

    userName = userName.split("-")
    let firstName = userName[0];
    let lastName = userName[1];
    let user =  _.find(props.peopleData, {"First Name": firstName, "Last Name": lastName});

    let [follow, setFollow] = useState(user.Following);
    let handleFollow = () => {
        props.handleFollowing(user);
        if (follow) {
            user.Following = false;
            setFollow(false);
        } else {
            user.Following = true;
            setFollow(true);
        }    
    }
    
    let profilePic = user["Profile Pic"];
    let gender = user["Gender"].charAt(0);
    return (
        <div className="container userProfile">
            <div className="header">
                <h1>{user["First Name"] + " " + user["Last Name"]}</h1>
                <Button disabled={!props.loggedIn} onClick={handleFollow}>{(follow) ? "Following": "Follow" }</Button>{' '}
            </div>
            <div className='container main'>
                <Image className="profile-pic" src={profilePic} alt={profilePic} rounded/>
                <div className="content">
                    <h2>{user.Age + " " + gender} </h2>
                    <p >{user.Email}</p>
                    <div className="music">
                        <span className="material-icons music-note">music_note</span>
                        <em>{user["Listening"]["Track Name"] + " - "+ user["Listening"]["Artist"]}</em>
                    </div>
                    
                </div>
                
                
                
            </div>
            

        </div>
    );
}
export default Profile;