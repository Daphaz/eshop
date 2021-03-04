import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";
import { CartTable } from "../../components/CartTable";

const Cart = ({ history, lesProduitsInCart }) => {
	return (
		<Layout history={history}>
			<div className="container">
				<Title title="votre" subtitle="panier" />
				<CartTable history={history} lesProduitsInCart={lesProduitsInCart} />
			</div>
		</Layout>
	);
};

export default Cart;
