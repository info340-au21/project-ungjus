import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function Explore(props) {
    let songData = props.songData;
    const [songs, setSongs] = useState([]);
    const [streams, setStreams] = useState([]);
    const [artist, setArtist] = useState([]);
    const [isInitialRender, setIsInitialRender] = useState(true);

    
    useEffect(()=>{
        if (isInitialRender) {
            setIsInitialRender(false);

            let tempSongs = [];
            let tempStreams = [];
            let tempArtist = [];
            for(let song = 0; song < 100; song++) {
                tempSongs.push(songData[song]["Track Name"]);
                tempStreams.push(songData[song]["Streams"]);
                tempArtist.push(songData[song]["Artist"]);
            }
            setSongs(tempSongs);
            setStreams(tempStreams);
            setArtist(tempArtist);
        }
    }, [songData, isInitialRender])
    
    let data = [{
        x: songs,
        y: streams,
        text: artist,
        type: "bar",
        hovertemplate:
            "<b>%{x}</b><br><br>" +
            "Artist: %{text}</br>" +
            "%{yaxis.title.text}: %{y:,.0f} Million<br>" +
            "<extra></extra>"
    }];
    let layout = {
        title: "Spotify Global Top 100 Weekly",
        titlefont: { size: 30 },
        xaxis: {
        },
        yaxis: {
            title: "Number of Streams",
            automargin: true
        },
        font: { size: 12 },


    };
    return(
        <div>
            <Plot className="song-graph"
                data={data}
                layout={layout}
                config={ {responsive: true} }
            />
            <p className="xaxis">Song Names</p>

            {/* allow user to find seach for a long and display the song info */}
        </div>
    );
}
export default Explore;