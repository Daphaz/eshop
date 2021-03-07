import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";
import { ProductList } from "../../components/ProductList";
import { Redirect } from "react-router-dom";

const Category = ({
	category,
	history,
	match,
	products,
	addToCart,
	nbProduit,
}) => {
	const catId = parseInt(match.params.id);

	const productsFilter = products.filter((p) => p.category_id === catId);

	return (
		<>
			{category[catId] ? (
				<Layout history={history} nbProduit={nbProduit}>
					<Title title="nos" subtitle={category[catId].name} />
					<ProductList
						lesProduits={productsFilter}
						history={history}
						addToCart={addToCart}
					/>
				</Layout>
			) : (
				<Redirect to="/home" />
			)}
		</>
	);
};

export default Category;
