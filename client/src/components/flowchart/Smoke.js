
import React, { Component } from 'react';
import ChartHeader from "./ChartHeader";
import SidebarTwo from '../theme/SidebarTwo';
import Footer from '../theme/Footer';

class Smoke extends Component {
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
												<h3>What Color Is The Smoke?</h3>
												<br />
													<a href="/BlackSmoke" className="button submit" id="space">Black Smoke</a>
												<br />
													<a href="/WhiteSmoke" className="button submit" id="space">White Smoke</a>
												<br />
													<a href="/BlueSmoke" className="button submit" id="space">Blue Smoke</a>
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

export default Smoke



