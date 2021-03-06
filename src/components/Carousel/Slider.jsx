import React from "react";

export const Slider = ({ children, transition, translate, width }) => {
	return (
		<div
			className="slider"
			style={{
				transform: `translateX(-${translate}px)`,
				transition: `transform ease-out ${transition}s`,
				width,
			}}>
			{children}
		</div>
	);
};
