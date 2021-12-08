import React from 'react';
import { useParams } from 'react-router';
import _ from 'lodash';
import { Image } from 'react-bootstrap';





function Profile(props) {
    let userName = useParams().userName; //REPLACE THIS WITH CORRECT VALUE
    userName = userName.split("-")
    let firstName = userName[0];
    let lastName = userName[1];
    console.log(userName);
    let user =  _.find(props.peopleData, {"First Name": firstName, "Last Name": lastName});
    console.log(user);
    let profilePic = user["Profile Pic"];

    return (
        <div className="container">
            <Image className="profile-pic" src={profilePic} alt={profilePic} rounded/>
            {JSON.stringify(user)}
            
        </div>
    );
}
export default Profile;