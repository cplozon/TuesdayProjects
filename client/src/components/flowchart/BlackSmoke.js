import React, { Component } from 'react';
import ChartHeader from "./ChartHeader";
import Sidebar from '../theme/Sidebar';
import Footer from '../theme/Footer';

class BlackSmoke extends Component {
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
											<p>"Recommendation"</p>
											<p>"Check your air filter and replace it. However if the air filter looks good, there might be an issue with a fuel injection sensor"</p>
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

export default BlackSmoke