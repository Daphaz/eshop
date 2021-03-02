import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import LogicHeader from "./LogicHeader";

export const Header = ({ history }) => {
	const { handleClick, menuContainer } = LogicHeader();

	const redirectRoute = (url) => {
		history.push(url);
	};

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
						<li>
							<Link to="/products">Products</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
			<header className="header">
				<div className="container">
					<div className="logo" onClick={() => redirectRoute("/")}>
						Eshop.
					</div>
					<nav className="menu_xl">
						<ul>
							<li>
								<Link to="/products">Products</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
						<div className="search-container">
							<SearchBar />
						</div>
					</nav>
					<div className="btn-container">
						<button className="btn" onClick={() => redirectRoute("/cart")}>
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
