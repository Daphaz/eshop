import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";
import { ProductList } from "../../components/ProductList";

const Home = ({ history, lesProduits }) => {
	// eslint-disable-next-line array-callback-return
	const promoProduct = lesProduits.filter((val) => {
		if (val.promo > 0) {
			return val;
		}
	});
	return (
		<Layout history={history}>
			<Title title="en" subtitle="promotion" />
			<ProductList lesProduits={promoProduct.slice(0, 4)} history={history} />
		</Layout>
	);
};

export default Home;
