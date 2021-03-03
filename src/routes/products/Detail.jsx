import React from "react";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail";

const Detail = ({ history }) => {
	return (
		<Layout history={history}>
			<ProductDetail produit={history.location.state} />
		</Layout>
	);
};

export default Detail;
