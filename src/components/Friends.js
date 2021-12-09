import React, { useState }from 'react';
import { Redirect } from 'react-router';
import { Image } from 'react-bootstrap'


function GetFriend(props){
    let friend = props.friend;
    let handleClick = () => {
        let name = friend["First Name"] + "-"+ friend["Last Name"]
        props.handleClick(name);
    }
    return (
        <button
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-start container"
            aria-label="friend" onClick={handleClick}>
            {/* <span className="material-icons account-circle">account_circle</span> */}
            <Image src={friend["Profile Pic"]}
                        alt={friend["Profile Pic"]} className="small-profile-pic" roundedCircle/>

            <div className="ms-2 me-auto">
                <div className="fw-bold">{friend["First Name"] + " "+ friend["Last Name"]}</div>
                <div className="listening">
                    <span className="material-icons music-note">music_note</span>
                    <em>{friend["Listening"]["Track Name"]}</em>
                </div>
            </div>
        </button>
    )
}

function Friends(props) {  
    let [redirectTo, setRedirectTo] = useState(undefined);
    const handleClick = (name) => {
        setRedirectTo(name);
    }
    let friends = props.friends;
    if(redirectTo != null) {
        return <Redirect push to={"/profile/" + redirectTo}/>
    } else {
        if(props.sidebarClicked) {
            return(
            
                <section className="container">
                    <h1 className="text-center mt-5 mb-3 font-weight-bold">Friends</h1>
                    <ul className="list-group list-group-flush">
                        {friends.map((friend, id) => <GetFriend key={id} friend={friend} handleClick={handleClick}/>)}
                    </ul>
                </section>
            );
        } else {
            return(
            
                <section className="sidebar d-none d-lg-block border-left">
                    <h1 className="text-center mt-5 mb-3 font-weight-bold">Friends</h1>
                    <ul className="list-group list-group-flush">
                        {friends.map((friend, id) => <GetFriend key={id} friend={friend} handleClick={handleClick}/>)}
                    </ul>
                </section>
            );
        }
        
    }
    
}
export default Friends;