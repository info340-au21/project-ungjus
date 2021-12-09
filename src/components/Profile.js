import React, { useState } from 'react';
import { useParams } from 'react-router';
import _ from 'lodash';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';





function Profile(props) {
    let userName = useParams().userName;

    userName = userName.split("-")
    let firstName = userName[0];
    let lastName = userName[1];
    let user =  _.find(props.peopleData, {"First Name": firstName, "Last Name": lastName});

    let [follow, setFollow] = useState(user.Following);
    console.log(user);
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

    return (
        <div className="container">
            <Image className="profile-pic" src={profilePic} alt={profilePic} rounded/>
            {JSON.stringify(user)}
            <Button onClick={handleFollow}>{(follow) ? "Following": "Follow"}</Button>{' '}

        </div>
    );
}
export default Profile;