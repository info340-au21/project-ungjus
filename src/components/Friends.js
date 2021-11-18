import React from 'react';

function Friends(props) {  
    return(
        <section className="sidebar d-none d-lg-block border-left">
            <h1 className="text-center mt-5 mb-3 font-weight-bold">Friends</h1>
            <ul className="list-group list-group-flush">
                <button
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start container"
                    aria-label="friend">
                    <span className="material-icons account-circle">account_circle</span>

                    <div className="ms-2 me-auto">
                        <div className="fw-bold">William Cao</div>
                        <div className="listening">
                            <span className="material-icons music-note">music_note</span>
                            <em>Shivers</em>
                        </div>
                    </div>
                </button>
                <button
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                    aria-label="friend">
                    <span className="material-icons account-circle">account_circle</span>

                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Leslie Smith</div>
                        <div className="listening">
                            <span className="material-icons music-note">music_note</span>
                            <em>Girls Want Girls</em>
                        </div>
                    </div>
                </button>
                <button
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                    aria-label="friend">
                    <span className="material-icons account-circle">account_circle</span>

                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Henry Lam</div>
                        <div className="listening">
                            <span className="material-icons music-note">music_note</span>
                            <em>good 4 u</em>
                        </div>
                    </div>
                </button>
                <button
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                    aria-label="friend">
                    <span className="material-icons account-circle">account_circle</span>

                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Kent Ho</div>
                        <div className="listening">
                            <span className="material-icons music-note">music_note</span>
                            <em>Money Trees</em>
                        </div>
                    </div>
                </button>
                <button
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                    aria-label="friend">
                    <span className="material-icons account-circle">account_circle</span>

                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Jake Olsen</div>
                        <div className="listening">
                            <span className="material-icons music-note">music_note</span>
                            <em>No Child Left Behind</em>
                        </div>
                    </div>
                </button>
            </ul>
        </section>
    );
}
export default Friends;