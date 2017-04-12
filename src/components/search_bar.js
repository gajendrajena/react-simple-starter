import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <div className='row'>
        <div className='col-md-12 search-bar'>
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}>
          </input>
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
