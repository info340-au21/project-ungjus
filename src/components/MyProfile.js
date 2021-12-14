import React, {useState, useEffect} from 'react';
import { Image } from 'react-bootstrap';
import { Redirect } from 'react-router';

import { getAuth, signOut, updateProfile } from '@firebase/auth';
import {getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const handleSignOut = (event) => {
    signOut(getAuth());
}

function MyProfile(props) {
    const user = props.user;
    const [imageFile, setImageFile] = useState(undefined);
    let profilePic = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
    if (user.photoURL !== null) {
        profilePic = user.photoURL;
    }
    const [imageUrl, setImageUrl] = useState(profilePic);
    
    
    useEffect(() => {
      if(user && user.photoURL)
        setImageUrl(user.photoURL) //use user's photo if logged in
    }, [user])
  
    if (!props.loggedIn){
        return <Redirect to="/signUp"/>
    }

    //image uploading!
    const handleChange = (event) => {
      if(event.target.files.length > 0 && event.target.files[0]) {
        const imageFile = event.target.files[0];
        setImageFile(imageFile);
        setImageUrl(URL.createObjectURL(imageFile));
      }
    }
  
    const handleImageUpload = async (event) => {
      const storage = getStorage();
      const imageRef = ref(storage, "userImages/"+props.user.uid+".png")
  
      try {
          await uploadBytes(imageRef, imageFile)
          const url = await getDownloadURL(imageRef);
          await updateProfile(props.user, {
            photoURL: url,
        })
      } catch(error) {
        console.log(error.message);
      }
    }

    return(
        <div className="container userProfile">
            <div className="header">
                <h1>{user.displayName}'s Profile</h1>
                <button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out</button> 
            </div>
            <div className='container main'>
                <Image className="profile-pic" src={imageUrl} alt={imageUrl} rounded/>
                <div className="content">
                    <p >{user.email}</p>                
                </div>
            </div>
            <div className="mb-5 image-upload-form">
                <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
                <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
                <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
            </div>
        </div>
    );
    
    
}
export default MyProfile;