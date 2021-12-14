import React from 'react';

function Song(props) {
    let song = props.songData;
    return(
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-start" key={song.Postiion}>
            <a className="ms-2 me-auto" href={song.URL}
                _blank="target">
                <div className="fw-bold">{song["Track Name"]}</div>
                <em>{song.Artist}</em>
            </a>
        </li>
    );
}

function TopSongs(props) { 
    let top10Songs = props.songData;
    top10Songs = top10Songs.slice(0, 10);

    const handleSongs = top10Songs.map((song) => <Song key={song.Position} songData={song} />)

    return(
        <section className={(props.sidebarClicked) ? "container" : "sidebar d-none d-lg-block border-right"} id='top-songs'>
                <h1 className="text-center mt-5 mb-4 font-weight-bold">Top 10 Weekly Songs</h1>

                <ol className="list-group list-group-numbered list-group-flush">
                    {handleSongs}
                </ol>
        </section>
    );
    
}
export default TopSongs;