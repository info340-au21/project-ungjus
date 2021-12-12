import React from 'react';
import { useState } from 'react';
import { UserCard } from './UserPosts';
import { Alert } from 'react-bootstrap';

export function SearchForm(props) {

    const[queryText, setQueryText] = useState('');
    // const[haveCard, setHaveCard] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (event) => {
        setQueryText(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        SearchKeyWord(queryText);
    }

    function SearchKeyWord(inputText) {
        const posts = props.title;
        //const genre = props.songGenre;
        const lowercasedSearchInput = inputText.toLowerCase();
        console.log(lowercasedSearchInput);
        const filteredPosts = posts.filter((post) =>
            post.title.toLowerCase().includes(lowercasedSearchInput)
        );
    
        if (filteredPosts) {
            filteredPosts.map((post) => {
                return <UserCard postInfo={post} key={post.postNumber}/>
            })
        } else {
            setErrorMessage("No result found.");
            return <Alert variant="danger" dismissible onClose={() => setErrorMessage(null)}>{errorMessage}</Alert>
        }
    
    }

    return(                
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <label htmlFor="search" hidden> Search for something! </label>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={queryText} onChange={handleChange}/>
            <button className="btn my-2 my-sm-0 search" type="submit">
                <span className="material-icons search" aria-label="Search Button">search</span>
            </button>
        </form>
        
    );
}
