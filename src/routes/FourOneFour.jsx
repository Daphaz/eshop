import React from "react";
import { Link } from "react-router-dom";

const FourOneFour = () => {
	return (
		<div className="fourOneFour">
			<div className="row">
				<h4>404</h4>
				<span></span>
				<p>Page not find.. :(</p>
			</div>
			<div className="row">
				<Link to="/">Return</Link>
			</div>
		</div>
	);
};

export default FourOneFour;
