import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ''};
  }

  searchMovie(str) {
    this.setState({
      search: str
    });
  }

  render() {
    return (
      <div className="search-bar">
        <input
          id="search-form"
          type="text"
          onChange={(event) => this.searchMovie(event.target.value)}
        />
        <button onClick={(event) => this.props.filterMovies(this.state.search)}>Search!</button>
      </div>
    )
  }
}

export default Search;