import React, { Component } from 'react';
import ChartHeader from "./ChartHeader";
import SidebarTwo from '../theme/SidebarTwo';
import Footer from '../theme/Footer';

class LooksLike extends Component {
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
											<div className="row" id="flowhead">
												
												<div className="col-6-md">
													<a href="/Smoke" className="button submit" id="space">Smoke</a>
												<br />
													<a href="/Smoke" className="button submit" id="space">Poor Gas Milage</a>
												<br />
													<a href="/Smoke" className="button submit" id="space">A Tire Wearing Out</a>
												<br />
													<a href="/Smoke" className="button submit" id="space">Warning Light On</a>
												<br />
													<a href="/Smoke" className="button submit" id="space">Steam</a>
												<br />
													<a href="#two" className="button submit" id="space">High Engine Temperature</a>
												<br />
													<a href="/MainChart" className="button submit">Start Over</a>
												</div>
												
												<div className="col-6-md" id="boxtext">
													<p></p>

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

export default LooksLike
