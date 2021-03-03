import React from "react";
import { Link } from "react-router-dom";
import { priceFormatted } from "../helpers/price";
import { AiFillEye, AiOutlineShopping } from "react-icons/ai";

export const Product = ({ informations }) => {
	const { title, img, price, promo } = informations;
	const pricePromo = ((100 - promo) / 100) * price;
	return (
		<div className="product_card">
			<div className="product_img">
				<Link to="/">
					<img src={img} alt={title} width="100%" />
					{promo > 0 && (
						<div className="promo_container">
							<span className="product_promo-label">promo</span>
							<span className="product_promo-unit">- {promo}%</span>
						</div>
					)}
				</Link>
			</div>
			<div className="product_content">
				<h4 className="product_content-title">{title}</h4>
				<div className="product_content-price">
					{promo > 0 ? (
						<>
							<div className="first_price">{priceFormatted(pricePromo)}</div>
							<div className="second_price">{priceFormatted(price)}</div>
						</>
					) : (
						<div className="first_price">{priceFormatted(price)}</div>
					)}
				</div>
				<div className="actionBtn">
					<Link to="/">
						<AiFillEye />
					</Link>
					<Link to="/">
						<AiOutlineShopping />
					</Link>
				</div>
			</div>
		</div>
	);
};
