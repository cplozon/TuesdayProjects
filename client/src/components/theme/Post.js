import React, { Component } from 'react'

export default (props) => {
	return (
		<section>
			<a href={props.href} className="image"><img src={props.image} alt="" data-position="center center" /></a>
			<div className="content">
				<div className="inner">
					<h2>{props.title}</h2>
					<div className="textup">
					<h5>{props.text}</h5>
					</div>
					<ul className="actions">
						<li><a href={props.href} className="button">More Information</a></li>
					</ul>
				</div>
			</div>
		</section>
	)
}
