import React, {useState} from 'react';
import { Redirect } from 'react-router';


function SignUp(props) {
    let [input, setInput] = useState({});
    let [submitted, setSubmitted] = useState(false);
    let [selectedImage, setSelectedImage] = useState(null);
 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSetUser({...input, "Profile Pic": URL.createObjectURL(selectedImage)});
        setSubmitted(true);   
    }

    if (submitted) {
        return <Redirect to="/"/>
    } else {
        return (
            <div id="signUp" className="container m-2">
                <h1>Sign Up</h1>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <label>First name:
                    <input 
                        type="text" 
                        name="First Name" 
                        value={input["First Name" ] || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    <br/>
                    <label>Last name:
                    <input 
                        type="text" 
                        name="Last Name" 
                        value={input["Last Name" ] || ""} 
                        onChange={handleChange}
                    />
                    </label>
                    <br/>
                    <label>Age:
                        <input 
                        type="number" 
                        name="Age" 
                        min="0"
                        value={input.Age || ""} 
                        onChange={handleChange}
                        />
                    </label>
                    <br/>
                    <label>Gender:
                        <select name="Gender" value={input.Gender || ""} onChange={handleChange}>
                            <option value=""></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <br/>
                    <label>Email:
                        <input 
                        type="email" 
                        name="Email" 
                        value={input.Email || ""} 
                        onChange={handleChange}
                        />
                    </label>
                    <br/>
                    <label>Upload a Profile Picture:
                        <input 
                        type="file" 
                        name="Profile Pic" 
                        onChange={(event) => {
                            setSelectedImage(event.target.files[0]);
                          }}
                        />
                    </label>
                    <br/>
                    <label>Password:
                        <input 
                        type="password" 
                        name="Password" 
                        value={input.Password || ""} 
                        onChange={handleChange}
                        />
                    </label>
                    <div className="my-2">
                        <input type="submit" />
                    </div>
                </form>        
            </div>
        );
    }
    
}
export default SignUp;