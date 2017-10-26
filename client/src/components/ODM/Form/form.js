import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  state = {errorCode: '', vin: ''};
  onInputChange = e => this.setState({[e.target.name]: e.target.value});
  
  render() {
     return (
      <div className="centered">
        <h2>Vehicle Diagnostic</h2>
        <form className="form">
          
            <label>OBD Code</label>
            <input
                value={this.state ? (this.state.errorCode || '') : ''}
                name="errorCode"
                onChange={this.onInputChange}
                type="text"
                placeholder="OBD Error Code" />
          
          
            <label>V.I.N.</label>
            <input
                value={this.state ? (this.state.vin || '') : ''}
                name="vin"
                onChange={this.onInputChange}
                type="text"
                placeholder="Vehicle Identification Number" />
          
          <button onClick={(e) => {  
              e.preventDefault();
              this.props.onSubmit(this.state);
            }}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
