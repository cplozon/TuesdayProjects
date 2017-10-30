import React, { Component } from 'react';
import ChartHeader from "./ChartHeader";
import Sidebar from '../theme/Sidebar';
import Footer from '../theme/Footer';

class MainChart extends Component {
	render(){
		return (
			<div>
      			<Sidebar />
        			<div id="wrapper">
						<div>
							<ChartHeader />
								<section id="mainchart">
									<div className="inner">
										<div className="chart">
											<ul>
											<a href="/LooksLike" className="button submit">Looks Like</a>
											<a href="/SoundsLike" className="button submit">Sounds Like</a>
											<a href="/SmellsLike" className="button submit">Smells Like</a>
											<a href="/FeelsLike" className="button submit">Feels Like</a>
											<a href="/NotWorking" className="button submit">Not Working</a>
											</ul>
										</div>
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
