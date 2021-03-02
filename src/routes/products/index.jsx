import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";

const Products = ({ history }) => {
	return (
		<Layout history={history}>
			<Title title="Products" />
		</Layout>
	);
};

export default Products;
