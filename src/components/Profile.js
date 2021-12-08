import React from 'react';
import { useParams } from 'react-router';
import _ from 'lodash';




function Connect(props) {
    let userName = useParams().userName; //REPLACE THIS WITH CORRECT VALUE
    userName = userName.split("-")
    let firstName = userName[0];
    let lastName = userName[1];

    let user =  _.find(props.peopleData, {"First Name": firstName, "Last Name": lastName});
    
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
}
export default Connect;