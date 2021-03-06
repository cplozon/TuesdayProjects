import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import { Field, reduxForm } from 'redux-form';  
import { Link } from 'react-router';  
import { loginUser } from '../../actions';
import SidebarTwo from '../theme/SidebarTwo'
import Footer from '../theme/Footer'
import LogInHeader from './LogInHeader'


const form = reduxForm({  
  form: 'login'
});

class Login extends Component {  
  handleFormSubmit(formProps) {
    this.props.loginUser(formProps);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
    <div>
      <SidebarTwo />
        <div id="wrapper">
          <LogInHeader />
            <section id="centered">
            <div className="row" id="centerwhite">
             <div className="col-md-12">
              <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              {this.renderAlert()}
            <div>
            <label>Email</label>
            <Field name="email" className="form-control" component="input" type="text" placeholder="Enter Your Email"/>
          </div>
          <div>
            <label>Password</label>
            <Field name="password" className="form-control" component="input" type="password" />
          </div>
            <br />
              <br />
          <button type="submit" className="button submit">Login</button>
        </form>
      </div>
      </div>
      <br />
      <br />
      <br />

      </section>
      <Footer />
      </div>
      </div>

    );
  }
}

function mapStateToProps(state) {  
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
  };
}

export default connect(mapStateToProps, { loginUser })(form(Login));  