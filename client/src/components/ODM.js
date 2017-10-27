
import React, {Component} from 'react';
import { render } from 'react-dom';
import Diagnostic from './components/diagnostic';

window.React = React

render (
		<Diagnostic />,
		document.getElementById('diagnostic')
	)

// const AppODM = () => <Diagnostic />
  
// export default AppODM;