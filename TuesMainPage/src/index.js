import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Elements } from './theme'

class Example extends Component {

	render () {
		return (
			<div>
				<Elements />
			</div>

			)
	}

ReactDOM.render(<Example />, document.getElementById('root'))