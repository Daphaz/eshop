import { useState, useRef } from "react";
import animejs from "animejs";
import useSize from "../../helpers/context";

export default function LogicHeader() {
	const sizes = useSize();
	const [toggle, setToggle] = useState(false);

	const menuContainer = useRef(null);

	const handleClick = () => {
		const scaleMenu = sizes.height >= 600 ? 85 : 60;
		const tl = animejs.timeline({
			duration: 1500,
			easing: "easeInOutSine",
		});
		if (!toggle) {
			const activeContainer = () => {
				menuContainer.current.style.display = "block";
				document.body.classList.add("menu_open");
			};
			tl.add({
				targets: ".menu_bg",
				scale: [1, scaleMenu, 1],
				duration: 1500,
				begin: activeContainer,
			}).add(
				{
					targets: ".menu_mobile",
					opacity: 1,
					duration: 200,
				},
				"-=500"
			);
		} else {
			const inactiveContainer = () => {
				menuContainer.current.style.display = "none";
				document.body.classList.remove("menu_open");
			};
			tl.add({
				targets: ".menu_bg",
				scale: [1, scaleMenu, 1],
				duration: 1500,
				complete: inactiveContainer,
			}).add(
				{
					targets: ".menu_mobile",
					opacity: 0,
					duration: 200,
				},
				"-=500"
			);
		}
		setToggle(!toggle);
	};

	return {
		handleClick,
		menuContainer,
	};
}
