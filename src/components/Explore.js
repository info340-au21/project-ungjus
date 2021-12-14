import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import Select from 'react-select';



function Explore(props) {
    let songData = props.songData;
    const [songs, setSongs] = useState([]);
    const [streams, setStreams] = useState([]);
    const [artist, setArtist] = useState([]);
    const [uniqueArtist, setUniqueArtist] = useState([]);
    const [selectedArtist, setSelectedArtist] = useState([]);
    const [data, setData] = useState([]);
    const [isInitialRender, setIsInitialRender] = useState(true);

    
    useEffect(()=>{
        // on first render, display full graph
        if (isInitialRender) {
            setIsInitialRender(false);

            let tempSongs = [];
            let tempStreams = [];
            let tempArtist = [];
            let tempUnique = [];
            for(let song = 0; song < 100; song++) {
                tempSongs.push(songData[song]["Track Name"]);
                tempStreams.push(songData[song]["Streams"]);
                tempArtist.push(songData[song]["Artist"]);
                if(!(tempUnique.some((art) => art.value === songData[song]["Artist"]))) {
                    tempUnique.push({ "value": songData[song]["Artist"], "label": songData[song]["Artist"]});
                }
            }
            setSongs(tempSongs);
            setStreams(tempStreams);
            setArtist(tempArtist);
            setUniqueArtist(tempUnique);

            setDisplayData(tempSongs, tempStreams, tempArtist);
            
        } else {
            // if user doesn't select any artists, display full graph
            // else only show the selected artist on the graph
            if(selectedArtist.length === 0) {
                setDisplayData(songs, streams, artist);
            } else {
                let tempSongs = [];
                let tempStreams = [];
                let tempArtist = [];
                for(let i = 0; i < artist.length; i++) {
                    if(selectedArtist.includes(artist[i])){
                        tempSongs.push(songs[i]);
                        tempStreams.push(streams[i]);
                        tempArtist.push(artist[i]);
                    }
                }
                setDisplayData(tempSongs, tempStreams, tempArtist);
            }
        }

        

    }, [songData, songs, streams, artist, selectedArtist, isInitialRender])
    

    const setDisplayData = (song, stream, artist) => {
        let tempData = [{
            x: song,
            y: stream,
            text: artist,
            type: "bar",
            hovertemplate:
                "<b>%{x}</b><br><br>" +
                "Artist: %{text}</br>" +
                "%{yaxis.title.text}: %{y:,.0f} Million<br>" +
                "<extra></extra>"
        }];
        setData(tempData);
    }
    let layout = {
        yaxis: {
            title: "Number of Streams",
            automargin: true
        },
        font: { size: 12 },


    };

    const handleSelectedArtist = (selected) => {
        let temp = [];
        for (const elem of selected) {
            temp.push(elem.value);
        }
        setSelectedArtist(temp);
    }
    return(
        <div className="container">
            <h1 className="page-title">Spotify Global Top 100 Weekly</h1>
            <Select
                isMulti
                options={uniqueArtist}
                onChange={handleSelectedArtist}
            />
            <Plot className="song-graph"
                data={data}
                layout={layout}
                config={ {responsive: true} }
            />
            <p className="xaxis">Song Names</p>
            <cite>Data from <a href="https://charts.spotify.com/charts/view/regional-global-weekly/latest">Spotify Charts</a></cite>

        </div>
    );
}
export default Explore;