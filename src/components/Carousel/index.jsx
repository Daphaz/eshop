import React, { useState, useEffect, useRef } from "react";
import { Slide } from "./Slide";
import { Slider } from "./Slider";
import { Dots } from "./Dots";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import useSize from "../../helpers/context";

const images = [
	{ path: "/img/banner1.jpg" },
	{ path: "/img/banner2.jpg" },
	{ path: "/img/banner3.jpg" },
	{ path: "/img/banner4.jpg" },
];

export const Carousel = () => {
	const firstSlide = images[0];
	const secondSlide = images[1];
	const lastSlide = images[images.length - 1];
	const { width } = useSize();
	const [state, setState] = useState({
		activeIndex: 0,
		translate: 0,
		transition: 0.45,
		_slides: [lastSlide, firstSlide, secondSlide],
		autoPlay: null,
	});

	const { activeIndex, translate, transition, _slides, autoPlay } = state;

	const autoPlayRef = useRef();
	const transitionRef = useRef();
	const resizeRef = useRef();

	useEffect(() => {
		autoPlayRef.current = nextSlide;
		transitionRef.current = smoothTansition;
		resizeRef.current = handleResize;
	});

	useEffect(() => {
		const play = () => {
			autoPlayRef.current();
		};

		const smooth = (e) => {
			//if (e.target.className.includes("slider")) {
			transitionRef.current();
			//}
		};

		const resize = () => {
			resizeRef.current();
		};

		let interval = null;

		window.addEventListener("transitionend", smooth);
		window.addEventListener("resize", resize);

		if (autoPlay) interval = setInterval(play, autoPlay * 1000);

		return () => {
			window.removeEventListener("transitionend", smooth);
			window.removeEventListener("resize", resize);
			if (autoPlay) {
				clearInterval(interval);
			}
		};
	}, [autoPlay]);

	useEffect(() => {
		if (transition === 0) setState({ ...state, transition: 0.45 });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [transition]);

	const smoothTansition = () => {
		let _slides = [];

		if (activeIndex === images.length - 1) {
			_slides = [images[images.length - 2], lastSlide, firstSlide];
		} else if (activeIndex === 0) {
			_slides = [lastSlide, firstSlide, secondSlide];
		} else {
			_slides = images.slice(activeIndex - 1, activeIndex + 2);
		}
		setState({
			...state,
			_slides,
			transition: 0,
			translate: width,
		});
	};

	const handleResize = () => {
		setState({
			...state,
			translate: width,
			transition: 0,
		});
	};

	const nextSlide = () => {
		setState({
			...state,
			activeIndex: activeIndex === images.length - 1 ? 0 : activeIndex + 1,
			translate: width + translate,
		});
	};

	const prevSlide = () => {
		setState({
			...state,
			activeIndex: activeIndex === 0 ? images.length - 1 : activeIndex - 1,
			translate: 0,
		});
	};

	return (
		<div className="carousel_container">
			<Slider
				translate={translate}
				transition={transition}
				width={width * _slides.length}>
				{_slides.map((img, i) => (
					<Slide url_img={img.path} key={i + 1} />
				))}
			</Slider>
			<Dots images={images} activeIndex={activeIndex} />
			{!autoPlay && (
				<>
					<div className="left_arrow" onClick={prevSlide}>
						<AiOutlineArrowLeft />
					</div>
					<div className="right_arrow" onClick={nextSlide}>
						<AiOutlineArrowRight />
					</div>
				</>
			)}
		</div>
	);
};
