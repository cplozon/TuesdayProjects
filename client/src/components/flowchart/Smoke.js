import React, { Component } from 'react';
import ChartHeader from "./ChartHeader";
import Sidebar from '../theme/Sidebar';
import Footer from '../theme/Footer';

class Smoke extends Component {
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
											<p>"What Color Is The Smoke?"</p>
											<li><a href="/BlackSmoke" className="button submit">Black Smoke</a></li>
											<li><a href="#one" className="button submit">White Smoke</a></li>
											<li><a href="#one" className="button submit">Blue Smoke</a></li>
											<li><a href="/" className="button submit">Main Page</a></li>
											<li><a href="/MainChart" className="button submit">Start Over</a></li>
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

export default Smoke