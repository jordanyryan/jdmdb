import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import Movie from './components/Movie'
import $ from 'jquery'
import Show from './components/Show'
import dotenv from 'dotenv'

const MOVIE_KEY = process.env.MOVIE_KEY
console.log(MOVIE_KEY)
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchResults: [],
      currentMovie: "",
      visible: false
    }
  }

  searchMovie(id) {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_KEY}&language=en-US`)
    .then(response => {
      this.setState({currentMovie: response.data})
      this.setState({searchResults: []})
      document.getElementById("form-search").value = ""
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
      if (newTag == "") {
        this.setState({visible: false})
      } else {
    let tagSplit = newTag.split(" ").length > 1 ? newTag.split(" ") : newTag // didn't end up needing 
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_KEY}&language=en-US&query=${tagSplit}&page=1&include_adult=false`)
    .then(response => {
      this.setState({searchResults: response.data.results.splice(0, 20), visible: true})
      console.log("getting called")
    })
    .catch(error => {
      console.log("error fetching and parsing", error)
    })
  }
  }


  render() {
    console.log(this.state.searchResults)
    return (
      <div className="App">
        <Header search={function(tag) {this.searchForm(tag)}.bind(this)}/>
        <Show visible={this.state.visible} results={this.state.searchResults} clickMovie={function(id) {this.searchMovie(id)}.bind(this)}/>
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
