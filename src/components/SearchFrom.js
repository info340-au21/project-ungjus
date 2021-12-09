
import React from 'react';
import { useState } from 'react';

function SearchForm(props) {

    const[queryText, setQueryText] = useState('');

    const handleChange = (event) => {
        setQueryText(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        SearchKeyWord(queryText);
    }


    return(                
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit} props={SearchKeyWord}>
            <label htmlFor="search" hidden> Search for something! </label>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={queryText} onChange={handleChange}/>
            <button className="btn my-2 my-sm-0 search" type="submit">
                <span className="material-icons search" aria-label="Search Button">search</span>
            </button>
        </form>
    );
}

function SearchKeyWord(inputText) {
    const posts = props.title;
    //const genre = props.songGenre;
    const lowercasedSearchInput = inputText.toLowerCase();
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(lowercasedSearchInput)
    );

    filteredPosts.map((post) => {
        return <UserCard postInfo={post} key={post.postNumber}/>
    })

}