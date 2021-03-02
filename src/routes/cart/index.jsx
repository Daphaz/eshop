import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";

const Cart = ({ history }) => {
	return (
		<Layout history={history}>
			<Title title="cart" />
		</Layout>
	);
};

export default Cart;
