//Code Sourced from Problem-set-09

import React, { useState } from 'react';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faMusic } from '@fortawesome/free-solid-svg-icons'

export default function AlbumSearch({searchCallback, isWaiting}) {
  const [queryText, setQueryText] = useState('');

  const handleChange = (event) => {
    setQueryText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const urlEncoded = encodeURIComponent(queryText);
    searchCallback(urlEncoded);
  }

  return (
    <div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="searchQuery" className="mr-2">Add Song to Post!</label>
          <input type="text" className="form-control" placeholder="Search for an album"
            value={queryText} onChange={handleChange} />
        </div>

        {/* conditionally show either spinner or button */}
        {isWaiting && <FontAwesomeIcon icon={faSpinner} spin size="lg" aria-label="Loading..." aria-hidden="false" />}
        {!isWaiting &&
            <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faMusic} /> Search!
            </button>
        }
      </form>
    </div>
  )
}
