import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {title: ''}
    };
  }

  updateTitle(str) {
    this.setState({
      movie: {title: str}
    });
  }

  render() {
    return (
      <div className="add-bar">
        <input
          id="add-form"
          type="text"
          onChange={(event) => this.updateTitle(event.target.value)}
        />
        <button onClick={(event) => this.props.addMovies(this.state.movie)}>Add!</button>
      </div>
    )
  }
}

export default AddMovie;