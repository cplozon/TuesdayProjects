import React, { Component } from 'react';
import ChartHeader from "./ChartHeader";
import SidebarTwo from '../theme/SidebarTwo';
import Footer from '../theme/Footer';

class SoundsLike extends Component {
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
													<a href="/RoughEngine" className="button submit" id="space">The Engine Is Running Rough</a>
												<br />
													<a href="/" className="button submit" id="space">The Engine Backfires</a>
												<br />
													<a href="/" className="button submit" id="space">Ticking / Tapping</a>
												<br />
													<a href="/" className="button submit" id="space">Squealing Noise</a>
												<br />
													<a href="/" className="button submit" id="space">Sputter Or Cough Noise</a>
												<br />
													<a href="/" className="button submit" id="space">Breaks Making A Noise</a>
												<br />
													<a href="/" className="button submit" id="space">Clunking Sound</a>
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

export default SoundsLike

