import React, { useState, useEffect } from 'react';
import { Alert, Button, Image } from 'react-bootstrap';
import { Redirect } from 'react-router';
import _ from 'lodash';

function GetPerson(props){
    let person = props.person;
    let [follow, setFollow] = useState(person.Following);
    
    let handleFollow = () => {
        if (follow) {
            person.Following = false;
            setFollow(false);
        } else {
            person.Following = true;
            setFollow(true);
        }
        props.handleFollowing(person);
    }
    let handleClick = () => {
        let name = person["First Name"] + "-"+ person["Last Name"]
        props.handleClick(name);
    }
    return (
        <div className="container connect-page">
                <button className="list-group-item list-group-item-action d-flex container"
                    aria-label="person" onClick={handleClick}>
                        <Image src={person["Profile Pic"]} alt={person["Profile Pic"]} 
                                className="small-profile-pic mr-5" roundedCircle/>
                        
                        <div className="fw-bold mr-5">{person["First Name"] + " "+ person["Last Name"]}</div>
                        <div className="listening mr-auto ml-auto">
                            <span className="material-icons music-note">music_note</span>
                            <em>{person["Listening"]["Track Name"]}</em>
                        </div>
                </button>
                <Button className="follow"  disabled={!props.loggedIn} onClick={handleFollow}>{(follow) ? "Following": "Follow" }</Button>{' '}
        </div>
        
        
    )
}

function Connect(props) {
    const [people, setPeople] = useState(props.peopleData);
    const [errorMessage, setErrorMessage] = useState(null);
    let [redirectTo, setRedirectTo] = useState(undefined);
    const [isInitialRender, setIsInitialRender] = useState(true);

    
    useEffect(() => {
        if (isInitialRender) {
            setIsInitialRender(false);

            let tenPeople  = _.shuffle(people)
            tenPeople = tenPeople.slice(0, 10);
            setPeople(tenPeople)
        }
    },[people, isInitialRender])    

    const handleClick = (name) => {
        setRedirectTo(name);
    }

    const mapPeople = people.map((person, id) => <GetPerson key={id} person={person} handleClick={handleClick} handleFollowing={props.handleFollowing} loggedIn={props.loggedIn}/>)

    if(redirectTo != null) {
        return <Redirect push to={"/profile/" + redirectTo}/>
    }
    else {
        return (
    
            <div className="container">
                {errorMessage &&
                    <Alert variant="danger" dismissible onClose={() => setErrorMessage(null)}>{errorMessage}</Alert>}
                <h1 className="page-title">Connect With Others</h1>
                <ul className="list-group list-group-flush">
                    {mapPeople}
                </ul>
                <cite>
                    Data from: <a href="http://www.randat.com/">Random Data Generator</a> <a href="https://randomuser.me/photos">Random Profile Picture Generator</a>
                    
                </cite>  
            </div>

        );
    }
    
}
export default Connect;