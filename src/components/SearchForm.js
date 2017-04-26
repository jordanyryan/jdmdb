import React, { Component } from 'react';

class SearchForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return(
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.props.search} placeholder="Search..."/>
        </form>
      </div>
    )
  }
}

export default SearchForm