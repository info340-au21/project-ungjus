//Code Sourced from Problem-set-09

import React from 'react';

export default function AlbumList({ callbackInfo, albums }) {

  const elemArray = albums.map((anAlbum) => {
    return (
      <img className="m-1" key={anAlbum.collectionId}
        src={anAlbum.artworkUrl100} 
        alt={anAlbum.collectionName} 
        title={anAlbum.collectionName}
        role="button" 
        onClick={() => {callbackInfo(anAlbum)}}>
      </img>
    )
  })

  return (
    <div className="my-3">
      {elemArray}
    </div>
  )
}