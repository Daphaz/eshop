import { useState } from "react";
import animejs from "animejs";
import useSize from "../../helpers/context";

export default function LogicHeader(history) {
	const sizes = useSize();
	const [toggle, setToggle] = useState(false);
	const [seePass, setSeePass] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = (url) => {
		const menuContainer = document.querySelector(".menu_container");
		const scaleMenu = sizes.height >= 600 ? 85 : 60;
		const tl = animejs.timeline({
			duration: 1500,
			easing: "easeInOutSine",
		});
		if (!toggle) {
			const activeContainer = () => {
				menuContainer.style.display = "block";
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
				menuContainer.style.display = "none";
				document.body.classList.remove("menu_open");
				if (url !== "") {
					history.push(url);
				}
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

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	const handleSeePass = () => {
		setSeePass(!seePass);
	};

	return {
		handleClick,
		handleOpen,
		isOpen,
		handleSeePass,
		seePass,
	};
}
