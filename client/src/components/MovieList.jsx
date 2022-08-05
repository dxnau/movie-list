import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

var MovieList = ({movies}) => (
  <div className="movie-list">
    {movies.map(movie =>
      <MovieListEntry movie={movie}/>
    )}
  </div>
)

export default MovieList;