import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";
import { CartTable } from "../../components/CartTable";

const Cart = ({
	history,
	lesProduitsInCart,
	removeToCart,
	nbProduit,
	addQuantity,
	removeQuantity,
}) => {
	return (
		<Layout history={history} nbProduit={nbProduit}>
			<div className="container">
				<Title title="votre" subtitle="panier" />
				<CartTable
					history={history}
					lesProduitsInCart={lesProduitsInCart}
					removeToCart={removeToCart}
					addQuantity={addQuantity}
					removeQuantity={removeQuantity}
				/>
			</div>
		</Layout>
	);
};

export default Cart;
