import React from "react";
import { Redirect } from "react-router-dom";
import { AiOutlineRollback, AiOutlineShopping } from "react-icons/ai";
import { PriceComponent } from "../helpers/price";

export const ProductDetail = ({ produit, goBack }) => {
	const { title, img, price, info, promo } = { ...produit };

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
							<div className="action">
								<AiOutlineShopping />
							</div>
							<div className="action" onClick={goBack}>
								<AiOutlineRollback />
							</div>
						</div>
					</div>
				</div>
			) : (
				<Redirect to="/home" />
			)}
		</>
	);
};
