import React, { useState } from "react";
import { Slide } from "./Slide";
import { Slider } from "./Slider";
import { Dots } from "./Dots";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import useSize from "../../helpers/context";

const images = [
	{ path: "/img/banner1.jpeg" },
	{ path: "/img/banner2.png" },
	{ path: "/img/banner3.png" },
];

export const Carousel = () => {
	const { width } = useSize();
	const [state, setState] = useState({
		activeIndex: 0,
		translate: 0,
		transition: 0.45,
	});

	const nextSlide = () => {
		if (state.activeIndex === images.length - 1) {
			return setState({
				...state,
				translate: 0,
				activeIndex: 0,
			});
		}
		setState({
			...state,
			activeIndex: state.activeIndex + 1,
			translate: (state.activeIndex + 1) * width,
		});
	};

	const prevSlide = () => {
		if (state.activeIndex === 0) {
			return setState({
				...state,
				translate: (images.length - 1) * width,
				activeIndex: images.length - 1,
			});
		}
		setState({
			...state,
			activeIndex: state.activeIndex - 1,
			translate: (state.activeIndex - 1) * width,
		});
	};

	return (
		<div className="carousel_container">
			<div className="left_arrow" onClick={prevSlide}>
				<AiOutlineArrowLeft />
			</div>
			<Slider
				translate={state.translate}
				transition={state.transition}
				width={width * images.length}>
				{images.map((img, i) => (
					<Slide url_img={img.path} key={i} />
				))}
			</Slider>
			<div className="right_arrow" onClick={nextSlide}>
				<AiOutlineArrowRight />
			</div>
			<Dots images={images} activeIndex={state.activeIndex} />
		</div>
	);
};
