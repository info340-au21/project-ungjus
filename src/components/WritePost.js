import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function WritePost(props) {  
    const [postValue, setPostValue] = useState('');
    const [postTitle, setPostTitle] = useState('');

    const handleInputPost = (event) => {
        setPostValue(event.target.value);
    }

    const handleInputTitle = (event) => {
        setPostTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        props.onSubmit(postTitle, postValue);
        setPostValue('');
        setPostTitle('');
    }

    return(
        <section className="post">
            <div className="container">
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                    <i className="material-icons">add_circle</i></button>
                    <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasBottomLabel">Write a Post!</h5>
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
                        </div>
                    </div>
            </div>
        </section>
    );
}
export default WritePost;