import React from 'react';
import Plot from 'react-plotly.js';

function Explore(props) {
    console.log(props.songData);
    let songData = props.songData;
    let songs = songData[0].songs;
    let streams = songData[0].streams;
    let artist = songData[0].artist;
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