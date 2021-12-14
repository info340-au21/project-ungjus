import React from 'react';
import TrackList from './TrackList';

export function UserCard(props) {
    const post = props.postInfo;
    const dateInfo = new Date(post.timePost);
    const dateFormat = dateInfo.getMonth() + "/" + dateInfo.getDate() + "/" + dateInfo.getFullYear() + post.timePost.substring(15, 21);
    return(
        <div className="col-sm-12 col-lg-5">
        <div className="card mb-4 shadow-sm p-3 mb-5 bg-white rounded">
            <img className="btn mx-auto" data-bs-toggle="offcanvas" href={"#content-" + post.postNumber} role="button"
                src={post.albumPhoto}
                alt={post.songTitle}/>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id={"content-" + post.postNumber}>
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id={"content-" + post.postNumber}>{post.title}</h3>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <span className="border-bottom mx-3">
                    <div className="media mt-3">
                        <img src={post.userPic}
                            alt={post.user} className="profile rounded-circle"/>
                        <div className="media-body">
                            <div className="d-flex justify-content-between mt-1">
                                <p className="ml-2">{post.user}</p>
                                <p><em className="text-right">{dateFormat}</em></p>
                            </div>
                        </div>
                    </div>
                </span>
                <div className="offcanvas-body">
                    <img src={post.albumPhoto}
                        alt={post.songTitle} className="img-fluid"/>
                    <p><em>{post.songTitle} - {post.songArtist}</em></p>
                    <p key={post.postNumber}>Release Year: {post.songYear}</p>
                    <p className="font-weight-bold">{post.comment}</p>
                    <p className="border-top pt-2">Preview Track(s):</p>
                    <TrackList collectionId={post.collectionID}/>
                </div>
            </div>
            <h2 className="card-title">{post.title}</h2>
            <p className="card-text">{post.comment}</p>
            <span className="border-top">
                <div className="media mt-3">
                    <img src={post.userPic} alt={post.user}
                        className="profile rounded-circle"/>
                    <div className="media-body">
                        <div className="d-flex justify-content-between mt-1">
                            <p className="ml-2">{post.user}</p>
                            <p><em className="text-right">{dateFormat}</em></p>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    </div>
    );
}

function UserPosts(props) { 
    const postData = props.postData;
    
    const handleUserPosts = postData.map((post) => <UserCard postInfo={post} key={post.postNumber}/>)

    return(
        <div className="row mx-auto">
            {handleUserPosts}
        </div>
    );
}
export default UserPosts;
