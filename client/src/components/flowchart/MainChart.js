import React, { Component } from 'react';
import ChartHeader from "./ChartHeader";
import SidebarTwo from '../theme/SidebarTwo';
import Footer from '../theme/Footer';

class MainChart extends Component {
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
											<div className="col-6-md" id="boxtext">	
													<h3>Diagnose your car problems here.</h3>
													<h3>Click on a button that best describes your car problem.</h3>
													<h3>Main menu for your car diagnostic analysis.</h3>
													<br />

												</div>
												
												<div className="col-6-md">
													<a href="/LooksLike" className="button submit" id="space">Looks Like</a>
												<br />
													<a href="/SoundsLike" className="button submit" id="space">Sounds Like</a>
												<br />
													<a href="/SmellsLike" className="button submit" id="space">Smells Like</a>
												<br />
													<a href="/FeelsLike" className="button submit" id="space">Feels  Like</a>
												<br />
													<a href="/NotWorking" className="button submit">Not Working</a>
												<br />
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

export default MainChart
