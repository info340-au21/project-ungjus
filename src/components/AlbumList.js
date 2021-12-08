import React from 'react';

export default function AlbumList({ callbackInfo, albums }) {

  const elemArray = albums.map((anAlbum) => {
    return (
      <img className="m-1" 
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