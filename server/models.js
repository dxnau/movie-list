const db = require('./db.js');

module.exports = {

  fetchMovies: () => {
    console.log('Fetching movies');
    db.Movie.find({})
    .then((response) => {console.log(response)})
    .catch((err) => {console.log(err)});
  }
}