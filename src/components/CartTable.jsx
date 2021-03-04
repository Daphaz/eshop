import React from "react";
import { CartItem } from "./CartItem";
import { CartFooter } from "./CartFooter";

export const CartTable = ({ history, lesProduitsInCart, removeToCart }) => {
	return (
		<>
			{lesProduitsInCart && (
				<div className="cart_container">
					{lesProduitsInCart.length > 0 ? (
						<>
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
							{lesProduitsInCart.map((p) => (
								<CartItem
									lesProduitsInCart={p}
									removeToCart={removeToCart}
									key={p.id}
								/>
							))}
							<CartFooter history={history} />
						</>
					) : (
						<h2>Vous n'avez pas encore de produits dans votre panier</h2>
					)}
				</div>
			)}
		</>
	);
};
