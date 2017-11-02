import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { Provider } from 'react-redux';  
import { createStore, applyMiddleware } from 'redux';  
import reduxThunk from 'redux-thunk';  
import reducers from './reducers/index';  
import { AUTH_USER } from './actions/types';
import cookie from 'js-cookie';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);  
const store = createStoreWithMiddleware(reducers);

const token = cookie.set('token');

if (token) {  
  store.dispatch({ type: AUTH_USER });
}

 ReactDOM.render(
   <Provider store={store}>
     <Router />
   </Provider>,
   document.getElementById('root')
 );
