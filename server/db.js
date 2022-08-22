const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movielistmongo')

const movieSchema = new mongoose.Schema({
  title: {type: String, unique: true},
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports.Movie = Movie;