import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";
import { ProductList } from "../../components/ProductList";

const Products = ({ history, lesProduits }) => {
	return (
		<Layout history={history}>
			<Title title="nos" subtitle="produits" />
			<ProductList lesProduits={lesProduits} />
		</Layout>
	);
};

export default Products;
