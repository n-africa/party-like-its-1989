import React, { Component } from 'react'

class App extends Component {
  state = {
    movies: [],
  }
  async componentDidMount() {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=ffbdb3049c71c5a204806d963cbb5fdb'
    )
    const apiData = await response.json()

    this.setState({ movies: apiData.results })

    console.log(this.state)
  }
  render() {
    return (
      <div>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Inline+Display:wght@600&family=Big+Shoulders+Inline+Text:wght@900&family=Goldman:wght@700&display=swap');
        </style>

        <h1>API for 80's Movies</h1>
        {this.state.movies.map(movie => (
          <p>
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            />
            <br></br>
            <div className="titles">{movie.original_title}</div>
            <br></br>
            <br></br>
            <div className="overview"> {movie.overview}</div>
          </p>
        ))}
      </div>
    )
  }
}

export default App
