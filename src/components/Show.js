import React, { Component } from 'react';

class Show extends Component {
  constructor(props) {
    super(props)
    this.clickMovies = this.clickMovies.bind(this)
  }


  clickMovies(e) {
    e.preventDefault()
    this.props.clickMovie(e.target.id)
  }

  render() {
    let clickMoviess = this.clickMovies
    const movieList = this.props.results.splice(0, 5).map(function(movie) {
      return <a onClick={clickMoviess}><li id={movie.id}><img src={'https://image.tmdb.org/t/p/w500'+ movie.poster_path}/> {movie.original_title}</li></a>
    })

    return(
      <div className="show-search" style={{display: this.props.visible ? 'block' : 'none' }}>
        <ul id="search-list">
          {movieList ? movieList : ""}
        </ul>
      </div>
    )
  }

}

export default Show