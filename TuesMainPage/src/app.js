import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Elements } from './theme'
import YouTube from './components/YouTube'

class Application extends Component {

	render () {
		return (
			<div>
				{/*<Elements />*/}
				<p>Hello</p>
				<YouTube />
			</div>

			)
	}
}
export default Application;

