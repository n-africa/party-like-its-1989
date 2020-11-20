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

    console.log(apiData)
  }
  render() {
    return (
      <div>
        <h1>Is It 1989? I Think It Is! PARTY LIKE IT'S 1989</h1>
        {this.state.movies.map(movie => (
          <h2>{movie.original_title}</h2>
        ))}
      </div>
    )
  }
}

export default App
