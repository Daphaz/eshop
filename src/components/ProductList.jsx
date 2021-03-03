import React from "react";
import { Product } from "./Product";

export const ProductList = ({ lesProduits }) => {
	return (
		<div className="products_grid">
			{lesProduits &&
				lesProduits.map((p) => <Product informations={p} key={p.id} />)}
		</div>
	);
};
