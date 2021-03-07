import React from "react";

export const Title = ({ title, subtitle }) => {
	return (
		<div className="row">
			<h2 className="title_main">
				{title}
				{subtitle && <strong> {subtitle}</strong>}
			</h2>
		</div>
	);
};
