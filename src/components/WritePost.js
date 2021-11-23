import React from 'react';

function WritePost(props) {  
    return(
        <section className="post">
            <div className="container">
                <form className="form-group input-group">
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-light mr-1" aria-label="Add a file button"><i
                                className="material-icons">add_circle</i></button>
                    </span>
                    <label htmlFor="post-comment" hidden>Write a post! </label>
                    <textarea type="text" className="form-control" placeholder="Write a post!" aria-label="text box"
                        rows="1"></textarea>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-light ml-1"><span className="material-icons"
                                aria-label="Emoji Button">emoji_emotions</span></button>
                        <button type="submit" className="btn btn-light ml-1" aria-label="Send Button"><i
                                className="material-icons">send</i></button>
                    </span>
                </form>
            </div>
        </section>
    );
}
export default WritePost;