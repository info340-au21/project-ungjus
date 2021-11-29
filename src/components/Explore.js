import React from 'react';
import Plot from 'react-plotly.js';

function Explore(props) {
    let songData = props.songData;
    let songs = [];
    let streams = [];
    let artist = [];
    for(let song = 0; song < 100; song++) {
        songs.push(songData[song]["Track Name"]);
        streams.push(songData[song]["Streams"]);
        artist.push(songData[song]["Artist"]);
    }
    
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
        </div>
    );
}
export default Explore;