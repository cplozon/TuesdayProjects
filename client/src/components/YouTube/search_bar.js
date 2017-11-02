
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="input-group">
        <label>Your Repair Need<input type="text" name="Your Car's Problem" className="pure-input-rounded" ref="problem"/></label>
        <label>Make<input type="text" name="Make" className="pure-input-rounded" ref="make"/></label>
        <label>Model<input type="text" placeholderText="Model" className="pure-input-rounded" ref="model"/></label>
        <label>Year<input type="text" placeholderText="Year" className="pure-input-rounded" ref="year"/></label>
        <span className="pure-btn">
          <button className="pure-button" 
          type="button" onClick={(event) => 
          this.props.onSearchTerm(this.refs.problem.value, this.refs.model.value)}>Search Now!</button>
        </span>
      </div>
    )
  }
}

export default SearchBar;
