import React from 'react';

function About(props) {  
    return(
        <div>
            <section class="text-container">
                <h1>Our Goal</h1>
                <p>
                    We are hoping to set up a website that creates a community of music enthusiasts,
                    allowing users to communicate with their friends online, make new connections,
                    and share their playlists or own music! We want to <strong>connect musicians based on their
                        geographic location, demographics, and musical interests.</strong>
                </p>
                <p>
                    Although there are already many music apps in this space, they aren’t focused on making genuine
                    connections
                    like we are:
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
                We believe we can combine the best features of these existing sites together to create
                a better music social platform.
                </p>

            </section>
            <section class="text-container">
                <h1>Features</h1>
                <p>Our app is geared towards music enthusiasts ranging from causal listeners to professional musicians.</p>
                <p>Here are some things users will be able to do on our app:</p>
                <ul>
                    <li>
                        Our users will be able to <strong>make a profile, add songs that they like (or create on their
                            own)
                            into playlists, and share them with others</strong>. Making a profile will consist of adding
                        a personal
                        or user name, gender, pronouns, and tag musical interests. Users may also opt to sign in
                        through Google using
                        <a href="https://developers.google.com/identity/sign-in/web/sign-in" rel="noreferrer" target="_blank">their
                            API</a>.
                        We want users to be able to link their Spotify, Apple Music,
                        or SoundCloud profiles since many users probably also use these apps.
                    </li>
                    <li>
                        Furthermore, users will be able to make <strong>posts on songs they are currently listening
                            to</strong>, connect
                        with other users with similar interests, add each other as friends, and continue chatting.
                        Users will also be able to search for specific profiles and add them as friends.
                    </li>
                    <li>
                        We also want to have a <strong>list of top user songs of the week, month, and year over
                            different genres.</strong>
                        This way we can build a sense of community by allowing users to listen to these songs and
                        comment
                        on each of these top songs to discuss what they like and dislike about them. This also allows
                        users to explore new music and connect with other users. We can also create this list by using
                        <a href="https://developer.spotify.com/documentation/web-api/" rel="noreferrer" target="_blank">Spotify</a> or
                        <a href="https://developer.apple.com/documentation/applemusicapi/" rel="noreferrer" target="_blank">Apple
                            Music’s</a>
                        API to get top songs as well.
                    </li>
                </ul>
                <p>That is our overall idea for the project proposal. Thank you for your reading!</p>
            </section>
            <section class="text-container">
                <h1>About the Developers:</h1>
                <div class="about-bio">
                    <div class="text-container">
                        <h2>Victoria Kourbatova</h2>
                        <p><em>Intended Informatics and Linguistics double-major</em></p>
                        <p>Looking to improve web development skills.</p>
                    </div>
                    <img src="img/authors/kourbatova.jpg" alt="Victoria Kourbatova"/>
                </div>
                <div class="about-bio">
                    <div class="text-container">
                        <h2>Justin Ung</h2>
                        <p><em>Informatics major</em></p>
                        <p>Currently looking for software engineering internships!</p>
                    </div>
                    <img src="img/authors/ung.JPG" alt="Justin Ung"/>
                </div>
                <div class="about-bio">
                    <div class="text-container">
                        <h2>Aaron Ho</h2>
                        <p><em>Informatics major</em></p>
                        <p>Looking for data science analyst internship.</p>
                    </div>
                    <img src="img/authors/ho.jpg" alt="Aaron Ho"/>
                </div>
                <div class="about-bio">
                    <div class="text-container">
                        <h2>Debbie Dai</h2>
                        <p><em>Intended Informatics or Communication</em></p>
                        <p>Still exploring web development and database management.</p>
                    </div>
                    <img src="img/authors/dai.jpg" alt="Debbie Dai"/>
                </div>

            </section>
        </div>
    );
}
export default About;