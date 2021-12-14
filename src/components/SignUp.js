import React from 'react';
import { Redirect } from 'react-router';
import StyledFireBaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';

// Source code from Lecture 12/06/2021 From Joel Ross

const firebaseUIConfig = {
    signInOptions: [
        {provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true},
        GoogleAuthProvider.PROVIDER_ID,
    ],
    signInFlow: 'popup',
    credentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResult: () => {
            return false;
        }
    }
}
function SignUp(props) {
    const auth = getAuth();
    if(props.loggedIn) {
        return <Redirect to="/"/>;
    } else {
        return <StyledFireBaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth}/>;
    }
    
}
export default SignUp;