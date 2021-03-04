import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";
import { ProductList } from "../../components/ProductList";

const Home = ({ history, lesProduits, addToCart }) => {
	const promoProduct = lesProduits.filter((val) => val.promo > 0);
	return (
		<Layout history={history}>
			<Title title="en" subtitle="promotion" />
			<ProductList
				lesProduits={promoProduct.slice(0, 4)}
				history={history}
				addToCart={addToCart}
			/>
		</Layout>
	);
};

export default Home;
