import React, { Component } from 'react';
import ChartHeader from "./ChartHeader";
import SidebarTwo from '../theme/SidebarTwo';
import Footer from '../theme/Footer';

class SmellsLike extends Component {
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
													<a href="/SmellOne" className="button submit" id="space">Rotton Egg Smell</a>
												<br />
													<a href="/SmellTwo" className="button submit" id="space">Musty/Moldy Smell From Vents And Poor Cooling</a>
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

export default SmellsLike

