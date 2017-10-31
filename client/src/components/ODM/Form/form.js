import React, { Component } from "react";
import "./form.css";
import Footer from '../../theme/Footer'
import Sidebar from '../../theme/Sidebar'
import OBMHeader from './OBMHeader'

class Form extends Component {
  state = {errorCode: '', vin: ''};
  onInputChange = e => this.setState({[e.target.name]: e.target.value});
  
  render() {
     return (
      <div>
        <Sidebar />
        <div id="wrapper">
        <OBMHeader />
          <div>
            <div className="center">
              <p id="centered">Vehicle Diagnostic</p>
                <form className="formone">
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
                    <br />
                    <br />
                    

                <button onClick={(e) => {  
                    e.preventDefault();
                    this.props.onSubmit(this.state);
                  }}>Submit</button>

                  </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Form;
