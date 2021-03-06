import React from "react";

const Dot = ({ active }) => {
	return (
		<span
			className="dot"
			style={{
				backgroundColor: active ? "var(--white-color)" : "var(--black-color)",
			}}></span>
	);
};

export const Dots = ({ images, activeIndex }) => {
	return (
		<div className="dots">
			{images.map((img, i) => (
				<Dot key={img} active={activeIndex === i} />
			))}
		</div>
	);
};
