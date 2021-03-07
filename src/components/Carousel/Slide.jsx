import React from "react";

export const Slide = ({ url_img }) => {
	return (
		<div className="slide" style={{ backgroundImage: `url(${url_img})` }}></div>
	);
};
