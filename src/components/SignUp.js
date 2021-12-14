import React, {useState} from 'react';
import { Redirect } from 'react-router';
import { Alert } from 'react-bootstrap';

function SignUp(props) {
    let [input, setInput] = useState({});
    let [submitted, setSubmitted] = useState(false);
    let [selectedImage, setSelectedImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const formKeys = ["First Name", "Last Name", "Age", "Gender", "Email", "Password"]
 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let incompleteKeys = "Please Fill Out: ";
        let completed = true;

        

        // checks that all text boxes all filled
        for(const key of formKeys) {
            if(!(key in input) || input[key] ===  ""){
                incompleteKeys += key + ", "
                completed = false;
            }
        }
        // special case for profile pic
        try {
            props.handleSetUser({...input, "Profile Pic": URL.createObjectURL(selectedImage)});

        } catch {
            incompleteKeys += "Profile Picture, "
            completed = false;
        }

        if(completed){
            setSubmitted(true);
        } else {
            setErrorMessage(incompleteKeys.substring(0, incompleteKeys.length - 2));
        }
        
        
    }
    if (submitted) {
        return <Redirect to="/"/>
    } else {
        return (
            <div className="container">
                <h1>Sign Up</h1>
                
                {(errorMessage) &&
                    <Alert className="text-left" variant="danger" dismissible onClose={() => setErrorMessage(null)}>{errorMessage}</Alert>
                }
                
                <hr/>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="First Name">First name:
                    <input 
                        type="text" 
                        name="First Name" 
                        value={input["First Name" ] || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    <br/>
                    <label htmlFor="Last Name">Last name:
                    <input 
                        type="text" 
                        name="Last Name" 
                        value={input["Last Name" ] || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    <br/>
                    <label htmlFor="Age">Age:
                        <input 
                        type="number" 
                        name="Age" 
                        min="0"
                        value={input.Age || ""} 
                        onChange={handleChange}
                        />
                    </label>
                    <br/>
                    <label htmlFor="Gender">Gender:
                        <select name="Gender" value={input.Gender || ""} onChange={handleChange}>
                            <option value=""></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <br/>
                    <label htmlFor="Email">Email:
                        <input 
                        type="email" 
                        name="Email" 
                        value={input.Email || ""} 
                        onChange={handleChange}
                        />
                    </label>
                    <br/>
                    <label htmlFor="Profile Pic">Upload a Profile Picture:
                        <input 
                        type="file" 
                        name="Profile Pic" 
                        onChange={(event) => {
                            setSelectedImage(event.target.files[0]);
                          }}
                        />
                    </label>
                    <br/>
                    <label htmlFor="Password">Password:
                        <input 
                        type="password" 
                        name="Password" 
                        value={input.Password || ""} 
                        onChange={handleChange}
                        />
                    </label>
                    <input type="submit" />
                </form>        
            </div>
        );
    }
    
}
export default SignUp;