import React from "react";
import { priceFormatted } from "../helpers/price";

export const CartFooter = ({ history, lesProduitsInCart }) => {
	const total = lesProduitsInCart.reduce((acc, p) => {
		const newTotal =
			p.promo === 0
				? p.price * p.count
				: ((100 - p.promo) / 100) * p.price * p.count;
		return acc + newTotal;
	}, 0);
	const returnProduct = () => {
		history.push("/products");
	};
	return (
		<div className="cart_footer">
			<div className="total">
				<div className="total_price">
					<span>total :&nbsp;</span>
					<span>{priceFormatted(total)}</span>
				</div>
				<div>
					<span>
						* Les frais d'expédition ne sont pas inclus pour le moment
					</span>
				</div>
			</div>
			<div className="btn_link">
				<button className="btn achat" onClick={returnProduct}>
					Poursuivre mes achats
				</button>
				<button className="btn commande">Valider ma commande</button>
			</div>
		</div>
	);
};
