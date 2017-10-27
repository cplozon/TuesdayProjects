import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { YouTubeSearch } from './YouTubeSearch';
import Diagnostic from './components/ODM/diagnostic';

window.React = React

class Root extends Component {
	render (){
		return (
			<div>
				<YouTubeSearch />
				<Diagnostic />
			</div>
			)


	}

}

ReactDOM.render(<Root />, document.getElementById('root'))