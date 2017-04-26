import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import Movie from './components/Movie'

const key = process.env.REACT_APP_MOVIE_KEY



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchResults: "",
      currentMovie: ""
    }
  }

  searchMovie(id) {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
    .then(response => {
      this.setState({currentMovie: response.data})
      console.log(this.state.currentMovie)
    })
    .catch(error => {
      console.log("error fetching and parsing", error)
    })
  }

  componentDidMount() {
    this.searchMovie(70160)
  }

  searchForm(tag) {
    let newTag = tag.target.value
    let tagSplit = newTag.split(" ").length > 1 ? newTag.split(" ") : newTag // didn't end up needing 
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${tagSplit}&page=1&include_adult=false`)
    .then(response => {
      this.setState({movies: response.data.results.splice(0, 5)})
      this.setState({currentMovie: this.searchMovie(this.state.movies[0].id)})
      console.log(this.state.currentMovie)
    })
    .catch(error => {
      console.log("error fetching and parsing", error)
    })
  }


  render() {
    return (
      <div className="App">
        <Header search={function(tag) {this.searchForm(tag)}.bind(this) }/>
        <Movie movieInfo={this.state.currentMovie}/>
      </div>
    );
  }
  componentDidUpdate() {
    if (this.state.currentMovie.backdrop_path != null) {
      document.body.style.backgroundImage = 'url(' +'https://image.tmdb.org/t/p/original' + this.state.currentMovie.backdrop_path + ')';
    } else {
      document.body.style.backgroundImage = 'url(http://www.officialpsds.com/images/stocks/Floral-Background-stock1936.jpg)'
    }
  }
}

export default App;
