import React, { Component } from 'react';
import ChartHeader from "./ChartHeader";
import SidebarTwo from '../theme/SidebarTwo';
import Footer from '../theme/Footer';

class HighwaySpeeds extends Component {
	render(){
		return (
			<div>
      			<SidebarTwo />
        			<div id="wrapper">
						<div>
							<ChartHeader />
								<section id="mainchart">
								<div className="bigtext">
									<p>/</p><br /></div>
									<div className="inner">
										<div className="chart">
											<div className="row" id="flowheading">
												
												<div className="col-6-md">
													<h2>Recommendation</h2>
													<br />
													<h2>Replace both the spark plugs and wires.</h2>
													<br />
													<a href="/MainChart" className="button submit" id="space">Start Over</a>
												<br />
													
												</div>
												
												<div className="col-6-md" id="boxtext">	
													

												</div>
										
											</div>

										</div>
										<br />
									</div>
									<Footer />
								</section>
						</div>
					</div>
			</div>

		)
	}
}

export default HighwaySpeeds


