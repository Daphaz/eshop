import React from "react";
import { Layout } from "../../components/Layout";
import { ProductDetail } from "../../components/ProductDetail";

const Detail = ({ history, addToCart }) => {
	const goBack = () => {
		history.goBack();
	};

	return (
		<Layout history={history}>
			<ProductDetail
				produit={history.location.state}
				addToCart={addToCart}
				goBack={goBack}
			/>
		</Layout>
	);
};

export default Detail;
