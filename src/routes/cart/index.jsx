import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";
import { CartTable } from "../../components/CartTable";

const Cart = ({ history, lesProduitsInCart, removeToCart, nbProduit }) => {
	return (
		<Layout history={history} nbProduit={nbProduit}>
			<div className="container">
				<Title title="votre" subtitle="panier" />
				<CartTable
					history={history}
					lesProduitsInCart={lesProduitsInCart}
					removeToCart={removeToCart}
				/>
			</div>
		</Layout>
	);
};

export default Cart;
