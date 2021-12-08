import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';

import AlbumSearch from "./AlbumSearch";
import AlbumList from "./AlbumList";

const ALBUM_QUERY_TEMPLATE = "https://itunes.apple.com/search?limit=25&term={searchTerm}&entity=album&attribute=allArtistTerm"

function WritePost(props) {  
    const [postValue, setPostValue] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [albumInfo, setAlbumInfo] = useState({});
    const [albumData, setAlbumData] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isSearching, setSearching] = useState(false);

    const handleInputPost = (event) => {
        setPostValue(event.target.value);
    }

    const handleInputTitle = (event) => {
        setPostTitle(event.target.value);
    }

    const handleInputAlbum = (event) => {
        setAlbumInfo(event);
    }

    const handleSubmit = (event) => {
        props.onSubmit(postTitle, postValue, albumInfo);
        setPostValue('');
        setPostTitle('');
        setAlbumInfo({});
    }

    function fetchAlbumList(searchTerm) { 
        setSearching(true);
        fetch(ALBUM_QUERY_TEMPLATE.replace('{searchTerm}', searchTerm))
          .then((res) => res.json())
          .then((data) => {
            if(data.results.length === 0) {
              setErrorMessage("No results found.");
            } else {
              setAlbumData(data.results);
            }
          })
          .catch((error) => {
            setErrorMessage(error.message);
          })
          .then(() => {setSearching(false)});
      }

    return(
        <section className="post">
            <div className="container">
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i className="material-icons">add_circle</i></button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasRightLabel">Write a Post!</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body small">
                            <form className="form-group input-group">
                                {/* Title */}
                                <label htmlFor="post-comment" hidden>Title</label>
                                <textarea type="text" className="form-control" placeholder="Title" aria-label="text box"
                                    rows="1" value={postTitle} onChange={handleInputTitle}></textarea>
                                {/* Type In Form */}
                                <label htmlFor="post-comment" hidden>Comment</label>
                                <textarea type="text" className="form-control" placeholder="Comment" aria-label="text box"
                                    rows="1" value={postValue} onChange={handleInputPost}></textarea>
                                {/* Submit */}
                                <span className="input-group-btn">
                                    <Link to="/" className="nav-link">
                                        <button type="submit" onClick={handleSubmit} className="btn btn-light ml-1" aria-label="Send Button"><i
                                            className="material-icons">send</i></button>
                                    </Link>
                                </span>
                            </form>
                            {errorMessage && 
                            <div className="alert alert-primary" role="alert">{errorMessage}</div>
                            // <Alert variant="danger" dismissible onClose={() => setErrorMessage(null)}>{errorMessage}</Alert>
                            }
                            <Route exact path="/">
                                <AlbumSearch searchCallback={fetchAlbumList} isWaiting={isSearching} />
                                <AlbumList albums={albumData} callbackInfo={handleInputAlbum}/>
                            </Route>
                        </div>
                    </div>
            </div>
        </section>
    );
}
export default WritePost;