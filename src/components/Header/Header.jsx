import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import LogicHeader from "./LogicHeader";
import { Modal } from "../Modal";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const Header = ({ history, nbProduit }) => {
	const {
		handleClick,
		handleOpen,
		handleSeePass,
		isOpen,
		seePass,
	} = LogicHeader(history);

	const redirectRoute = (url) => {
		history.push(url);
	};

	return (
		<>
			<div className="menu_sm">
				<button className="btn" onClick={() => handleClick("")}>
					<BiMenuAltRight />
				</button>
			</div>
			<div className="menu_container">
				<div className="menu_bg"></div>
				<div className="menu_mobile">
					<ul>
						<li>
							<p onClick={() => handleClick("/category/0")}>Chaussures</p>
						</li>
						<li>
							<p onClick={() => handleClick("/category/1")}>Chemises</p>
						</li>
						<li>
							<p onClick={() => handleClick("/category/2")}>Montres</p>
						</li>
						<li>
							<p onClick={() => handleClick("/category/3")}>Télephones</p>
						</li>
						<li>
							<p onClick={() => handleClick("/products")}>Produits</p>
						</li>
						<li>
							<p onClick={() => handleClick("/contact")}>Contact</p>
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
								<Link to="/products">Produits</Link>
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
							{nbProduit > 0 && <div className="count_item">{nbProduit}</div>}
							<AiOutlineShoppingCart />
						</button>
						<button className="btn" onClick={handleOpen}>
							<AiOutlineUser />
						</button>
					</div>
				</div>
			</header>
			<Modal handleOpen={handleOpen} isOpen={isOpen}>
				<div className="modal_header">
					<h3>Se connecter</h3>
				</div>
				<form className="login_form">
					<div className="form_group">
						<label htmlFor="username">Nom d'utilisateur</label>
						<input type="text" name="username" id="username" required />
					</div>
					<div className="form_group">
						<label htmlFor="password">Nom d'utilisateur</label>
						<div className="form_control">
							<input
								className="password"
								type={seePass ? "password" : "text"}
								name="password"
								id="password"
								required
							/>
							<button className="btn" onClick={handleSeePass}>
								{seePass ? <AiFillEyeInvisible /> : <AiFillEye />}
							</button>
						</div>
					</div>
					<div className="form_group">
						<div className="form_control">
							<input type="checkbox" name="remember" id="remember" required />
							<label htmlFor="remember">Se souvenir</label>
						</div>
					</div>
					<div className="btn_row">
						<button type="submit" className="btn btn_login">
							connexion
						</button>
					</div>
				</form>
			</Modal>
		</>
	);
};
