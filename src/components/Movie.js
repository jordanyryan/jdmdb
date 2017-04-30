import React, { Component } from 'react';

class Movie extends Component {
  render() {
  let info = this.props.movieInfo
  let minutes = info.runtime ? info.runtime + " minutes" : "Not found"
  let poster = 'https://image.tmdb.org/t/p/w500'+ info.poster_path
  let revenue = "$" + String(info.revenue).replace(/(.)(?=(\d{3})+$)/g,'$1,');

    return(
      <div className="movie-card">
        <div className="movie-poster rounded float-left">
          <img className="img-fluid" src={poster} alt="poster"/>
        </div>
        <div className="movie-info">
          <h1>{info.original_title}</h1>
          <div className="movie-details">
            <h3 className="cyan">{info.tagline}</h3>
            <p>{info.overview}</p>
          </div>
          <div className="box-office">
            <p className="float-left">Release Date</p>
            <p className="float-right">Runtime</p>
            <div className="box-office-2 clear">
              <h3 className="float-left cyan">{info.release_date}</h3>
              <h3 className="float-right cyan">{minutes}</h3>
            </div>
            <div className="rating-box-office clear">
              <p className="float-left">Rating</p>
              <p className="float-right">Box Office</p>
            </div>
            <div className="clear">
              <h3 className="float-left cyan">{info.vote_average} / 10</h3>
              <h3 className="float-right cyan">{revenue}</h3>
            </div>
          </div>
            
        </div>
      </div>
    )
  }
}

export default Movie