import axios from 'axios';  
import { browserHistory } from 'react-router';  
import cookie from 'js-cookie';  
import { AUTH_USER,  
         AUTH_ERROR,
         UNAUTH_USER,
         PROTECTED_TEST } from './types';

const API_URL = 'http://localhost:3001';

export function errorHandler(dispatch, error, type) {  
  let errorMessage = '';

  if(error && error.data.error) {
    errorMessage = error.data.error;
  } else if(error && error.data){
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if(error && error.status === 401) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.'
    });
    logoutUser();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}

export function loginUser({ email, password }) {  
  return function(dispatch) {
    axios.post(`${API_URL}/login`, { email: email, password: password })
    .then(response => {
      cookie.set('token', response.data.token, { path: '/' });
      dispatch({ type: AUTH_USER });
      window.location.href = '/';
    })
    .catch((error) => {
      console.log(error);
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
    }
  }

export function registerUser({ email, firstName, lastName, password }) {  
  return function(dispatch) {
    axios.post(`${API_URL}/register`, { email, firstName, lastName, password })
    .then(response => {
      cookie.set('token', response.data.token, { path: '/' });
      dispatch({ type: AUTH_USER });
      window.location.href = '/';
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
  }
}

export function logoutUser() {  
  return function (dispatch) {
    dispatch({ type: UNAUTH_USER });
    cookie.remove('token', { path: '/' });

    window.location.href = '/';
  }
}

export function protectedTest() {  
  return function(dispatch) {
    axios.get(`${API_URL}/protected`, {
      headers: { 'Authorization': cookie.load('token') }
    })
    .then(response => {
      dispatch({
        type: PROTECTED_TEST,
        payload: response.data.content
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
  }
}