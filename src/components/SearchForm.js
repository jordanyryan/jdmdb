import React, { Component } from 'react';
        // <Header search={function(tag) {this.searchForm(tag)}.bind(this) }/>
class SearchForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    
    return(
      <div className="search-form" id="search-form">
        <form  onSubmit={this.handleSubmit}>
          <input id="form-search" type="text" onChange={this.props.search} placeholder="Search..."/>
        </form>
      </div>
    )
  }
}

export default SearchForm