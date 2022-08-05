import React from 'react';

var MovieListEntry = ({movie}) => {
  return(
    <div className="movie-list-entry">
      <div>{movie.title}</div>
    </div>
  )
}

export default MovieListEntry;