import React, { Component } from 'react';
import ChartHeader from "./ChartHeader";
import SidebarTwo from '../theme/SidebarTwo';
import Footer from '../theme/Footer';

class FeelsLike extends Component {
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
													<a href="/" className="button submit" id="space">Abnormal Breaking</a>
												<br />
													<a href="/" className="button submit" id="space">Sluggish</a>
												<br />
													<a href="/" className="button submit" id="space">Strange Shifting</a>
												<br />
													<a href="/" className="button submit" id="space">Vehicle Rides Rough</a>
												<br />
													<a href="/" className="button submit" id="space">Abnormal Stearing</a>
												<br />
													<a href="/MainChart" className="button submit" id="space">Start Over</a>
												<br />
												<br />
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

export default FeelsLike


