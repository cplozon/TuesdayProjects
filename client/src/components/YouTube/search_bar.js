
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="input-group">
        <input type="text" className="pure-input-rounded" ref="search"/>
        <span className="pure-btn">
          <button className="pure-button" 
          type="button" onClick={(event) => 
          this.props.onSearchTerm(this.refs.search.value)}>Search!</button>
        </span>
      </div>
    )
  }
}

export default SearchBar;
