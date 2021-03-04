import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";
import { CartTable } from "../../components/CartTable";

const Cart = ({ history }) => {
	return (
		<Layout history={history}>
			<div className="container">
				<Title title="votre" subtitle="panier" />
				<CartTable />
			</div>
		</Layout>
	);
};

export default Cart;
