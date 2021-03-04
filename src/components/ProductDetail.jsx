import React from "react";
import { Redirect } from "react-router-dom";
import { AiOutlineRollback, AiOutlineShopping } from "react-icons/ai";
import { PriceComponent } from "../helpers/price";

export const ProductDetail = ({ produit, goBack, addToCart }) => {
	const { title, img, price, info, promo, inCart } = { ...produit };

	const handleAddToCart = () => {
		addToCart(produit);
	};

	return (
		<>
			{produit ? (
				<div className="product_detail">
					<div className="detail_content">
						<img src={img} alt={title} />
					</div>
					<div className="detail_price">
						<h4>{title}</h4>
						<p>{info}</p>
						<div className="prices">
							<PriceComponent price={price} promo={promo} />
						</div>
						<div className="actionBtn">
							<button
								className="btn action"
								disabled={inCart}
								onClick={handleAddToCart}>
								<AiOutlineShopping />
							</button>
							<button className="btn action" onClick={goBack}>
								<AiOutlineRollback />
							</button>
						</div>
					</div>
				</div>
			) : (
				<Redirect to="/home" />
			)}
		</>
	);
};
