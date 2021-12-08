import React, { useState, useEffect } from 'react';
import * as d3 from "d3";
import { Alert, Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
// import _ from 'lodash';

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
        <div
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-start container connect-page"
            aria-label="person">
            <Button onClick={handleClick}>
                <span className="material-icons account-circle">account_circle</span>

                <div className="fw-bold">{person["First Name"] + " "+ person["Last Name"]}</div>
            </Button>
            <div className="listening">
                <span className="material-icons music-note">music_note</span>
                <em>{person["Listening"]["Track Name"]}</em>
            </div>
            <Button onClick={handleFollow}>{(follow) ? "Following": "Follow"}</Button>{' '}
        </div>
    )
}

function Connect(props) {
    
    const [errorMessage, setErrorMessage] = useState(null);
    let [redirectTo, setRedirectTo] = useState(undefined);


    async function fetchPeople() {
        try {
            const data = await d3.json("/data/people.json");
            props.setPeopleData(data);

        } catch (error) {
            setErrorMessage(error);
        }
    }
    useEffect(() => {
        fetchPeople();

    },[])

    let people = props.peopleData;
    // people = _.shuffle(people)
    // people = people.slice(0, 10);
    

    const handleClick = (name) => {
        setRedirectTo(name);
    }

    if(redirectTo != null) {
        return <Redirect push to={"/profile/" + redirectTo}/>
    }
    else {
        return (
    
            <div>
                {errorMessage &&
                    <Alert variant="danger" dismissible onClose={() => setErrorMessage(null)}>{errorMessage}</Alert>}
    
                <ul className="list-group list-group-flush">
                    {people.map((person, id) => <GetPerson key={id} person={person} handleClick={handleClick} handleFollowing={props.handleFollowing}/>)}
                </ul>
            </div>
        );
    }
    
}
export default Connect;