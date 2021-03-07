import React from "react";
import { Layout } from "../../components/Layout";
import { Title } from "../../components/Title";
import { ProductList } from "../../components/ProductList";

const Search = ({ history, nbProduit, addToCart, lesProduits, location }) => {
	const searchValue = location.state;
	const reg = searchValue.match("/^[0-9]|[a-z]|[A-Z]$/")
		? new RegExp(`${searchValue}`, "i")
		: new RegExp("''", "i");
	const searchResult = lesProduits.filter((p) => reg.test(p.title));

	return (
		<Layout history={history} nbProduit={nbProduit}>
			<Title title="recherche pour" subtitle={`'${searchValue}'`} />
			{searchResult.length > 0 && searchValue !== "" ? (
				<ProductList
					history={history}
					addToCart={addToCart}
					lesProduits={searchResult}
				/>
			) : (
				<h4>Désolé aucun article trouvé pour "{searchValue}"</h4>
			)}
		</Layout>
	);
};

export default Search;
