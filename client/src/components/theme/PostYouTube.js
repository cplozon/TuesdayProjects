import React, { Component } from 'react'

export default (props) => {
	return (
		<section>
			<div>
			<a href={props.href} className="image"><img src={props.image} alt="" data-position="center center" /></a>
			<div className="content">
				<div className="inner">
					<h2>{props.title}</h2>
					<div className="textup">
					<h5>{props.text}</h5>
					</div>
					<ul className="actions">
						<li><a href={props.href} className="button">Home</a></li>
					</ul>
				</div>
			</div>
			</div>
		</section>
	)
}
