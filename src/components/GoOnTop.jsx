import React, { useEffect } from "react";
import { AiFillUpCircle } from "react-icons/ai";

export const GoOnTop = () => {
	useEffect(() => {
		const scroll = () => {
			const goBtn = document.querySelector(".goTop");
			const y = window.scrollY;
			if (y > 150) {
				goBtn.style.display = "flex";
			} else {
				goBtn.style.display = "none";
			}
		};

		window.addEventListener("scroll", scroll);

		return () => window.addEventListener("scroll", scroll);
	});

	const handleClick = (h) => {
		console.log(h);
		if (h >= 0) {
			setTimeout(() => {
				window.scroll(0, h);
				handleClick(h - 100);
			}, 10);
		}
	};

	return (
		<div className="goTop" onClick={() => handleClick(window.scrollY)}>
			<AiFillUpCircle />
		</div>
	);
};
