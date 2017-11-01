import React, { Component } from 'react';
import ChartHeader from "./ChartHeader";
import SidebarTwo from '../theme/SidebarTwo';
import Footer from '../theme/Footer';

class NotWorking extends Component {
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
													<a href="/LooksLike" className="button submit" id="space">Poor Gas Milage</a>
												<br />
													<a href="/SoundsLike" className="button submit" id="space">The Engine Keeps Running After The Car Is Off</a>
												<br />
													<a href="/SmellsLike" className="button submit" id="space">Car Won't Start</a>
												<br />
													<a href="/FeelsLike" className="button submit" id="space">Vehicle Not Moving If I Shift</a>
												<br />
													<a href="/FeelsLike" className="button submit" id="space">Vehicle Won't Shift Into Park</a>
												<br />
													<a href="/FeelsLike" className="button submit" id="space">Lack Of Cold/Hot Air</a>
												<br />
													<a href="/FeelsLike" className="button submit" id="space">Engine Feels Weak</a>
												<br />
													<a href="/FeelsLike" className="button submit" id="space">Engine Stalls</a>
												<br />

													<a href="/MainChart" className="button submit">Start Over</a>
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

export default NotWorking



