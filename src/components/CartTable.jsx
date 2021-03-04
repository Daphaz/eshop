import React from "react";
import { CartItem } from "./CartItem";
import { CartFooter } from "./CartFooter";

export const CartTable = () => {
	const produit = {
		img: "/img/chaussure/air_nike_270.jpeg",
		title: "air nike 270",
		price: 84,
	};
	return (
		<div className="cart_container">
			<ul className="cart_label">
				<li>
					<span>produit</span>
				</li>
				<li>
					<span>nom du produit</span>
				</li>
				<li>
					<span>p. unitaire</span>
				</li>
				<li>
					<span>quantité</span>
				</li>
				<li>
					<span>supprimer</span>
				</li>
				<li>
					<span>p. total</span>
				</li>
			</ul>
			<CartItem produit={produit} />
			<CartFooter />
		</div>
	);
};
