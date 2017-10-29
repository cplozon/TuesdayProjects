import React, { Component } from 'react'

class Footer extends Component {
	render(){
		return (
			<footer id="footer" className="wrapper style1-alt">

				<div className="inner">
					<div className="row" id="centerfooter">
          				<div className="col-md-6" id="fineline">
							<ul className="menu">
								<li>www.myautomedic.com</li>
								<li>&copy; My Auto Medic | All Rights Reserved</li>
							</ul>
						</div>
						<div className="col-md-6" id="centerfooter">
							<ul className="menu">
								<li>Design By: </li>
								<li>Brad Brandhorst | Cory Lozon | Kevin Packler</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer