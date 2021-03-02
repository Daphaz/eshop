import { useState, useEffect } from "react";

const useSizes = () => {
	const getSizes = () => {
		return {
			width: window.innerWidth,
			height: window.innerHeight,
		};
	};

	const [useSize, setUseSize] = useState(getSizes());

	useEffect(() => {
		const handleResize = () => {
			setUseSize(getSizes());
		};
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return useSize;
};

export default useSizes;
