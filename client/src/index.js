import React, {Component} from 'react';
import { render } from 'react-dom';
import { YouTubeSearch } from './YouTubeSearch';


window.React = React

render (
	<YouTubeSearch />,
	document.getElementById('root')
	)


// class YouTube extends Component {
// 	render(){
// 		return(
// 			<div>
// 				<YouTubeSearch />
// 				</div>
// 			)
// 	}
// }

// ReactDOM.render(<YouTube />, document.getElementById('root'))