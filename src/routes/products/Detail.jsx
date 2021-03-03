import React from "react";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail";

const Detail = ({ history }) => {
	const goBack = () => {
		history.goBack();
	};
	return (
		<Layout history={history}>
			<ProductDetail produit={history.location.state} goBack={goBack} />
		</Layout>
	);
};

export default Detail;
