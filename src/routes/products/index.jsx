import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";
import { ProductList } from "../../components/ProductList";

const Products = ({ history, lesProduits, addToCart }) => {
	return (
		<Layout history={history}>
			<Title title="nos" subtitle="produits" />
			<ProductList
				lesProduits={lesProduits}
				history={history}
				addToCart={addToCart}
			/>
		</Layout>
	);
};

export default Products;
