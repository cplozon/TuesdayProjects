import React, { Component } from 'react';
import ChartHeader from "./ChartHeader";
import Sidebar from '../theme/Sidebar';
import Footer from '../theme/Footer';

class LooksLike extends Component {
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
											<li><a href="/Smoke" className="button submit">Smoke</a></li>
											<li><a href="#one" className="button submit">Poor Gas Milage</a></li>
											<li><a href="#one" className="button submit">A Tire Wearing Out</a></li>
											<li><a href="#one" className="button submit">Warning Light On</a></li>
											<li><a href="#two" className="button submit">Steam</a></li>
											<li><a href="#two" className="button submit">High Engine Temperature</a></li>
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

export default LooksLike