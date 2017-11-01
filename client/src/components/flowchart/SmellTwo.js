import React, { Component } from 'react';
import ChartHeader from "./ChartHeader";
import SidebarTwo from '../theme/SidebarTwo';
import Footer from '../theme/Footer';

class SmellTwo extends Component {
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
													<h2>The drain pan of the A/C evaporator unit isn't draining.</h2> 
													<h2>It is best to have an A/C specialist look at this, </h2>
													<h2>as the clog may be further up in the system and difficult to access</h2>
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

export default SmellTwo


