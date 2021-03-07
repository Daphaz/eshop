import React from "react";

const Dot = ({ active }) => {
	return (
		<span
			className="dot"
			style={{
				backgroundColor: active ? "var(--white-color)" : "var(--primary-color)",
			}}></span>
	);
};

export const Dots = ({ images, activeIndex }) => {
	return (
		<div className="dots">
			{images.map((img, i) => (
				<Dot key={img + i} active={activeIndex === i} />
			))}
		</div>
	);
};
