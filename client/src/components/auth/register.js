import React, { Component } from 'react';  
import { connect } from 'react-redux';  
import { Field, reduxForm } from 'redux-form';  
import { registerUser } from '../../actions';
import SidebarTwo from '../theme/SidebarTwo'
import Footer from '../theme/Footer'
import LogInHeader from './LogInHeader'
import AddCarData from '../addCarData/addCarData'

const form = reduxForm({  
  form: 'register',
  validate
});

const renderField = field => (  
    <div>
      <input className="form-control" {...field.input}/>
      {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

function validate(formProps) {  
  const errors = {};

  if (!formProps.firstName) {
    errors.firstName = 'Please enter a first name';
  }

  if (!formProps.lastName) {
    errors.lastName = 'Please enter a last name';
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  return errors;
}

class Register extends Component {  
  handleFormSubmit(formProps) {
    this.props.registerUser(formProps);
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
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        {this.renderAlert()}
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4">
         <br />
          <br />
          <label>First Name</label>
          <Field name="firstName" className="form-control" component={renderField} type="text" />
        </div>
        <br />
        <div className="col-md-4">
         <br />
          <br />
          <label>Last Name</label>
          <Field name="lastName" className="form-control" component={renderField} type="text" />
        </div>
        <div className="col-md-2"></div>
      </div>
      <br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <label>Email</label>
            <Field name="email" className="form-control" component={renderField} type="text" />
          </div>
          <div className="col-md-3"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <label>Password</label>
            <Field name="password" className="form-control" component={renderField} type="password" />
            <br />
              <br />
            <button type="submit" className="button submit">Register</button>
          </div>
          <div className="col-md-3"></div>
        </div>
           <br />
              <br />
      
        <br />
          <br />
      
      </form>
      <AddCarData />
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

export default connect(mapStateToProps, { registerUser })(form(Register));  