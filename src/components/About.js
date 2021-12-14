import React from 'react';

function About(props) {  
    return(
        <div>
            <section className="text-container">
                <h1>Our Goal</h1>
                <p>
                    We hope our website can create a community of music enthusiasts,
                    allowing users to communicate with their friends online, make new connections,
                    and share their favorite albums! We want to <strong>connect musicians and casual
                    listeners alike based on their musical interests.</strong>
                </p>
                <p>
                    Although there are already many music apps in this space, they aren’t focused on making genuine
                    connections
                    like we are:
                </p>
                <ul>
                    <li>
                        <a href="https://www.spotify.com/us/" rel="noreferrer" target="_blank">Spotify</a>
                        allows users to play music as well as allowing users to
                        add friends and view their listening activity. But it lacks the ability to communicate
                        with each other on the platform.
                    </li>
                    <li>
                        <a href="https://drooble.com/" rel="noreferrer" target="_blank">Drooble</a>
                        is focused on posting and critiquing each
                        other’s music. However, provides little functionality for casual music enthusiasts
                        who want to comment on music not posted by the site’s users.
                    </li>
                    <li>
                        <a href="https://twitter.com/?lang=en" rel="noreferrer" target="_blank">Twitter</a> is a social
                        network where users can post, but it’s too broad and doesn’t have a focus on music.
                    </li>
                </ul>
                <p>
                We believe we can combine the best features of these existing sites to create
                a better music social platform.
                </p>

            </section>
            <section className="text-container">
                <h1>Features</h1>
                <p>Our app is geared towards music enthusiasts ranging from causal listeners to professional musicians.</p>
                <p>Here are some things users are able to do on our app:</p>
                <ul>
                    <li>
                        Our users will be able to <strong>make a profile, explore current popular songs, and make posts to share their musical interests with others</strong>. Making a profile is easy by signing up with an email or through a Google account.
                    </li>
                    <li>
                        Furthermore, users will be able to make <strong>posts on songs they are currently listening to</strong>, connect
                        with other users with similar interests, add each other as friends, and continue chatting.
                        Users will also be able to search for specific profiles and add them as friends.
                    </li>
                    <li>
                        We also have a <strong>searchable visualization</strong> of <a href="https://spotifycharts.com/home/" rel="noreferrer" target="_blank">Spotify's weekly top songs,</a> so that users can see what's popular on a larger scale.
                    </li>
                </ul>
                <p><strong>In the future</strong>, this app could be expanded to add other features:</p>
                <ul>
                    <li>
                        Users may be able to make more detailed profiles, optionally providing information such as genre interests and geographic locations so that users can find people with similar interests, or those who they might be interested in meeting up with in real life. A direct messaging feature would add another dimension to communication between users.
                    </li>
                    <li>
                        Another possible future feature is to allow users to make and share playlists of songs, to share a whole collection of music at once.
                    </li>
                    <li>
                        Users may later be able to connect their Spotify, Soundcloud, and Apple Music accounts to share their top songs of the week, month, and year over
                        different genres. We can build a sense of community by allowing users to easily display their musical interests and open up a dialogue around them.
                    </li>
                </ul>
                <p>Thanks for exploring our app!</p>
            </section>
            <section className="text-container">
                <h1>About the Developers:</h1>
                <div className="about-bio">
                    <div className="text-container">
                        <h2>Justin Ung</h2>
                        <p><em>Informatics major</em></p>
                        <p>Currently looking for software engineering internships!</p>
                    </div>
                    <img src="img/authors/ung.JPG" alt="Justin Ung"/>
                </div>
                <div className="about-bio">
                    <div className="text-container">
                        <h2>Aaron Ho</h2>
                        <p><em>Informatics major</em></p>
                        <p>Looking for data science analyst internship.</p>
                    </div>
                    <img src="img/authors/ho.jpg" alt="Aaron Ho"/>
                </div>
                <div className="about-bio">
                    <div className="text-container">
                        <h2>Debbie Dai</h2>
                        <p><em>Intended Informatics or Communication</em></p>
                        <p>Still exploring web development and database management.</p>
                    </div>
                    <img src="img/authors/dai.jpg" alt="Debbie Dai"/>
                </div>
                <div className="about-bio">
                    <div className="text-container">
                        <h2>Victoria Kourbatova</h2>
                        <p><em>Intended Informatics and Linguistics double-major</em></p>
                        <p>Looking to improve my web development skills.</p>
                    </div>
                    <img src="img/authors/kourbatova.jpg" alt="Victoria Kourbatova"/>
                </div>

            </section>
        </div>
    );
}
export default About;