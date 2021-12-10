import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TRACK_QUERY_TEMPLATE = 'https://itunes.apple.com/lookup?id={collectionId}&limit=50&entity=song'

export default function TrackList(props) {
  const [trackData, setTrackData] = useState([]); //tracks to show
  const [errorMessage, setErrorMessage] = useState(null); //catch error message
  const [previewAudio, setPreviewAudio] = useState(null); //for playing previews!

  useEffect(() => {
    fetch(TRACK_QUERY_TEMPLATE.replace('{collectionId}', props.collectionId))
      .then((res) => res.json())
      .then((data) => {
        if(data.results.length === 0) {
          setErrorMessage("No tracks found for album.");
        } else {
          setTrackData(data.results.slice(1));
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, [props.collectionId])

  //for fun: allow for clicking to play preview audio!
  const togglePlayingPreview = (previewUrl) => {
    if(!previewAudio) { //nothing playing now
      const newPreview = new Audio(previewUrl);
      newPreview.addEventListener('ended', () => setPreviewAudio(null)) //stop on end
      setPreviewAudio(newPreview); //rerender and save
      newPreview.play(); //also start playing
    } else {
      previewAudio.pause(); //stop whatever is currently playing
      setPreviewAudio(null); //remove it
    }
  }

  //render the track elements
  const trackElemArray = trackData.map((track, index) => {
    let classList = "track-record";
    if(previewAudio && previewAudio.src === track.previewUrl){
      classList += " font-weight-bold"; //bold if previewing
    }
    return (
        <li key={track.trackId}>
          <div role="button" className={classList} onClick={() => togglePlayingPreview(track.previewUrl)}>
            <p className="track-name">{track.trackName} ({track.artistName})</p>
          </div>
        </li>
    )
  })

  return (
    <div>
      {errorMessage &&
        <div class="alert alert-warning" role="alert">
          {errorMessage}
        </div>
      }
      <ul className="canvas-ul">
        {trackElemArray}
      </ul>
    </div>
  )
}
