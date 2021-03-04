import React from "react";

export const CartFooter = () => {
	return (
		<div className="cart_footer">
			<div className="total">
				<div className="total_price">
					<span>total :&nbsp;</span>
					<span>253 €</span>
				</div>
				<div>
					<span>
						* Les frais d'expédition ne sont pas inclus pour le moment
					</span>
				</div>
			</div>
			<div className="btn_link">
				<button className="btn achat">Poursuivre mes achats</button>
				<button className="btn commande">Valider ma commande</button>
			</div>
		</div>
	);
};
