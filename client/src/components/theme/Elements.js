import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Feature from './Feature'
import Form from './Form'
import Post from './Post'
import Contact from './Contact'

const pic1 = require('./images/pic01.jpg')
const pic2 = require('./images/pic02.jpg')
const pic3 = require('./images/pic03.jpg')
const pic4 = require('./images/pic04.jpg')
const pic8 = require('./images/pic08.jpg')
const pic7 = require('./images/pic07.jpg')
const pic9 = require('./images/pic09.jpg')


export default (props) => {
	return (
		<div>
			<Sidebar />
			<div id="wrapper">
				<section id="intro" className="wrapper style1 fullscreen fade-up">
					<div className="inner">
						<h1>My Auto Medic</h1><br />
						<div className="bigtext">
						<p>Supplying Top Rated How-To Videos, Articles, Step By Step Diagnosis, And Your Local Mechanic Information</p><br /></div>
						<div className="bigtext">
						<p>Your First Resource For Do-It-Yourself Automotive Repairs And Car Diagnostic Information</p><br /></div>
						<div className="bigtext">
						<p>Diagnostic Question And Answer For An Accurate Diagnosis</p><br /></div>
						<div className="bigtext">
						<p>The Most Helpful YouTube Videos Based On Your Search</p><br /></div>
						<div className="bigtext">
						<p>Top Articles From The Best DIY Mechanic Sites</p><br /></div>
						<div className="bigtext">
						<p>On-Board Diagnostic (OBD) Diagnostic Search</p><br /></div>
						<div className="bigtext">
						<p>Find Local Mechanics In Your Area</p><br /></div>
						<ul className="actions">
							<li><a href="#one" className="button scrolly">Find A Solution Now</a></li>
						</ul>
					</div>
				</section>

				
				
				<section id="one" className="wrapper style2 spotlights">
					<Post title="Search Your Car Problem" image={pic8} text="Find The Best Information Available For Your DIY Automotive Repair Project" href="/VideoSearch" />
					<Post title="Auto Medic Diagnostic Tool" image={pic4} text="Use Our Unique Step By Step Diagnostic Tool For Solving Your Automotive Problem" href="/MainChart" />
					<Post title="Search Your On-Board Diagnostic Code" image={pic9} text="Search DBD Code To Trouble Shoot Your Car Problem" href="/Diagnostic" />
					<Post title="Find The Best Local Mechanics In Your Area" image={pic7} text="Find The Best Mechanics In Your Area" href="/FindMechanics" />
				</section>

				

				<section id="two" className="wrapper style3 fade-up">
					<div className="inner">
						<h2>Account Log In</h2>
						<p>Sign In My Account</p>
						<div className="features">
							<Feature icon="icon major fa-code" />
							<Feature icon="icon major fa-lock" />
						</div>
						<ul className="actions">
							<li><a href="/" className="button">Learn more</a></li>
						</ul>
					</div>
				</section>

				 <section id="three" className="wrapper style1 fade-up">
				 	<div className="inner">
						<h2>Get in touch</h2>
				 		<p>More Info </p>
				 		<div className="split style1">
				 			<section>
				 				<Form />
				 			</section>
				 			<Contact />
				 		</div>
				 	</div>
				 </section>

			</div>
			<Footer />
		</div>
	)
}
