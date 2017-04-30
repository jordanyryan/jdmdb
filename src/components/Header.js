import React, { Component } from 'react';
import SearchForm from './SearchForm'

class Header extends Component {

  render() {


    return(
      <div className="header">
        <img id="moviedb" src="https://www.themoviedb.org/assets/static_cache/9b3f9c24d9fd5f297ae433eb33d93514/images/v4/logos/408x161-powered-by-rectangle-green.png" alt="moviedb-logo"/>
        <SearchForm search={this.props.search} results={this.props.results}/>
      </div>
    )
  }
}

export default Header