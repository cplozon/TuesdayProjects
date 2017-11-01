import React, { Component } from 'react'

class SidebarTwo extends Component {
	render(){
		return (
			<section id="sidebar">
				<div className="inner">
					<nav>
						<ul>
							<li><a href="/">My Auto Medic</a></li>
							<li><a href="/#one">DIY Car Repair Resources</a></li>
							<li><a href="/#one">Diagnose Your Car Problem</a></li>
							<li><a href="/#one">Find A Local Mechanic</a></li>
							<li><a href="/#two">Account Log In</a></li>
						</ul>
					</nav>
				</div>
			</section>
		)
	}
}

export default SidebarTwo