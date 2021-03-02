import React from "react";
import { SearchBar } from "../SearchBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import LogicHeader from "./LogicHeader";

export const Header = () => {
	const { handleClick, menuContainer } = LogicHeader();
	return (
		<>
			<div className="menu_sm">
				<button className="btn" onClick={handleClick}>
					<BiMenuAltRight />
				</button>
			</div>
			<div className="menu_container" ref={menuContainer}>
				<div className="menu_bg"></div>
				<div className="menu_mobile">
					<ul>
						<li>Product</li>
						<li>Contact</li>
						<li>Cart</li>
						<li>Login</li>
					</ul>
				</div>
			</div>
			<header className="header">
				<div className="container">
					<div className="logo">Eshop.</div>
					<nav className="menu_xl">
						<ul>
							<li>Product</li>
							<li>Contact</li>
						</ul>
						<div className="search-container">
							<SearchBar />
						</div>
					</nav>
					<div className="btn-container">
						<button className="btn">
							<AiOutlineShoppingCart />
						</button>
						<button className="btn">
							<AiOutlineUser />
						</button>
					</div>
				</div>
			</header>
		</>
	);
};
