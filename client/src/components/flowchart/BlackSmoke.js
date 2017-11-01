
import React, { Component } from 'react';
import ChartHeader from "./ChartHeader";
import SidebarTwo from '../theme/SidebarTwo';
import Footer from '../theme/Footer';

class BlackSmoke extends Component {
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
													<div className="col-6-md">
													<h2>When and where do you see black smoke?</h2>
													<a href="/BlackSmokeOne" className="button submit" id="space">It comes from the exhaust while driving</a>
												<br />
													<a href="/BlackSmokeTwo" className="button submit" id="space">Right After Starting The Engine</a>
												<br />
													<br />
													<a href="/MainChart" className="button submit" id="space">Start Over</a>
												<br />
													
												</div>
												
												<div className="col-6-md" id="boxtext">	
													
												</div>
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

export default BlackSmoke


