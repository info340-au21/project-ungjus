import React from 'react';

function GetFriend(props){
    let friend = props.friend;
    return (
        <button
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-start container"
            aria-label="friend">
            <span className="material-icons account-circle">account_circle</span>

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
    let friends = props.friends;
    return(
        <section className="sidebar d-none d-lg-block border-left">
            <h1 className="text-center mt-5 mb-3 font-weight-bold">Friends</h1>
            <ul className="list-group list-group-flush">
                {friends.map((friend, id) => <GetFriend key={id} friend={friend}/>)}
            </ul>
        </section>
    );
}
export default Friends;