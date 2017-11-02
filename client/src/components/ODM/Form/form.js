import React, { Component } from "react";
import "./form.css";
import Footer from '../../theme/Footer'
import Sidebar from '../../theme/SidebarTwo'
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
          <section id="centered">
            <div className="centers">
            <p id="centered">Diagnostic Trouble Codes or OBD2 Trouble Codes are codes that the car’s OBD system uses to notify you about an issue. Each code corresponds to a fault detected in the car. When the vehicle detects an issue, it will activate the corresponding trouble code.
              A vehicle stores the trouble code in it’s memory when it detects a component or system that’s not operating within acceptable limits. The code will help you to identify and fix the issue within the car.
              Each trouble code consists of one letter and four digits, such as P1234.</p>
              <h1 id="centered">Vehicle Diagnostic - Enter Your Information</h1>
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
            </section>
          <Footer />
         
        </div>
      </div>
    );
  }
}

export default Form;
