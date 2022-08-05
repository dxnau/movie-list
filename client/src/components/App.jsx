import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'}],
      search: '',
      filteredMovies: []
    };
  }

  filterMovies(str) {
    console.log('Searching for: ', str)
    this.setState({search: str});

    let filteredMovies = [];
    let uppercaseStr = str.toUpperCase();
    this.state.movies.forEach(movie => {
      if (movie.title.toUpperCase().includes(uppercaseStr)) {
        filteredMovies.push(movie);
      }
    })

    console.log(`Movies that contain ${str}: ${JSON.stringify(filteredMovies)}`)
    this.setState({
      movies: filteredMovies
    });
  }

  addMovies(movie) {
    console.log(`newly added movie: ${JSON.stringify(movie)}`)
    this.setState({
      movies: [...this.state.movies, movie]
    });
  }

  render() {
    return (
      <div>
        <div className="title">Movie List!</div>
        <AddMovie addMovies={this.addMovies.bind(this)}/>
        <Search filterMovies={this.filterMovies.bind(this)}/>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;