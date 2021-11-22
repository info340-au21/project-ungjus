import React from 'react';

function UserCard(props) {
    const post = props.postInfo;
    // Loading Off-canvas doesn't work
    return(
        <div className="col-sm-12 col-lg-5">
        <div className="card mb-4 shadow-sm p-3 mb-5 bg-white rounded">
            <img className="btn mx-auto" data-bs-toggle="offcanvas" href="#content-one" role="button"
                src={post.album_photo}
                alt={post.song_title}/>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id={"content-" + post.post_number}>
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id={"content-" + post.post_number}>{post.title}</h3>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <span className="border-bottom mx-3">
                    <div className="media mt-3">
                        <img src={post.user_pic}
                            alt={post.user} className="profile rounded-circle"/>
                        <div className="media-body">
                            <div className="d-flex justify-content-between mt-1">
                                <p className="ml-2">{post.user}</p>
                                <p><em className="text-right">Posted: {post.time_post} ago</em></p>
                            </div>
                        </div>
                    </div>
                </span>
                <div className="offcanvas-body">
                    <img src={post.album_photo}
                        alt={post.song_title}/>
                    <p><em>{post.song_title} - {post.song_artist}</em></p>
                    <ul className="canvas-ul">
                        <li>Release Year: {post.song_year}</li>
                        <li>Duration: {post.song_duration}</li>
                        <li>Genre:</li>
                        <ul>
                            <li>Electropop</li>
                            <li>Gloom-pop</li>
                            <li>Synth-pop</li>
                        </ul>
                    </ul>
                    <p className="font-weight-bold">{post.comment}</p>
                </div>
            </div>
            <h2 className="card-title">{post.title}</h2>
            <p className="card-text">{post.comment}</p>
            <span className="border-top">
                <div className="media mt-3">
                    <img src={post.user_pic} alt={post.user}
                        className="profile rounded-circle"/>
                    <div className="media-body">
                        <div className="d-flex justify-content-between mt-1">
                            <p className="ml-2">{post.user}</p>
                            <p><em className="text-right">Posted: {post.time_post} ago</em></p>
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
    return(
        <div className="row mx-auto">
            {postData.map((post) => <UserCard postInfo={post} key={post.post_number}/>)}
        </div>
    );
}
export default UserPosts;
