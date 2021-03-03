import React from "react";
import { Product } from "./Product";

export const ProductList = ({ lesProduits, history }) => {
	const query = history.location.pathname;

	const handleClick = (p) => {
		const url = `${query}/${p.id}`;
		history.push(url, p);
	};

	return (
		<div className="products_grid">
			{lesProduits &&
				lesProduits.map((p) => (
					<Product
						informations={p}
						handleClick={() => handleClick(p)}
						key={p.id}
					/>
				))}
		</div>
	);
};
