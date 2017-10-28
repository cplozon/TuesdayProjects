import React from 'react';
import {render} from 'react-dom';
import { Router, Route } from "react-router";

import Diagnostic from './components/ODM/diagnostic';
import YouTubeSeach from './components/YouTube/YouTubeSearch';
import Elements from './components/theme/Elements';

class Root extends React.Component {
	render() {
		return (
			<Router>
				<Route path={"/"} component={Elements} />
				

				<Route path={"/VideoSearch"} component={YouTubeSeach} />
				<Route path={"/Diagnostic"} component={Diagnostic} />
			</Router>
			);
	}

}

render(<Root />, window.document.getElementById('root'));

 